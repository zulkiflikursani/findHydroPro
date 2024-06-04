"use client";

import { NextUIProvider } from "@nextui-org/system";
export function UIProviders({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
