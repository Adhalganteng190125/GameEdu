import { Card } from "@gameedu/ui";

export function ComingSoon({
  title,
  description,
  milestone = "Milestone 2",
}: {
  title: string;
  description: string;
  milestone?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold text-slate-800">{title}</h1>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      <Card className="flex flex-col items-center justify-center gap-2 py-16 text-center">
        <span className="text-3xl">🚧</span>
        <p className="font-semibold text-slate-700">Segera hadir di {milestone}</p>
        <p className="max-w-sm text-sm text-slate-400">
          Halaman ini masih berupa kerangka. Fitur lengkapnya akan dikembangkan pada milestone berikutnya.
        </p>
      </Card>
    </div>
  );
}
