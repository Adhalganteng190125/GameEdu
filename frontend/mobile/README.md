# frontend/mobile

**Progressive Web App (PWA)** untuk siswa — digunakan untuk menjawab soal, baik secara individu
maupun kelompok, dari perangkat mobile (lihat slide 5 — "Tampilan Mobile").

## Status

🚧 **Direncanakan untuk Milestone 2.** Folder ini baru berupa kerangka.

## Rencana implementasi

- React + Vite + TypeScript + `vite-plugin-pwa` (installable, bisa dipakai offline-first)
- Menggunakan `@gameedu/types` dan `@gameedu/ui` yang sama dengan `frontend/web`
- Alur: masuk kode room → pilih/lihat soal → kirim jawaban → lihat hasil tim (mirip contoh
  "Mobile · Kapten" dan "Mobile · Diskusi" pada slide presentasi)
- Tampilan dioptimalkan untuk layar ponsel (portrait, tombol besar, kontras tinggi)
