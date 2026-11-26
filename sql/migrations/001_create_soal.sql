-- Migration 001: tabel soal (bank soal)
CREATE TABLE IF NOT EXISTS soal (
  id            CHAR(36)      NOT NULL PRIMARY KEY,
  bab           VARCHAR(150)  NOT NULL,
  pertanyaan    TEXT          NOT NULL,
  jenis         ENUM('pilihan_ganda', 'isian_singkat', 'benar_salah') NOT NULL DEFAULT 'pilihan_ganda',
  tingkat       ENUM('C1','C2','C3','C4','C5','C6') NOT NULL DEFAULT 'C1',
  opsi_json     JSON          NULL,
  jawaban_benar VARCHAR(255)  NOT NULL,
  durasi_detik  INT UNSIGNED  NOT NULL DEFAULT 20,
  sudah_direview TINYINT(1)  NOT NULL DEFAULT 0,
  dibuat_pada   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  diperbarui_pada DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  INDEX idx_soal_bab (bab),
  INDEX idx_soal_tingkat (tingkat)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
