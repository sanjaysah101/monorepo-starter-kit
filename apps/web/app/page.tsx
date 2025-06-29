import { ComponentProps } from "react";

import { Button } from "@workspace/ui/components/button";

import { DASHBOARD_TITLE, SITE_NAME } from "../lib/constants";
import { env } from "../lib/env";

export default function Page(): ComponentProps<"div"> {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{DASHBOARD_TITLE}</h1>
        <p className="text-sm text-gray-500">{SITE_NAME}</p>
        <p>Env is only available in the server component in next.js</p>
        <p className="text-sm text-gray-500">{env.NODE_ENV}</p>
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
