export function Topbar() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 bg-white px-6">
      <div>
        <p className="text-sm text-slate-400">Selamat datang kembali,</p>
        <p className="text-sm font-semibold text-slate-700">[Nama Guru] · Matematika</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500 sm:inline-block">
          Kelas aktif: XI IPA 2
        </span>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
          G
        </div>
      </div>
    </header>
  );
}
