import Image from "next/image";
import { site } from "@/lib/site";

/** Amblem + yazı logosu. */
export default function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";

  return (
    <span className="flex min-w-0 items-center gap-3">
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={80}
        height={80}
        priority
        className="h-10 w-10 shrink-0 object-contain lg:h-11 lg:w-11"
      />
      <span className="flex flex-col whitespace-nowrap">
        <span
          className={`font-serif text-[1.15rem] leading-none font-semibold lg:text-[1.35rem] ${light ? "text-white" : "text-ink"}`}
        >
          {site.name}
        </span>
        <span className={`mt-1 text-[0.8rem] leading-none ${light ? "text-rose-100/80" : "text-ink-soft"}`}>
          {site.attorney}
        </span>
      </span>
    </span>
  );
}
