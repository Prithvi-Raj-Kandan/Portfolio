import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Project } from "../data";

type ProjectMediaProps = {
  project: Project;
};

type Probe = "pending" | "ready" | "missing";

function useAssetProbe(url: string | undefined, enabled: boolean): Probe {
  const [state, setState] = useState<Probe>("pending");

  useEffect(() => {
    if (!enabled || !url) {
      setState(url ? "pending" : "missing");
      return;
    }

    let cancelled = false;
    setState("pending");

    if (url.endsWith(".mp4") || url.endsWith(".webm")) {
      const video = document.createElement("video");
      const finish = (next: Probe) => {
        if (!cancelled) setState(next);
      };
      video.preload = "metadata";
      video.muted = true;
      video.onloadedmetadata = () => finish("ready");
      video.onerror = () => finish("missing");
      video.src = url;
      return () => {
        cancelled = true;
        video.onloadedmetadata = null;
        video.onerror = null;
        video.src = "";
      };
    }

    const image = new Image();
    image.onload = () => {
      if (!cancelled) setState("ready");
    };
    image.onerror = () => {
      if (!cancelled) setState("missing");
    };
    image.src = url;
    return () => {
      cancelled = true;
    };
  }, [enabled, url]);

  return state;
}

export function ProjectMedia({ project }: ProjectMediaProps) {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const active = hovered || tapped;
  const videoRef = useRef<HTMLVideoElement>(null);

  const image = useAssetProbe(project.imageUrl, true);
  const video = useAssetProbe(project.videoUrl, active);
  const gif = useAssetProbe(project.gifUrl, active && video === "missing");

  const showVideo = active && video === "ready";
  const showGif = active && !showVideo && gif === "ready";
  const showImage = image === "ready" && !showVideo && !showGif;

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    if (showVideo) {
      void node.play().catch(() => undefined);
    } else {
      node.pause();
      node.currentTime = 0;
    }
  }, [showVideo]);

  return (
    <div
      className="relative aspect-[16/10] overflow-hidden bg-[#070907]"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setHovered(false);
      }}
    >
      <button
        type="button"
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#d6ff4a]"
        aria-label={`${active ? "Pause" : "Play"} preview for ${project.title}`}
        aria-pressed={active}
        onClick={() => setTapped((value) => !value)}
      />

      <div aria-hidden className={`absolute inset-0 transition-opacity duration-500 ${showImage || showGif || showVideo ? "opacity-0" : "opacity-100"}`}>
        <ArchitecturePreview id={project.id} active={active} />
      </div>

      {image === "ready" && (
        <img
          src={project.imageUrl}
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover object-top transition duration-500 ${showImage ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"} ${active && showImage ? "scale-105" : ""}`}
        />
      )}

      {gif === "ready" && project.gifUrl && (
        <img
          src={project.gifUrl}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${showGif ? "opacity-100" : "opacity-0"}`}
        />
      )}

      {video === "ready" && project.videoUrl && (
        <video
          ref={videoRef}
          src={project.videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${showVideo ? "opacity-100" : "opacity-0"}`}
        />
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="pointer-events-none absolute bottom-3 left-3 z-20 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
        {showVideo || showGif ? "Live preview" : image === "ready" ? "Screenshot" : "System preview"}
      </div>
    </div>
  );
}

function ArchitecturePreview({ id, active }: { id: string; active: boolean }) {
  if (id === "asta") return <AstaPreview active={active} />;
  if (id === "productionrag") return <RagPreview active={active} />;
  if (id === "field-intelligence") return <FieldPreview active={active} />;
  return <LogGuardPreview active={active} />;
}

