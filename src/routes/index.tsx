import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Users, DollarSign, Clock, Smartphone, ChevronRight, Star, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Playful Rewards — Get Paid for Testing Apps & Games" },
      { name: "description", content: "Earn up to $300+ per offer by testing apps, games & completing surveys. Fast cashouts available!" },
    ],
  }),
});

const AFFILIATE_URL = "https://giftclick.org/aff_c?offer_id=2956&aff_id=150406";

function GreenStars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#00b67a] text-[#00b67a]" />
      ))}
    </div>
  );
}

function TrustpilotHeader() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Star className="h-6 w-6 fill-[#00b67a] text-[#00b67a]" />
      <span className="text-xl font-bold text-white">Trustpilot</span>
    </div>
  );
}

function CompactTrustpilotLine() {
  return (
    <div className="flex items-center justify-center gap-3">
      <GreenStars />
      <span className="text-lg font-bold text-white">Trustpilot</span>
    </div>
  );
}

const reviews = [
  {
    initials: "J",
    name: "Jena Bonds",
    title: "The games are fun to play!",
    body: "The games are fun to play! They have great offers. All you have to do is complete the required task and you will receive the reward. It's just that simple. The payout method is quick. I received my reward via PayPal the same day I requested it. Don't miss out on the chance to be rewarded download Playful Rewards now!",
  },
  {
    initials: "MM",
    name: "Md Marquis mishamarquis",
    title: "They Do Pay!!!",
    body: "I've been playing and I actually thought I messed up by not redeeming my points in a timely manner but I was wrong and just made redeemed my first game play for a $50.00 Visa card!!!",
  },
  {
    initials: "CL",
    name: "Clover",
    title: "I cashed out my 50$ VISA no problem.",
    body: "I cashed out my 50$ VISA no problem. My account had no aftereffects, I recommend as a fun and easy way to make some money.",
  },
  {
    initials: "HM",
    name: "Haley Montanez",
    title: "Always very accurate!",
    body: "Send me my money always and is very accurate and whenever I have a problem the online helpline is super helpful! I recommend using this app.",
  },
];

