import type { ReactNode } from "react";

interface SubHeaderProps {
  title: string;
  children?: ReactNode;
}

export function SubHeader({ title, children }: SubHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4 mb-4">
      <h3 className="font-semibold text-2xl">{title}</h3>
      {children && children}
    </div>
  );
}
