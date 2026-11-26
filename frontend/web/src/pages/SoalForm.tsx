import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "@gameedu/ui";
import type { JenisSoal, OpsiJawaban, TingkatSoal } from "@gameedu/types";
import { addSoal } from "../lib/soalStorage";

const defaultOpsi: OpsiJawaban[] = [
  { id: "a", teks: "" },
  { id: "b", teks: "" },
  { id: "c", teks: "" },
  { id: "d", teks: "" },
];

export default function SoalForm() {
  const navigate = useNavigate();

  const [bab, setBab] = useState("Bab 3 - Barisan dan Deret");
  const [pertanyaan, setPertanyaan] = useState("");
  const [jenis, setJenis] = useState<JenisSoal>("pilihan_ganda");
  const [tingkat, setTingkat] = useState<TingkatSoal>("C1");
  const [opsi, setOpsi] = useState<OpsiJawaban[]>(defaultOpsi);
  const [jawabanBenar, setJawabanBenar] = useState("a");
  const [durasiDetik, setDurasiDetik] = useState(20);
  const [error, setError] = useState<string | null>(null);

  function handleOpsiChange(id: string, teks: string) {
    setOpsi((prev) => prev.map((o) => (o.id === id ? { ...o, teks } : o)));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!pertanyaan.trim()) {
      setError("Pertanyaan wajib diisi.");
      return;
    }
    if (jenis === "pilihan_ganda" && opsi.some((o) => !o.teks.trim())) {
      setError("Semua opsi jawaban (A-D) wajib diisi untuk soal pilihan ganda.");
      return;
    }
    if (!jawabanBenar.trim()) {
      setError("Jawaban benar wajib diisi.");
      return;
    }

    addSoal({
      bab,
      pertanyaan,
      jenis,
      tingkat,
      opsi: jenis === "pilihan_ganda" ? opsi : undefined,
      jawabanBenar,
      durasiDetik,
    });

    navigate("/bank-soal");
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Tambah soal baru</h1>
        <p className="text-sm text-slate-500">Isi detail soal di bawah ini untuk ditambahkan ke bank soal.</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
          )}

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Bab</label>
            <input
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
              value={bab}
              onChange={(e) => setBab(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Pertanyaan</label>
            <textarea
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
              rows={3}
              value={pertanyaan}
              onChange={(e) => setPertanyaan(e.target.value)}
              placeholder="Tuliskan pertanyaan soal di sini..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Jenis soal</label>
              <select
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                value={jenis}
                onChange={(e) => setJenis(e.target.value as JenisSoal)}
              >
                <option value="pilihan_ganda">Pilihan ganda</option>
                <option value="isian_singkat">Isian singkat</option>
                <option value="benar_salah">Benar / Salah</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Tingkat (Taksonomi Bloom)
              </label>
              <select
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                value={tingkat}
                onChange={(e) => setTingkat(e.target.value as TingkatSoal)}
              >
                {(["C1", "C2", "C3", "C4", "C5", "C6"] as TingkatSoal[]).map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {jenis === "pilihan_ganda" && (
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Opsi jawaban</label>
              <div className="flex flex-col gap-2">
                {opsi.map((o) => (
                  <div key={o.id} className="flex items-center gap-2">
                    <span className="w-6 text-sm font-semibold uppercase text-slate-500">
                      {o.id}
                    </span>
                    <input
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                      value={o.teks}
                      onChange={(e) => handleOpsiChange(o.id, e.target.value)}
                      placeholder={`Opsi ${o.id.toUpperCase()}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Jawaban benar</label>
              {jenis === "pilihan_ganda" ? (
                <select
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                  value={jawabanBenar}
                  onChange={(e) => setJawabanBenar(e.target.value)}
                >
                  {opsi.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.id.toUpperCase()}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                  value={jawabanBenar}
                  onChange={(e) => setJawabanBenar(e.target.value)}
                  placeholder="Jawaban yang dianggap benar"
                />
              )}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Durasi (detik)</label>
              <input
                type="number"
                min={5}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                value={durasiDetik}
                onChange={(e) => setDurasiDetik(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="mt-2 flex justify-end gap-3">
            <Button type="button" variant="ghost" onClick={() => navigate("/bank-soal")}>
              Batal
            </Button>
            <Button type="submit">Simpan soal</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
