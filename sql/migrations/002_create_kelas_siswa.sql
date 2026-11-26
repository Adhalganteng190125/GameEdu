-- Migration 002: tabel kelas dan siswa
CREATE TABLE IF NOT EXISTS kelas (
  id            CHAR(36)      NOT NULL PRIMARY KEY,
  nama          VARCHAR(100)  NOT NULL,        -- contoh: "XI IPA 2"
  guru_id       CHAR(36)      NULL,
  dibuat_pada   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS siswa (
  id            CHAR(36)      NOT NULL PRIMARY KEY,
  nama          VARCHAR(150)  NOT NULL,
  nis           VARCHAR(50)   NULL,
  kelas_id      CHAR(36)      NOT NULL,
  dibuat_pada   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT fk_siswa_kelas FOREIGN KEY (kelas_id) REFERENCES kelas (id) ON DELETE CASCADE,
  INDEX idx_siswa_kelas (kelas_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
