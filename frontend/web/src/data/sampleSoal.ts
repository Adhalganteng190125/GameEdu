import type { Soal } from "@gameedu/types";

/**
 * Data contoh soal Bab 3 - Barisan dan Deret.
 * Dipakai sebagai data awal saat localStorage masih kosong (Milestone 1).
 * Nantinya akan digantikan oleh data dari backend/database (Milestone 2+).
 */
export const sampleSoal: Soal[] = [
  {
    id: "soal-1",
    bab: "Bab 3 - Barisan dan Deret",
    pertanyaan: "Suku ke-5 dari barisan aritmetika 3, 7, 11, ... adalah?",
    jenis: "pilihan_ganda",
    tingkat: "C2",
    opsi: [
      { id: "a", teks: "15" },
      { id: "b", teks: "19" },
      { id: "c", teks: "21" },
      { id: "d", teks: "23" },
    ],
    jawabanBenar: "b",
    durasiDetik: 20,
    sudahDireview: true,
    dibuatPada: new Date().toISOString(),
  },
  {
    id: "soal-2",
    bab: "Bab 3 - Barisan dan Deret",
    pertanyaan: "Jumlah 10 suku pertama dari deret 2 + 4 + 6 + ... adalah?",
    jenis: "pilihan_ganda",
    tingkat: "C3",
    opsi: [
      { id: "a", teks: "100" },
      { id: "b", teks: "110" },
      { id: "c", teks: "120" },
      { id: "d", teks: "90" },
    ],
    jawabanBenar: "b",
    durasiDetik: 30,
    sudahDireview: true,
    dibuatPada: new Date().toISOString(),
  },
  {
    id: "soal-3",
    bab: "Bab 3 - Barisan dan Deret",
    pertanyaan: "Tabungan naik Rp5.000 per minggu dari Rp50.000. Berapa tabungan pada minggu ke-8?",
    jenis: "isian_singkat",
    tingkat: "C4",
    jawabanBenar: "85000",
    durasiDetik: 45,
    sudahDireview: false,
    dibuatPada: new Date().toISOString(),
  },
];
