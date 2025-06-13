"use client";

import { ComponentProps } from "react";

import { Button } from "@workspace/ui/components/button";

export default function Page(): ComponentProps<"div"> {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm" variant="default">
          Button
        </Button>
        <Button size="sm" variant="destructive">
          Button
        </Button>
        <Button size="sm" variant="ghost">
          Button
        </Button>
        <Button size="sm" variant="link">
          Button
        </Button>
        <Button size="sm" variant="outline">
          Button
        </Button>
        <Button size="sm" variant="secondary">
          Button
        </Button>
      </div>
    </div>
  );
}