function ReviewsCard() {
  return (
    <div className="rounded-2xl border border-[#262a36] bg-[#181b24] p-6 sm:p-8">
      <TrustpilotHeader />
      <div className="mt-8 space-y-8">
        {reviews.map((r, i) => (
          <div key={i}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5e7eb] text-sm font-bold text-[#0f1724]">
                {r.initials}
              </div>
              <span className="font-bold text-white">{r.name}</span>
            </div>
            <div className="mt-3 border-t border-[#262a36] pt-3">
              <div className="flex items-center gap-3">
                <GreenStars />
                <span className="flex items-center gap-1 text-sm text-white">
                  <Check className="h-4 w-4 text-[#00b67a]" /> Verified
                </span>
              </div>
              <h4 className="mt-3 font-bold text-white">{r.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#a7aec5]">{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{ backgroundImage: "linear-gradient(90deg, #a735f0 0%, #c9709a 50%, #ffd21f 100%)" }}
    >
      {children}
    </span>
  );
}

function ProgressBar({ percent, step }: { percent: number; step: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#262a36]">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${percent}%`,
            backgroundImage: "linear-gradient(90deg, #a735f0 0%, #c9709a 50%, #ffd21f 100%)",
          }}
        />
      </div>
      <span className="shrink-0 text-sm font-semibold text-[#a7aec5]">{step}</span>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block rounded-full p-[2px]" style={{ backgroundImage: "linear-gradient(90deg, #a735f0, #c9709a, #ffd21f)" }}>
      <div className="rounded-full bg-[#0f1724] px-5 py-2">
        <span className="text-sm font-extrabold tracking-wide text-[#ffd000]">{children}</span>
      </div>
    </div>
  );
}

function AndroidIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.6 9.48l1.84-3.18a.4.4 0 10-.69-.4l-1.86 3.22a11.6 11.6 0 00-9.78 0L5.25 5.9a.4.4 0 10-.69.4L6.4 9.48A10.8 10.8 0 001 18h22a10.8 10.8 0 00-5.4-8.52zM7 15.25a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  );
}

function Landing() {
  const [step, setStep] = useState<1 | 2>(1);
  const [hovered, setHovered] = useState<"iphone" | "android" | null>(null);

  const adParam = useMemo(() => {
    if (typeof window === "undefined") return null;
    return new URLSearchParams(window.location.search).get("ad");
  }, []);

  useEffect(() => {
    if (step === 2 && typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [step]);

  const selectDevice = () => setStep(2);

  const handleCta = () => {
    const url = adParam ? `${AFFILIATE_URL}&source=${encodeURIComponent(adParam)}` : AFFILIATE_URL;
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-[#0f1724] text-white">
      <div className="mx-auto w-full max-w-[760px] px-5 py-5 sm:px-8 sm:py-10">
        <ProgressBar percent={step === 1 ? 50 : 100} step={`Step ${step} of 2`} />

        {step === 1 ? (
          <section className="mt-6 text-center sm:mt-10">
            <Badge>Playful Rewards EXCLUSIVE</Badge>

            <h1 className="mt-4 font-black leading-[1.03] tracking-tight sm:mt-6">
              <span className="block whitespace-nowrap text-[38px] sm:text-6xl">Get Paid for Testing</span>
              <span className="block text-5xl sm:text-6xl">
                <GradientText>Apps &amp; Games</GradientText>
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-[650px] text-[15px] leading-snug text-[#a7aec5] sm:mt-6 sm:text-lg sm:leading-relaxed">
              Earn up to $300+ per offer by testing apps, games &amp; completing surveys. Fast cashouts available!
            </p>

            <div className="mt-7 rounded-2xl border border-[#262a36] bg-[#181b24] p-5 sm:mt-8 sm:p-6">
              <div className="grid grid-cols-3 divide-x divide-[#262a36]">
                {[
                  { Icon: Users, value: "260K+", label: "ACTIVE USERS" },
                  { Icon: DollarSign, value: "$300+", label: "PER OFFER" },
                  { Icon: Clock, value: "Fast", label: "CASHOUTS" },
                ].map(({ Icon, value, label }) => (
                  <div key={label} className="flex flex-col items-center px-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd000]">
                      <Icon className="h-5 w-5 text-[#0f1724]" />
                    </div>
                    <div className="mt-3 text-xl font-black text-[#ffd000] sm:text-2xl">{value}</div>
                    <div className="mt-1 text-[10px] font-bold tracking-wider text-[#a7aec5] sm:text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <CompactTrustpilotLine />
            </div>

            <h2 className="mt-7 text-xl font-bold text-white sm:mt-12">What type of phone do you use?</h2>

            <div className="mt-5 space-y-4 text-left sm:mt-6">
              {[
                { id: "iphone", label: "iPhone", sub: "Perfect for Playful Rewards!", Icon: Smartphone },
                { id: "android", label: "Android", sub: "Works with all Android devices!", Icon: AndroidIcon },
              ].map(({ id, label, sub, Icon }) => {
                const active = hovered === id;
                return (
                  <button
                    key={id}
                    onClick={selectDevice}
                    onMouseEnter={() => setHovered(id as "iphone" | "android")}
                    onMouseLeave={() => setHovered(null)}
                    onTouchStart={() => setHovered(id as "iphone" | "android")}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-[#262a36] p-[1px] transition-all duration-300 active:scale-[0.99]"
                    style={
                      active
                        ? { backgroundImage: "linear-gradient(90deg, #a735f0 0%, #c9709a 50%, #ffd21f 100%)", borderColor: "transparent" }
                        : undefined
                    }
                  >
                    <div
                      className="flex items-center justify-between rounded-2xl px-5 py-5 transition-colors duration-300"
                      style={{
                        background: active
                          ? "linear-gradient(90deg, #a735f0 0%, #c9709a 50%, #ffd21f 100%)"
                          : "#181b24",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="h-7 w-7 text-white" />
                        <div>
                          <div className="text-lg font-bold text-white">{label}</div>
                          <div className="text-sm text-[#a7aec5] group-hover:text-white/90">{sub}</div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-white/80" />
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        ) : (
          <section className="mt-10 text-center">
            <Badge>READY TO EARN!</Badge>
            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Start Earning With
              <br />
              <GradientText>Playful Rewards</GradientText>
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] text-base leading-relaxed text-[#a7aec5] sm:text-lg">
              Your device is perfect for Playful Rewards! Complete registration to start testing apps, games &amp; surveys with instant cashouts.
            </p>

            <div className="mt-10 flex justify-center">
              <button
                onClick={handleCta}
                className="group relative rounded-2xl px-10 py-5 text-lg font-black tracking-wide text-white shadow-[0_0_40px_-5px_#a735f0] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_-5px_#c9709a] active:scale-95"
                style={{ backgroundImage: "linear-gradient(90deg, #a735f0 0%, #c9709a 50%, #ffd21f 100%)" }}
              >
                START EARNING NOW!
              </button>
            </div>

            <div className="mt-12 rounded-2xl border border-[#262a36] bg-[#181b24] p-6 text-left sm:p-8">
              <h3 className="text-center text-lg font-bold text-white">Your Playful Rewards Earning Journey</h3>
              <div className="mt-6 space-y-5">
                {[
                  { n: 1, title: "Join Playful Rewards", body: "Register your account to access thousands of high-paying offers." },
                  { n: 2, title: "Test Apps & Complete Offers", body: "Play games, test apps, complete surveys, and earn up to $300+ per offer." },
                ].map((s) => (
                  <div key={s.n} className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
                      style={{ backgroundImage: "linear-gradient(135deg, #a735f0 0%, #c9709a 50%, #ffd21f 100%)" }}
                    >
                      {s.n}
                    </div>
                    <div>
                      <div className="font-bold text-white">{s.title}</div>
                      <div className="mt-1 text-sm text-[#a7aec5]">{s.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="mt-12">
          <ReviewsCard />
        </div>
      </div>
    </div>
  );
}
