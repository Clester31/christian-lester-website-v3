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
    <div className="flex flex-col mx-auto mt-4 sm:mt-6 md:mt-8 items-center w-full overflow-y-auto px-2 sm:px-4">
      <div className="flex flex-col text-center space-y-1 sm:space-y-2 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-(--color-accent) underline">{title}</h1>
        {subtitle && (
          <h2 className="text-lg sm:text-xl md:text-2xl text-(--color-text-muted)">{subtitle}</h2>
        )}
      </div>
      <div className="flex w-full sm:w-11/12 md:w-4/5 mt-4 sm:mt-6 md:mt-8 overflow">
        {children}
      </div>
    </div>
  );
}
