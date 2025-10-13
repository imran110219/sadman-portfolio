"use client";

import * as React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

interface DownloadCVButtonProps
  extends Omit<React.ComponentProps<"button">, "onClick">,
    VariantProps<typeof buttonVariants> {
  fileName?: string;
  trackDownload?: boolean;
  asChild?: boolean;
}

export function DownloadCVButton({
  fileName = "Sadman_Sobhan_CV.pdf",
  trackDownload = true,
  children,
  ...props
}: DownloadCVButtonProps) {
  const handleDownload = () => {
    // Track download event with Google Analytics
    if (
      trackDownload &&
      typeof window !== "undefined" &&
      (window as any).gtag
    ) {
      (window as any).gtag("event", "download", {
        event_category: "CV",
        event_label: fileName,
        value: 1,
      });
    }

    // Create and trigger download
    const link = document.createElement("a");
    link.href = `/cv/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <Button onClick={handleDownload} {...props}>
      <Download className="h-5 w-5" />
      {children || "Download Resume"}
    </Button>
  );
}
