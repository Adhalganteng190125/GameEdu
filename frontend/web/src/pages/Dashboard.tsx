import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, CardHeader, CardTitle } from "@gameedu/ui";
import type { Soal } from "@gameedu/types";
import { getAllSoal } from "../lib/soalStorage";

function StatCard({
  title,
  value,
  caption,
  accent,
}: {
  title: string;
  value: string;
  caption: string;
  accent: "orange" | "green" | "blue";
}) {
  const accentClass = {
    orange: "bg-amber-50 text-amber-600",
    green: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
  }[accent];

  return (
    <Card className="flex items-start gap-4">
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg ${accentClass}`}>
        ●
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-700">{title}</p>
        <p className="text-xs text-slate-400">{caption}</p>
        <p className="mt-1 text-lg font-bold text-slate-800">{value}</p>
      </div>
    </Card>
  );
}

export default function Dashboard() {
  const [soal, setSoal] = useState<Soal[]>([]);

  useEffect(() => {
    setSoal(getAllSoal());
  }, []);

  const totalSoal = soal.length;
  const sudahDireview = useMemo(() => soal.filter((s) => s.sudahDireview).length, [soal]);
  const soalHots = useMemo(
    () => soal.filter((s) => ["C4", "C5", "C6"].includes(s.tingkat)).length,
    [soal]
  );
  const soalTerbaru = soal.slice(0, 3);

  return (
    <div className="flex flex-col gap-6">
      {/* Hero */}
      <Card className="flex flex-col items-center justify-between gap-6 bg-gradient-to-r from-brand-600 to-brand-500 p-8 text-white md:flex-row">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Ubah bab jadi arena kelas</h1>
          <p className="mt-2 max-w-md text-sm text-brand-50">
            Kelola bank soal, buat sesi game, dan pantau progres siswa — semua dari satu dashboard.
          </p>
          <Link to="/sesi-game">
            <Button variant="secondary" className="mt-4">
              Buat sesi game →
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center text-sm font-bold text-brand-700">
          {["A", "B", "C", "D"].map((huruf) => (
            <div
              key={huruf}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90"
            >
              {huruf}
            </div>
          ))}
        </div>
      </Card>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          title="Total soal"
          caption="Semua bab"
          value={`${totalSoal} soal`}
          accent="orange"
        />
        <StatCard
          title="Sudah direview"
          caption="Siap dipakai di game"
          value={`${sudahDireview} dari ${totalSoal}`}
          accent="green"
        />
        <StatCard title="Soal HOTS" caption="Level C4–C6" value={`${soalHots} soal`} accent="blue" />
      </div>

      {/* Soal terbaru */}
      <Card>
        <CardHeader>
          <CardTitle>Soal terbaru</CardTitle>
          <Link to="/bank-soal" className="text-sm font-semibold text-brand-600 hover:underline">
            + Tambah soal
          </Link>
        </CardHeader>

        {soalTerbaru.length === 0 ? (
          <p className="py-8 text-center text-sm text-slate-400">
            Belum ada soal. Mulai tambahkan soal pertamamu di menu Bank soal.
          </p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {soalTerbaru.map((s) => (
              <li key={s.id} className="flex items-center justify-between gap-4 py-3">
                <div className="flex items-center gap-3">
                  <Badge color="orange">{s.tingkat}</Badge>
                  <div>
                    <p className="text-sm font-medium text-slate-700 line-clamp-1">
                      {s.pertanyaan}
                    </p>
                    <p className="text-xs text-slate-400">
                      {s.jenis === "pilihan_ganda" ? "Pilihan ganda" : "Isian singkat"}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-slate-400">{s.durasiDetik} dtk</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
