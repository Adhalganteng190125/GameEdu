# GameEdu

Platform Game Edukasi — **Web, Smartboard, dan Mobile** terintegrasi.
Membuat aplikasi game edukasi yang bisa digunakan oleh pendidik/tutor untuk pembelajaran interaktif.

Tugas Akhir — Mata Kuliah **Pemrograman Web II**
Dosen: Uli Rizki, M.Kom — Universitas Nurul Huda

## Gambaran Permainan (Progressive Web Application)

| Platform | Digunakan oleh | Fungsi |
|---|---|---|
| **Web** | Guru | Mengatur soal, sesi game, kelas, siswa, dan laporan |
| **Smartboard** | Guru & Siswa | Media interaktif antara guru dan murid |
| **Mobile** | Siswa | Menjawab soal secara individu maupun kelompok |

## Status Milestone

- [x] **Milestone 1** — Project, repository, dan tampilan Web untuk Guru (dashboard, bank soal)
- [ ] **Milestone 2** — Tampilan Smartboard & Mobile, integrasi sesi game real-time
- [ ] **Milestone 3** — Laporan, autentikasi, deployment

## Struktur Proyek

```
GameEdu/
├── docker-compose.yml       # MySQL + phpMyAdmin untuk pengembangan lokal
├── docs/                    # Aset & panduan anggota kelompok
├── frontend/
│   ├── web/                 # Dashboard Guru (React + Vite + TS) — fokus Milestone 1
│   ├── smartboard/          # Tampilan Smartboard — Milestone 2
│   └── mobile/              # PWA Siswa — Milestone 2
├── backend/                 # REST API (Node + Express + TypeScript)
├── sql/                     # Migration & seed SQL (MySQL)
└── packages/
    ├── types/               # Tipe TypeScript bersama (Soal, Kelas, Siswa, SesiGame)
    └── ui/                  # Komponen UI bersama (Button, Card, Badge)
```

## Menjalankan Proyek (Development)

### 1. Prasyarat
- Node.js 20+ (lihat `.nvmrc`)
- Docker & Docker Compose (untuk database MySQL lokal)

### 2. Install dependencies
```bash
npm install
```

### 3. Jalankan database
```bash
npm run db:up
```
phpMyAdmin tersedia di `http://localhost:8081` (user: `root`, password: `root`).

### 4. Migrasi & seed database
```bash
cp backend/.env.example backend/.env
npm run db:migrate
npm run db:seed
```

### 5. Jalankan backend & frontend web
```bash
npm run dev
```
- Backend API: `http://localhost:3001`
- Web Dashboard Guru: `http://localhost:5173`

> Catatan: Pada Milestone 1, dashboard Guru bisa berjalan mandiri memakai data contoh di `localStorage`
> (lihat `frontend/web/src/lib/soalStorage.ts`) walau backend/database belum dijalankan.

## Tim Pengembang

| Nama | Peran | GitHub |
|---|---|---|
| M adhal muntaha | Ketua Kelompok | |
| _Anggota 2_ | Anggota | |
| _Anggota 3_ | Anggota | |
| _Anggota 4_ | Anggota | |

> Lengkapi tabel ini dengan data anggota kelompok kalian yang sebenarnya.

## Lisensi

Proyek tugas kuliah — bebas digunakan untuk keperluan pembelajaran.
