"use client";

import { QueryProvider } from "@/providers/QueryProvider";

export function ClientQueryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QueryProvider>{children}</QueryProvider>;
}
