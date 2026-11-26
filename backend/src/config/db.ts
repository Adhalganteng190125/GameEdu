import mysql from "mysql2/promise";
import { env } from "./env";

/**
 * Pool koneksi MySQL tunggal yang dipakai di seluruh aplikasi.
 * Jangan buat koneksi baru di tempat lain — import `pool` ini saja.
 */
export const pool = mysql.createPool({
  host: env.db.host,
  port: env.db.port,
  user: env.db.user,
  password: env.db.password,
  database: env.db.database,
  waitForConnections: true,
  connectionLimit: 10,
  namedPlaceholders: true,
});

export async function checkDbConnection(): Promise<boolean> {
  try {
    const conn = await pool.getConnection();
    await conn.ping();
    conn.release();
    return true;
  } catch (error) {
    console.error("[db] Gagal terhubung ke database:", (error as Error).message);
    return false;
  }
}
