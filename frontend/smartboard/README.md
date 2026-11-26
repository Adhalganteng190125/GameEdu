# frontend/smartboard

Tampilan **Smartboard** — media interaktif antara guru dan siswa (contoh: menampilkan papan
permainan "Territory Grid" di depan kelas, kode room, giliran tim, dsb).

## Status

🚧 **Direncanakan untuk Milestone 2.** Folder ini baru berupa kerangka.

## Rencana implementasi

- React + Vite + TypeScript, mengikuti pola yang sama dengan `frontend/web`
- Menggunakan `@gameedu/types` dan `@gameedu/ui` yang sama agar konsisten
- Terhubung ke backend lewat WebSocket/polling untuk update state permainan secara real-time
- Mode tampilan layar lebar (landscape), dioptimalkan untuk proyektor/smartboard sekolah

Lihat gambaran fitur di slide presentasi Milestone 1 (slide 4 — "Tampilan Smartboard").
