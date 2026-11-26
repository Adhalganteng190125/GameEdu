-- Migration 003: tabel sesi_game dan jawaban
CREATE TABLE IF NOT EXISTS sesi_game (
  id              CHAR(36)      NOT NULL PRIMARY KEY,
  nama_permainan  VARCHAR(100)  NOT NULL,       -- contoh: "Speed Clash", "Territory Grid"
  bab             VARCHAR(150)  NOT NULL,
  kelas_id        CHAR(36)      NOT NULL,
  mode            ENUM('latihan', 'arena_tim') NOT NULL DEFAULT 'latihan',
  status          ENUM('draft', 'siap', 'berlangsung', 'selesai') NOT NULL DEFAULT 'draft',
  kode_room       VARCHAR(20)   NULL,
  dibuat_pada     DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT fk_sesi_kelas FOREIGN KEY (kelas_id) REFERENCES kelas (id) ON DELETE CASCADE,
  INDEX idx_sesi_kelas (kelas_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS sesi_game_soal (
  sesi_id   CHAR(36) NOT NULL,
  soal_id   CHAR(36) NOT NULL,
  urutan    INT UNSIGNED NOT NULL DEFAULT 0,

  PRIMARY KEY (sesi_id, soal_id),
  CONSTRAINT fk_sgs_sesi FOREIGN KEY (sesi_id) REFERENCES sesi_game (id) ON DELETE CASCADE,
  CONSTRAINT fk_sgs_soal FOREIGN KEY (soal_id) REFERENCES soal (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS jawaban (
  id          CHAR(36)      NOT NULL PRIMARY KEY,
  sesi_id     CHAR(36)      NOT NULL,
  soal_id     CHAR(36)      NOT NULL,
  siswa_id    CHAR(36)      NOT NULL,
  jawaban     VARCHAR(255)  NOT NULL,
  benar       TINYINT(1)    NOT NULL DEFAULT 0,
  durasi_jawab_detik INT UNSIGNED NOT NULL DEFAULT 0,
  dijawab_pada DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT fk_jawaban_sesi FOREIGN KEY (sesi_id) REFERENCES sesi_game (id) ON DELETE CASCADE,
  CONSTRAINT fk_jawaban_soal FOREIGN KEY (soal_id) REFERENCES soal (id) ON DELETE CASCADE,
  CONSTRAINT fk_jawaban_siswa FOREIGN KEY (siswa_id) REFERENCES siswa (id) ON DELETE CASCADE,
  INDEX idx_jawaban_sesi (sesi_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