function Frame({
  label,
  status,
  active,
  children,
}: {
  label: string;
  status: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <div className="relative flex h-full flex-col bg-[#080a08] p-3.5 sm:p-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(214,255,74,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(214,255,74,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className={`pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-[#d6ff4a]/10 to-transparent transition-transform duration-700 ${active ? "translate-y-24" : "-translate-y-full"}`}
      />
      <div className="relative mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
        <span>{label}</span>
        <span className={active ? "text-[#d6ff4a]" : "text-zinc-400"}>{status}</span>
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

function AstaPreview({ active }: { active: boolean }) {
  const rows = [
    ["INV-2041", "GSTIN valid", "pass"],
    ["INV-2048", "HSN 9983", "pass"],
    ["INV-2055", "POS mismatch", "review"],
  ] as const;

  return (
    <Frame label="Asta / GST ledger" status={active ? "Validating" : "Idle"} active={active}>
      <div className="grid h-full grid-cols-[1.3fr_0.9fr] gap-2">
        <div className="flex flex-col gap-1.5">
          {rows.map(([id, rule, state]) => (
            <div key={id} className="flex items-center justify-between rounded-md border border-white/10 bg-black/40 px-2.5 py-2">
              <div>
                <div className="font-mono text-[11px] text-zinc-100">{id}</div>
                <div className="text-[11px] text-zinc-500">{rule}</div>
              </div>
              <span className={`font-mono text-[10px] uppercase ${state === "pass" ? "text-[#d6ff4a]" : "text-amber-300"}`}>
                {state}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between rounded-md border border-[#d6ff4a]/20 bg-[#d6ff4a]/5 p-2.5">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#d6ff4a]">GSTR-3B</div>
            <div className="mt-1 font-display text-lg text-white">11 days</div>
            <div className="text-[11px] text-zinc-400">Obligation window</div>
          </div>
          <div className={`rounded bg-black/50 px-2 py-1.5 text-[11px] text-zinc-300 transition ${active ? "translate-y-0 opacity-100" : "opacity-70"}`}>
            WhatsApp alert queued
            <div className="text-zinc-500">HITL draft ready</div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function RagPreview({ active }: { active: boolean }) {
  const lanes = [
    { name: "BM25", score: active ? "0.82" : "0.64" },
    { name: "Dense", score: active ? "0.91" : "0.71" },
  ];

  return (
    <Frame label="ProductionRAG / hybrid" status="<450 ms" active={active}>
      <div className="grid h-full grid-cols-[1fr_0.8fr] gap-2">
        <div className="space-y-2">
          {lanes.map((lane) => (
            <div key={lane.name} className="rounded-md border border-white/10 bg-black/40 px-2.5 py-2">
              <div className="mb-1 flex justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                <span>{lane.name}</span>
                <span>{lane.score}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#d6ff4a] transition-all duration-700"
                  style={{ width: active ? (lane.name === "BM25" ? "82%" : "91%") : "58%" }}
                />
              </div>
            </div>
          ))}
          <div className="rounded-md border border-white/10 bg-black/40 px-2.5 py-2 font-mono text-[11px] text-zinc-300">
            Cohere rerank → top-k
            <div className="mt-1 text-zinc-500">chunk 14 · chunk 3 · chunk 22</div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 rounded-md border border-white/10 bg-black/40 p-2.5 font-mono text-[11px]">
          <Metric label="Faithfulness" value=">91%" />
          <Metric label="Relevancy" value="89%" />
          <Metric label="Context" value=">88%" />
        </div>
      </div>
    </Frame>
  );
}

function FieldPreview({ active }: { active: boolean }) {
  const nodes = ["Plot 4", "Irrigation", "Pest", "Farmer"];
  return (
    <Frame label="Field intel / debrief" status="pgvector" active={active}>
      <div className="grid h-full grid-cols-[0.8fr_1.2fr] gap-2">
        <div className="flex flex-col justify-between rounded-md border border-white/10 bg-black/40 p-2.5">
          <div className="flex h-8 items-end gap-1">
            {[8, 14, 6, 18, 10, 16, 7, 12].map((height, index) => (
              <span
                key={index}
                className="w-1 rounded-sm bg-[#7dd3fc] transition-all duration-500"
                style={{ height: active ? height + 6 : height }}
              />
            ))}
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Voice note</div>
            <div className="text-sm text-zinc-200">02:14</div>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="h-6 rounded bg-[#d6ff4a]/20" />
            <div className="h-6 rounded bg-white/10" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-wrap gap-1.5">
            {nodes.map((node, index) => (
              <span
                key={node}
                className={`rounded-full border px-2 py-1 font-mono text-[10px] transition ${index === 0 ? "border-[#d6ff4a]/50 text-[#d6ff4a]" : "border-white/10 text-zinc-300"} ${active ? "translate-y-0" : ""}`}
              >
                {node}
              </span>
            ))}
          </div>
          <div className="rounded-md border border-white/10 bg-black/40 p-2.5 text-[11px] leading-relaxed text-zinc-400">
            Executive digest
            <div className="text-zinc-200">Irrigation gap on plot 4. Pest pressure rising. Follow-up in 48h.</div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function LogGuardPreview({ active }: { active: boolean }) {
  const lines = [
    ["CRIT", "auth retry storm on /v1/session"],
    ["HIGH", "unsigned payload from edge-4"],
    ["MED", "schema drift in audit.export"],
    ["LOW", "healthcheck jitter 180ms"],
  ] as const;
  const tone: Record<string, string> = {
    CRIT: "text-red-300",
    HIGH: "text-orange-300",
    MED: "text-amber-200",
    LOW: "text-zinc-400",
  };

  return (
    <Frame label="LogGuard / classify" status="<1.2s/MB" active={active}>
      <div className="grid h-full grid-cols-[1.35fr_0.75fr] gap-2">
        <div className="space-y-1 overflow-hidden rounded-md border border-white/10 bg-black/50 p-2 font-mono text-[10px]">
          {lines.map(([level, text]) => (
            <div key={text} className="flex gap-2">
              <span className={`w-9 shrink-0 ${tone[level]}`}>{level}</span>
              <span className="truncate text-zinc-300">{text}</span>
            </div>
          ))}
          <div className="pt-1 text-[#d6ff4a]">
            {active ? "root cause: unbounded retry" : "gemini stream standby"}
            <span className={`ml-1 inline-block h-2 w-1 translate-y-px bg-[#d6ff4a] ${active ? "animate-pulse" : "opacity-40"}`} />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-1.5">
          {[
            ["Critical", "2"],
            ["High", "5"],
            ["Medium", "11"],
            ["Low", "27"],
          ].map(([label, count]) => (
            <div key={label} className="flex items-center justify-between rounded border border-white/10 bg-black/40 px-2 py-1 font-mono text-[10px] text-zinc-300">
              <span>{label}</span>
              <span className="text-white">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2 border-b border-white/10 pb-1 last:border-0">
      <span className="text-zinc-500">{label}</span>
      <span className="text-[#d6ff4a]">{value}</span>
    </div>
  );
}
