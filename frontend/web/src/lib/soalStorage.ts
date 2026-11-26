import type { Soal } from "@gameedu/types";
import { sampleSoal } from "../data/sampleSoal";

/**
 * Penyimpanan soal sementara memakai localStorage.
 *
 * Pada Milestone 1, dashboard guru harus bisa ditampilkan dan dicoba tanpa
 * perlu menjalankan backend/database terlebih dahulu. Pada Milestone 2+,
 * fungsi-fungsi ini akan diganti memanggil REST API backend (lihat backend/src/routes/soal.routes.ts).
 */

const STORAGE_KEY = "gameedu.soal";

function readAll(): Soal[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleSoal));
      return sampleSoal;
    }
    return JSON.parse(raw) as Soal[];
  } catch {
    return sampleSoal;
  }
}

function writeAll(soal: Soal[]): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(soal));
}

export function getAllSoal(): Soal[] {
  return readAll();
}

export function getSoalByBab(bab: string): Soal[] {
  return readAll().filter((s) => s.bab === bab);
}

export function addSoal(input: Omit<Soal, "id" | "dibuatPada" | "sudahDireview">): Soal {
  const all = readAll();
  const newSoal: Soal = {
    ...input,
    id: `soal-${Date.now()}`,
    sudahDireview: false,
    dibuatPada: new Date().toISOString(),
  };
  writeAll([newSoal, ...all]);
  return newSoal;
}

export function setReviewed(id: string, sudahDireview: boolean): void {
  const all = readAll();
  writeAll(all.map((s) => (s.id === id ? { ...s, sudahDireview } : s)));
}

export function deleteSoal(id: string): void {
  const all = readAll();
  writeAll(all.filter((s) => s.id !== id));
}

export function resetToSampleData(): void {
  writeAll(sampleSoal);
}
