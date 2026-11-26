import type { Soal } from "@gameedu/types";
import * as soalRepository from "../repositories/soal.repository";
import { AppError } from "../middlewares/error.middleware";

export async function listSoal(): Promise<Soal[]> {
  return soalRepository.findAll();
}

export async function getSoal(id: string): Promise<Soal> {
  const soal = await soalRepository.findById(id);
  if (!soal) {
    throw new AppError(`Soal dengan id "${id}" tidak ditemukan`, 404);
  }
  return soal;
}

export interface CreateSoalDto {
  bab: string;
  pertanyaan: string;
  jenis: Soal["jenis"];
  tingkat: Soal["tingkat"];
  opsi?: Soal["opsi"];
  jawabanBenar: string;
  durasiDetik?: number;
}

function validateCreateSoal(dto: CreateSoalDto) {
  if (!dto.bab?.trim()) throw new AppError('Field "bab" wajib diisi');
  if (!dto.pertanyaan?.trim()) throw new AppError('Field "pertanyaan" wajib diisi');
  if (!dto.jawabanBenar?.trim()) throw new AppError('Field "jawabanBenar" wajib diisi');
  if (dto.jenis === "pilihan_ganda" && (!dto.opsi || dto.opsi.length < 2)) {
    throw new AppError('Soal pilihan ganda membutuhkan minimal 2 "opsi"');
  }
}

export async function createSoal(dto: CreateSoalDto): Promise<Soal> {
  validateCreateSoal(dto);
  return soalRepository.create({
    bab: dto.bab,
    pertanyaan: dto.pertanyaan,
    jenis: dto.jenis,
    tingkat: dto.tingkat,
    opsi: dto.opsi,
    jawabanBenar: dto.jawabanBenar,
    durasiDetik: dto.durasiDetik ?? 20,
  });
}

export async function reviewSoal(id: string, sudahDireview: boolean): Promise<Soal> {
  await getSoal(id); // pastikan ada, lempar 404 jika tidak
  await soalRepository.setReviewed(id, sudahDireview);
  return getSoal(id);
}

export async function deleteSoal(id: string): Promise<void> {
  await getSoal(id); // pastikan ada, lempar 404 jika tidak
  await soalRepository.remove(id);
}
