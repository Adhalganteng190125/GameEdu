import type { HTMLAttributes, ReactNode } from "react";

export type BadgeColor = "blue" | "orange" | "green" | "pink" | "slate";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  children: ReactNode;
}

const colorClass: Record<BadgeColor, string> = {
  blue: "bg-blue-100 text-blue-700",
  orange: "bg-amber-100 text-amber-700",
  green: "bg-emerald-100 text-emerald-700",
  pink: "bg-pink-100 text-pink-700",
  slate: "bg-slate-100 text-slate-600",
};

export function Badge({ color = "slate", className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${colorClass[color]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
