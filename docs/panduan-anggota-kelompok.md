# Panduan Anggota Kelompok — Kolaborasi 1 Repository

Sesuai aturan Milestone 1: **1 kelompok = 1 project = 1 repository**, dan semua anggota harus bisa
berkolaborasi di repository yang sama. Berikut langkah-langkahnya.

## Peran Ketua Kelompok (pemilik repository)

1. Buat repository baru di GitHub:
   - Nama repository: `GameEdu` (atau `GameEdu-NamaKelompok` jika nama sudah dipakai)
   - **Visibility: Public** (wajib sesuai instruksi dosen)
   - Jangan centang "Add README" (README sudah disiapkan di project ini)
2. Push project ini ke repository tersebut (lihat perintah di bawah).
3. Tambahkan anggota kelompok sebagai **Collaborator**:
   - Buka repo di GitHub → **Settings** → **Collaborators** → **Add people**
   - Masukkan username GitHub tiap anggota, lalu kirim undangan.
4. Bagikan link repository ke anggota kelompok dan kumpulkan link-nya di classroom.

## Push pertama kali (dilakukan ketua kelompok)

```bash
cd GameEdu
git init
git add .
git commit -m "Milestone 1: scaffold project GameEdu (web, backend, sql, packages)"
git branch -M main
git remote add origin https://github.com/<username-ketua>/GameEdu.git
git push -u origin main
```

## Peran Anggota Kelompok (setelah diundang sebagai collaborator)

1. Terima undangan collaborator yang dikirim lewat email/notifikasi GitHub.
2. Clone repository:
   ```bash
   git clone https://github.com/<username-ketua>/GameEdu.git
   cd GameEdu
   npm install
   ```
3. Buat branch sendiri sebelum mengerjakan sesuatu (jangan langsung di `main`):
   ```bash
   git checkout -b fitur/nama-fitur-kamu
   ```
4. Setelah selesai, push branch dan buat Pull Request ke `main`:
   ```bash
   git add .
   git commit -m "Menambahkan: deskripsi singkat perubahan"
   git push -u origin fitur/nama-fitur-kamu
   ```
   Lalu buka GitHub → **Pull Requests** → **New Pull Request**.
5. Anggota lain / ketua kelompok me-review sebelum di-merge ke `main`.

## Pembagian Tugas yang Disarankan (4 anggota)

| Anggota | Fokus Area |
|---|---|
| Ketua Kelompok | Koordinasi, setup repository, review PR, dashboard guru (overview) |
| Anggota 2 | Bank soal (CRUD soal) — `frontend/web/src/pages/SoalList.tsx`, `SoalForm.tsx` |
| Anggota 3 | Backend API & database — `backend/`, `sql/` |
| Anggota 4 | Kelas & siswa, laporan — halaman tambahan di `frontend/web/src/pages/` |

Sesuaikan pembagian ini dengan kesepakatan kelompok masing-masing.
