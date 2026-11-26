import fs from "node:fs";
import path from "node:path";
import { pool } from "../config/db";

/**
 * Menjalankan semua file .sql di folder sql/seeds secara berurutan.
 * Jalankan dengan: npm run db:seed
 */
async function main() {
  const seedsDir = path.resolve(__dirname, "../../../sql/seeds");
  const files = fs
    .readdirSync(seedsDir)
    .filter((f) => f.endsWith(".sql"))
    .sort();

  if (files.length === 0) {
    console.log("[seed] Tidak ada file seed ditemukan di", seedsDir);
    return;
  }

  for (const file of files) {
    const fullPath = path.join(seedsDir, file);
    const sql = fs.readFileSync(fullPath, "utf-8");
    console.log(`[seed] Menjalankan ${file} ...`);
    const statements = sql
      .split(/;\s*(?:\n|$)/)
      .map((s) => s.trim())
      .filter(Boolean);
    for (const statement of statements) {
      await pool.query(statement);
    }
  }

  console.log("[seed] Selesai. Data contoh berhasil ditambahkan.");
  await pool.end();
}

main().catch((err) => {
  console.error("[seed] Gagal:", err);
  process.exit(1);
});
