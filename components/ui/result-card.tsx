"use client";

import { Copy, Share2 } from "lucide-react";
import { useState } from "react";

export function ResultCard({
  title,
  value,
  description,
  shareText,
  tone = "neutral",
  callout
}: {
  title: string;
  value: string;
  description: string;
  shareText: string;
  tone?: "neutral" | "good" | "caution" | "risk";
  callout?: string;
}) {
  const [copied, setCopied] = useState(false);
  const styles = {
    neutral: "from-slate-950 to-slate-700 text-white",
    good: "from-emerald-700 to-teal-500 text-white",
    caution: "from-amber-500 to-orange-500 text-white",
    risk: "from-rose-600 to-red-500 text-white"
  };

  async function copyResult() {
    await navigator.clipboard.writeText(shareText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function downloadCard() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
      <defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#101828"/><stop offset="100%" stop-color="#226f9f"/></linearGradient></defs>
      <rect width="1080" height="1350" rx="56" fill="url(#bg)"/>
      <text x="80" y="150" fill="#9ee6d2" font-family="Arial" font-size="34" font-weight="700">GLP-1 Intelligence</text>
      <text x="80" y="310" fill="#ffffff" font-family="Arial" font-size="58" font-weight="700">${escapeSvg(title)}</text>
      <text x="80" y="520" fill="#ffffff" font-family="Arial" font-size="118" font-weight="800">${escapeSvg(value)}</text>
      <foreignObject x="80" y="620" width="920" height="360"><div xmlns="http://www.w3.org/1999/xhtml" style="color:#e2e8f0;font-family:Arial;font-size:42px;line-height:1.35">${escapeSvg(description)}</div></foreignObject>
      <text x="80" y="1190" fill="#ffffff" font-family="Arial" font-size="34" font-weight="700">Preserve muscle while losing weight on GLP-1s.</text>
    </svg>`;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "glp1-intelligence-result.svg";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className={`bg-gradient-to-br ${styles[tone]} p-5`}>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] opacity-85">GLP-1 Intelligence</p>
        <p className="mt-4 text-sm font-medium opacity-90">{title}</p>
        <p className="mt-2 text-5xl font-semibold tracking-tight">{value}</p>
        {callout && <p className="mt-4 rounded-lg bg-white/15 p-3 text-sm font-semibold">{callout}</p>}
      </div>
      <div className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-ink dark:text-white">Screenshot-ready result</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={copyResult}
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
          >
            {copied ? <Copy className="h-4 w-4 text-mint" /> : <Share2 className="h-4 w-4" />}
            Share
          </button>
          <button
            type="button"
            onClick={downloadCard}
            className="inline-flex h-10 items-center rounded-lg bg-ink px-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-ink"
          >
            Image
          </button>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function escapeSvg(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
