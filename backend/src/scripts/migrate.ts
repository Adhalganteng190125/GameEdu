import fs from "node:fs";
import path from "node:path";
import { pool } from "../config/db";

/**
 * Menjalankan semua file .sql di folder sql/migrations secara berurutan (berdasarkan nama file).
 * Jalankan dengan: npm run db:migrate
 */
async function main() {
  const migrationsDir = path.resolve(__dirname, "../../../sql/migrations");
  const files = fs
    .readdirSync(migrationsDir)
    .filter((f) => f.endsWith(".sql"))
    .sort();

  if (files.length === 0) {
    console.log("[migrate] Tidak ada file migrasi ditemukan di", migrationsDir);
    return;
  }

  for (const file of files) {
    const fullPath = path.join(migrationsDir, file);
    const sql = fs.readFileSync(fullPath, "utf-8");
    console.log(`[migrate] Menjalankan ${file} ...`);
    // multipleStatements tidak diaktifkan di pool utama demi keamanan,
    // jadi di sini kita pecah per statement menggunakan koneksi khusus.
    const statements = sql
      .split(/;\s*(?:\n|$)/)
      .map((s) => s.trim())
      .filter(Boolean);
    for (const statement of statements) {
      await pool.query(statement);
    }
  }

  console.log("[migrate] Selesai. Semua migrasi berhasil dijalankan.");
  await pool.end();
}

main().catch((err) => {
  console.error("[migrate] Gagal:", err);
  process.exit(1);
});
