import { randomUUID } from "node:crypto";
import type { RowDataPacket } from "mysql2";
import { pool } from "../config/db";
import type { Soal } from "@gameedu/types";

/**
 * Satu-satunya lapisan yang boleh berisi SQL mentah untuk tabel `soal`.
 * Service/controller tidak boleh menulis query SQL langsung.
 */

interface SoalRow extends RowDataPacket {
  id: string;
  bab: string;
  pertanyaan: string;
  jenis: Soal["jenis"];
  tingkat: Soal["tingkat"];
  opsi_json: string | null;
  jawaban_benar: string;
  durasi_detik: number;
  sudah_direview: number;
  dibuat_pada: string;
}

function toSoal(row: SoalRow): Soal {
  return {
    id: row.id,
    bab: row.bab,
    pertanyaan: row.pertanyaan,
    jenis: row.jenis,
    tingkat: row.tingkat,
    opsi: row.opsi_json ? JSON.parse(row.opsi_json) : undefined,
    jawabanBenar: row.jawaban_benar,
    durasiDetik: row.durasi_detik,
    sudahDireview: Boolean(row.sudah_direview),
    dibuatPada: row.dibuat_pada,
  };
}

export async function findAll(): Promise<Soal[]> {
  const [rows] = await pool.query<SoalRow[]>(
    "SELECT * FROM soal ORDER BY dibuat_pada DESC"
  );
  return rows.map(toSoal);
}

export async function findById(id: string): Promise<Soal | null> {
  const [rows] = await pool.query<SoalRow[]>("SELECT * FROM soal WHERE id = :id", { id });
  return rows[0] ? toSoal(rows[0]) : null;
}

export interface CreateSoalInput {
  bab: string;
  pertanyaan: string;
  jenis: Soal["jenis"];
  tingkat: Soal["tingkat"];
  opsi?: Soal["opsi"];
  jawabanBenar: string;
  durasiDetik: number;
}

export async function create(input: CreateSoalInput): Promise<Soal> {
  const id = randomUUID();
  await pool.query(
    `INSERT INTO soal (id, bab, pertanyaan, jenis, tingkat, opsi_json, jawaban_benar, durasi_detik, sudah_direview)
     VALUES (:id, :bab, :pertanyaan, :jenis, :tingkat, :opsiJson, :jawabanBenar, :durasiDetik, 0)`,
    {
      id,
      bab: input.bab,
      pertanyaan: input.pertanyaan,
      jenis: input.jenis,
      tingkat: input.tingkat,
      opsiJson: input.opsi ? JSON.stringify(input.opsi) : null,
      jawabanBenar: input.jawabanBenar,
      durasiDetik: input.durasiDetik,
    }
  );
  const created = await findById(id);
  if (!created) throw new Error("Gagal membuat soal");
  return created;
}

export async function setReviewed(id: string, sudahDireview: boolean): Promise<void> {
  await pool.query("UPDATE soal SET sudah_direview = :value WHERE id = :id", {
    id,
    value: sudahDireview ? 1 : 0,
  });
}

export async function remove(id: string): Promise<void> {
  await pool.query("DELETE FROM soal WHERE id = :id", { id });
}
