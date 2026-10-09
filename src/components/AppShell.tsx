import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Home, Inbox, SlidersHorizontal, Info, RotateCcw } from "lucide-react";
import { useOpti, MODES } from "@/lib/optimode";

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/inbox", label: "Inbox", icon: Inbox },
  { to: "/rules", label: "Rules", icon: SlidersHorizontal },
  { to: "/how", label: "How it works", icon: Info },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const { state, reset } = useOpti();
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="h-3 w-3 shrink-0 rounded-full bg-accent ring-1 ring-foreground" aria-hidden />
            <span className="font-display text-2xl">OptiMode</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                activeProps={{ className: "bg-foreground !text-background" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden rounded-full border border-border px-3 py-1 text-xs sm:inline">
              {MODES[state.mode].label} mode
            </span>
            <button onClick={() => { if (confirm("Reset all demo data?")) reset(); }}
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs hover:bg-secondary"
              aria-label="Reset demo data">
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-5 pt-3">
        <p className="eyebrow inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent ring-1 ring-foreground/40" />Prototype · Demo data</p>
      </div>
      <main className="mx-auto max-w-5xl px-5 py-6 md:py-10">{children}</main>
      <nav aria-label="Main mobile" className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 backdrop-blur md:hidden">
        <ul className="grid grid-cols-4">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link to={n.to} activeOptions={{ exact: true }}
                className="flex flex-col items-center gap-1 py-3 text-[11px] text-muted-foreground"
                activeProps={{ className: "!text-foreground font-medium" }}>
                <n.icon className="h-5 w-5" aria-hidden />
                {n.label === "How it works" ? "How" : n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export function ModeSwitcher() {
  const { state, setMode } = useOpti();
  return (
    <div>
      <div role="radiogroup" aria-label="Attention mode" className="grid grid-cols-3 gap-1 rounded-full border border-border bg-card p-1">
        {(Object.keys(MODES) as (keyof typeof MODES)[]).map((m) => {
          const on = state.mode === m;
          return (
            <button key={m} role="radio" aria-checked={on} onClick={() => setMode(m)}
              className={`rounded-full py-2.5 text-sm transition-colors ${on ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>
              {MODES[m].label}
            </button>
          );
        })}
      </div>
      <p aria-live="polite" className="mt-3 text-sm text-muted-foreground">{MODES[state.mode].blurb}</p>
    </div>
  );
}