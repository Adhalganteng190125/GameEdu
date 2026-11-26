-- Seed: 3 contoh soal Bab 3 - Barisan dan Deret
INSERT INTO soal (id, bab, pertanyaan, jenis, tingkat, opsi_json, jawaban_benar, durasi_detik, sudah_direview)
VALUES
  (
    UUID(),
    'Bab 3 - Barisan dan Deret',
    'Suku ke-5 dari barisan aritmetika 3, 7, 11, ... adalah?',
    'pilihan_ganda',
    'C2',
    JSON_ARRAY(
      JSON_OBJECT('id','a','teks','15'),
      JSON_OBJECT('id','b','teks','19'),
      JSON_OBJECT('id','c','teks','21'),
      JSON_OBJECT('id','d','teks','23')
    ),
    'b',
    20,
    1
  ),
  (
    UUID(),
    'Bab 3 - Barisan dan Deret',
    'Jumlah 10 suku pertama dari deret 2 + 4 + 6 + ... adalah?',
    'pilihan_ganda',
    'C3',
    JSON_ARRAY(
      JSON_OBJECT('id','a','teks','100'),
      JSON_OBJECT('id','b','teks','110'),
      JSON_OBJECT('id','c','teks','120'),
      JSON_OBJECT('id','d','teks','90')
    ),
    'b',
    30,
    1
  ),
  (
    UUID(),
    'Bab 3 - Barisan dan Deret',
    'Tabungan naik Rp5.000 per minggu dari Rp50.000. Berapa tabungan pada minggu ke-8?',
    'isian_singkat',
    'C4',
    NULL,
    '85000',
    45,
    0
  );
