/**
 * Tipe data bersama yang dipakai oleh frontend (web, smartboard, mobile) dan backend.
 */

export type TingkatSoal = "C1" | "C2" | "C3" | "C4" | "C5" | "C6";

export type JenisSoal = "pilihan_ganda" | "isian_singkat" | "benar_salah";

export interface OpsiJawaban {
  id: string;
  teks: string;
}

export interface Soal {
  id: string;
  bab: string;
  pertanyaan: string;
  jenis: JenisSoal;
  tingkat: TingkatSoal;
  opsi?: OpsiJawaban[];
  jawabanBenar: string;
  durasiDetik: number;
  sudahDireview: boolean;
  dibuatPada: string; // ISO date string
}

export interface Kelas {
  id: string;
  nama: string; // contoh: "XI IPA 2"
  guruId: string;
  jumlahSiswa: number;
}

export interface Siswa {
  id: string;
  nama: string;
  kelasId: string;
  nis?: string;
}

export type ModeSesiGame = "latihan" | "arena_tim";

export type StatusSesiGame = "draft" | "siap" | "berlangsung" | "selesai";

export interface SesiGame {
  id: string;
  namaPermainan: string; // contoh: "Speed Clash", "Territory Grid"
  bab: string;
  kelasId: string;
  mode: ModeSesiGame;
  soalIds: string[];
  status: StatusSesiGame;
  kodeRoom?: string;
  dibuatPada: string;
}

export interface Guru {
  id: string;
  nama: string;
  mataPelajaran: string;
  email: string;
}
