"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RenderingDemo() {
  const [clientTime, setClientTime] = useState<string>("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setClientTime(new Date().toISOString());
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Client Component</CardTitle>
          <CardDescription>This component runs on the client</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Hydrating...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Component</CardTitle>
        <CardDescription>This component runs on the client</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          This component can use hooks, event handlers, and browser APIs.
          It&apos;s hydrated on the client after the initial server render.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            💻 Client hydration time: {clientTime}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
