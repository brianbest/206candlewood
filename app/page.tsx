import {
  Building2,
  Home as HomeIcon,
  Users,
  Trees,
  Mail,
  MapPin,
  Star,
  Heart,
  Sun,
  Coffee,
  Leaf,
  Sparkles,
} from "lucide-react";

const floatingIcons = [
  { Icon: Building2, top: "8%",  left: "6%",  size: 36, cls: "animate-float-a", style: { "--dur": "7s",  animationDelay: "0s"    } },
  { Icon: HomeIcon,  top: "14%", left: "88%", size: 28, cls: "animate-float-b", style: { "--dur": "9s",  animationDelay: "1.2s"  } },
  { Icon: Trees,     top: "72%", left: "4%",  size: 32, cls: "animate-float-c", style: { "--dur": "8s",  animationDelay: "0.4s"  } },
  { Icon: Users,     top: "78%", left: "90%", size: 30, cls: "animate-float-a", style: { "--dur": "6.5s",animationDelay: "2s"    } },
  { Icon: Star,      top: "30%", left: "3%",  size: 22, cls: "animate-float-b", style: { "--dur": "10s", animationDelay: "0.8s"  } },
  { Icon: Heart,     top: "55%", left: "92%", size: 24, cls: "animate-float-c", style: { "--dur": "7.5s",animationDelay: "1.6s"  } },
  { Icon: Sun,       top: "5%",  left: "50%", size: 26, cls: "animate-float-a", style: { "--dur": "11s", animationDelay: "3s"    } },
  { Icon: Coffee,    top: "88%", left: "45%", size: 22, cls: "animate-float-b", style: { "--dur": "8.5s",animationDelay: "0.6s"  } },
  { Icon: Leaf,      top: "42%", left: "96%", size: 20, cls: "animate-float-c", style: { "--dur": "9.5s",animationDelay: "2.4s"  } },
  { Icon: Mail,      top: "90%", left: "12%", size: 24, cls: "animate-float-a", style: { "--dur": "7.2s",animationDelay: "1s"    } },
  { Icon: MapPin,    top: "20%", left: "80%", size: 26, cls: "animate-float-b", style: { "--dur": "6.8s",animationDelay: "1.8s"  } },
  { Icon: Sparkles,  top: "60%", left: "8%",  size: 20, cls: "animate-float-c", style: { "--dur": "9s",  animationDelay: "0.2s"  } },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 animate-gradient">
      {/* Soft blurred blobs for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-indigo-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-8%] right-[-8%] w-80 h-80 rounded-full bg-violet-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] left-[55%] w-64 h-64 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

      {/* Floating background icons */}
      {floatingIcons.map(({ Icon, top, left, size, cls, style }, i) => (
        <div
          key={i}
          className={`absolute text-indigo-400 pointer-events-none select-none ${cls}`}
          style={{ top, left, ...(style as React.CSSProperties) }}
        >
          <Icon size={size} strokeWidth={1.4} />
        </div>
      ))}

      {/* Card */}
      <div
        className="relative z-10 text-center px-8 py-14 sm:px-16 sm:py-18 mx-4 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-2xl max-w-lg w-full animate-pulse-glow"
        style={{ animationDelay: "0s" }}
      >
        {/* Icon cluster */}
        <div
          className="flex items-center justify-center gap-3 mb-6 animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          <Building2 className="text-indigo-400" size={28} strokeWidth={1.6} />
          <HomeIcon className="text-violet-400" size={22} strokeWidth={1.6} />
          <Trees className="text-emerald-400" size={24} strokeWidth={1.6} />
        </div>

        {/* Main heading */}
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-3 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          206 Candlewood
        </h1>

        {/* "Coming Soon" shimmer */}
        <p
          className="text-2xl sm:text-3xl font-semibold mb-6 animate-fade-up animate-shimmer"
          style={{ animationDelay: "0.25s" }}
        >
          Coming Soon
          <span className="cursor-blink ml-0.5">_</span>
        </p>

        {/* Tagline */}
        <p
          className="text-base text-gray-500 leading-relaxed mb-8 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          A great place to call home. We&apos;re getting things ready for the
          residents of 206&nbsp;Candlewood&nbsp;Cres.
        </p>

        {/* Divider */}
        <div
          className="w-16 h-px bg-gray-200 mx-auto mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        />

        {/* Address */}
        <div
          className="flex items-center justify-center gap-2 text-sm text-gray-400 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <MapPin size={14} strokeWidth={1.8} className="text-indigo-300 shrink-0" />
          <span>206 Candlewood Cres, Waterloo, ON</span>
        </div>
      </div>
    </div>
  );
}
