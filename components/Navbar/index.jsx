import { Menu, Download, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS, PERSONAL_INFO, RESUME_DOWNLOAD_LINK } from "../../constants";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="glass-panel flex items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-6">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3"
          title={PERSONAL_INFO.name}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-sm font-semibold text-white shadow-[0_0_30px_rgba(29,205,254,0.16)]">
            MH
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-sm font-semibold text-white sm:text-base">
              {PERSONAL_INFO.name}
            </span>
            <span className="block truncate text-xs text-slate-300">
              {PERSONAL_INFO.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="h-11 rounded-full border border-cyan-300/40 bg-cyan-300/14 px-4 text-white hover:bg-cyan-300/22"
          >
            <a
              href={RESUME_DOWNLOAD_LINK}
              download="Muhammad-Huzaifa-Resume.pdf"
            >
              Resume
              <Download className="size-4" />
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:bg-white/10">
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent className="border-l border-white/10 bg-slate-950/96 text-white">
              <SheetHeader className="mb-8">
                <SheetTitle className="font-display text-left text-white">
                  Navigate
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/8 hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="size-4" />
                  </a>
                ))}

                <Button
                  asChild
                  className="mt-3 h-12 rounded-2xl border border-cyan-300/40 bg-cyan-300/14 text-white hover:bg-cyan-300/22"
                >
                  <a
                    href={RESUME_DOWNLOAD_LINK}
                    download="Muhammad-Huzaifa-Resume.pdf"
                  >
                    Download Resume
                    <Download className="size-4" />
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
