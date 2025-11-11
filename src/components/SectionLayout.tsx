import type { ReactNode } from "react";

interface SectionLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function SectionLayout({
  title,
  subtitle,
  children,
}: SectionLayoutProps) {
  return (
    <div className="flex flex-col mx-auto mt-8 items-center w-full overflow-y-auto">
      <div className="flex flex-col text-center space-y-2">
        <h1 className="text-4xl text-(--color-accent) underline">{title}</h1>
        <h2 className="text-2xl text-(--color-text-muted)">{subtitle}</h2>
      </div>
      <div className="flex w-4/5 mt-8 overflow">
        {children}
      </div>
    </div>
  );
}
