import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, CardHeader, CardTitle, type BadgeColor } from "@gameedu/ui";
import type { Soal } from "@gameedu/types";
import { deleteSoal, getAllSoal, setReviewed } from "../lib/soalStorage";

const tingkatColor: Record<Soal["tingkat"], BadgeColor> = {
  C1: "slate",
  C2: "orange",
  C3: "green",
  C4: "blue",
  C5: "pink",
  C6: "pink",
};

export default function SoalList() {
  const [soal, setSoal] = useState<Soal[]>([]);

  function reload() {
    setSoal(getAllSoal());
  }

  useEffect(() => {
    reload();
  }, []);

  function handleToggleReview(s: Soal) {
    setReviewed(s.id, !s.sudahDireview);
    reload();
  }

  function handleDelete(s: Soal) {
    if (confirm(`Hapus soal "${s.pertanyaan.slice(0, 40)}..."?`)) {
      deleteSoal(s.id);
      reload();
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Bank soal</h1>
          <p className="text-sm text-slate-500">Kelola semua soal yang bisa dipakai pada sesi game.</p>
        </div>
        <Link to="/bank-soal/tambah">
          <Button>+ Tambah soal</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Semua soal ({soal.length})</CardTitle>
        </CardHeader>

        {soal.length === 0 ? (
          <p className="py-10 text-center text-sm text-slate-400">
            Belum ada soal. Klik "+ Tambah soal" untuk membuat soal pertama.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
                  <th className="py-2 pr-4">Tingkat</th>
                  <th className="py-2 pr-4">Pertanyaan</th>
                  <th className="py-2 pr-4">Bab</th>
                  <th className="py-2 pr-4">Jenis</th>
                  <th className="py-2 pr-4">Durasi</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2 pr-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {soal.map((s) => (
                  <tr key={s.id}>
                    <td className="py-3 pr-4">
                      <Badge color={tingkatColor[s.tingkat]}>{s.tingkat}</Badge>
                    </td>
                    <td className="max-w-xs py-3 pr-4 text-slate-700">
                      <span className="line-clamp-2">{s.pertanyaan}</span>
                    </td>
                    <td className="py-3 pr-4 text-slate-500">{s.bab}</td>
                    <td className="py-3 pr-4 text-slate-500">
                      {s.jenis === "pilihan_ganda" ? "Pilihan ganda" : "Isian singkat"}
                    </td>
                    <td className="py-3 pr-4 text-slate-500">{s.durasiDetik} dtk</td>
                    <td className="py-3 pr-4">
                      {s.sudahDireview ? (
                        <Badge color="green">Direview</Badge>
                      ) : (
                        <Badge color="orange">Perlu review</Badge>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => handleToggleReview(s)}>
                          {s.sudahDireview ? "Batal review" : "Review"}
                        </Button>
                        <Button variant="ghost" onClick={() => handleDelete(s)}>
                          Hapus
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
