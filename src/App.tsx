import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const baseUrl = "https://giftclick.org/aff_c?offer_id=2596&aff_id=150406";

  const handleClaimClick = () => {
    const params = new URLSearchParams(window.location.search);
    const adValue = params.get("ad");

    const finalUrl = adValue
      ? `${baseUrl}&source=${encodeURIComponent(adValue)}`
      : baseUrl;

    window.location.href = finalUrl;
  };

  const notifications = [
    <>Olivia claimed <span className="text-black font-semibold">$750</span> for completing 6 deals</>,
    <>Charlotte received <span className="text-black font-semibold">$650</span> for doing 5 deals</>,
    <>Amelia received <span className="text-black font-semibold">$750</span> for completing 6 deals</>,
    <>Isla claimed <span className="text-black font-semibold">$500</span> for doing 4 deals</>,
    <>Ava claimed <span className="text-black font-semibold">$750</span> for doing 6 deals</>,
    <>Noah received <span className="text-black font-semibold">$750</span> for completing 6 deals</>,
    <>Grace claimed <span className="text-black font-semibold">$650</span> for doing 5 deals</>,
    <>Willow received <span className="text-black font-semibold">$750</span> for completing 6 deals</>,
    <>Harper claimed <span className="text-black font-semibold">$650</span> for completing 5 deals</>,
    <>Chloe claimed <span className="text-black font-semibold">$500</span> for doing 4 deals</>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const shuffledNotifications = notifications;

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    const cycleTimer = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % shuffledNotifications.length);
        setVisible(true);
      }, 350);
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(cycleTimer);
    };
  }, [shuffledNotifications.length]);

  const faqs = [
    {
      q: "How long do the deals take?",
      a: "Most deals take just a few minutes to complete. You can finish them at your own pace with no time limit once you've registered.",
    },
    {
      q: "What are deals?",
      a: "Deals are sponsored offers from our partner brands like downloading games, free trials, sign-ups, or surveys. They're how the coupon is funded.",
    },
    {
      q: "How many deals do I have to do?",
      a: "We recommend completing 4 to 6 deals to qualify. The more you complete, the higher your coupon value climbs - up to $750.",
    },
    {
      q: "When will I receive my coupon?",
      a: "Once your deals are verified, your Apple Pay coupon code will be delivered to your email within 24-48 hours.",
    },
  ];

  function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);

    return (
      <div
        className="rounded-xl border border-gray-300 px-4 py-3"
        style={{ background: "#000" }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between text-left"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span className="text-white font-semibold">{q}</span>
          <span
            className="text-white/70 ml-3 flex-shrink-0 transition-transform duration-200"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            +
          </span>
        </button>

        {open && (
          <p className="mt-2 text-sm text-white/80 leading-relaxed">{a}</p>
        )}
      </div>
    );
  }

  function FAQSection() {
    return (
      <section className="mt-10 rounded-2xl bg-white border border-gray-200 p-5 md:p-7 shadow-sm w-full max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center">
          Common Questions
        </h2>

        <div className="mt-5 space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <div
        className="w-full text-white text-center text-sm font-semibold py-2 px-4 fixed top-0 left-0 z-40"
        style={{ background: "#000" }}
      >
        5,500+ People Already Claimed
      </div>

      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 py-4 fade-in-up mt-8"
        style={{ background: "#fff" }}
      >
        <div className="mb-2">
          <img
            src="/images/apple pay.png"
            alt="Apple Pay"
            className="h-20 md:h-24 object-contain"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 text-black max-w-lg leading-snug">
          $750 Apple Pay Coupon
        </h1>

        <div className="w-full max-w-lg rounded-2xl border border-gray-200 p-6 mb-6 bg-white">
          <div className="space-y-6">
            {[1, 2, 3, 4].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number"
                  style={{ background: "#000", color: "#fff" }}
                >
                  {step}
                </div>

                <h3 className="font-semibold text-black">
                  {
                    [
                      'Click "Claim Now"',
                      "Enter your email and basic info",
                      "Complete 4-6 sponsored deals",
                      "Enjoy your $750 coupon!",
                    ][i]
                  }
                </h3>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleClaimClick}
          className="w-full max-w-md font-semibold py-5 px-6 rounded-full mb-3 shein-cta-button cta-pump-enhanced flex items-center justify-center gap-3 shadow-lg"
          style={{ background: "#000", color: "#fff" }}
        >
          <div className="text-left">
            <div className="font-bold text-base md:text-lg">Claim Now</div>
          </div>
        </button>

        <p className="text-sm text-gray-600 text-center mb-4">
          Higher value deals = higher payout
        </p>

        <div className="w-full max-w-lg mb-2">
          <div
            className={`rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-lg transition-all duration-300 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-2 text-center">
              <span className="h-2.5 w-2.5 rounded-full bg-black flex-shrink-0" />

              <p className="text-sm md:text-base font-semibold text-black leading-snug">
                {shuffledNotifications[currentIndex]}
              </p>
            </div>
          </div>
        </div>

        <FAQSection />
      </div>
    </>
  );
}

export default App;
