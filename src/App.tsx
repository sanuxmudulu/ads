import { useState } from "react";
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

  const faqs = [
    {
  q: "How long do the deals take?",
  a: "Most deals take just a few minutes to complete. You can finish them at your own pace with no time limit once you've registered.",
},
{
  q: "What are deals?",
  a: "Deals are sponsored offers from partner brands — things like downloading apps, free trials, sign-ups, or short surveys. They're how your Apple Cash is funded.",
},
{
  q: "How many deals do I have to do?",
  a: "We recommend completing 3-5 deals to qualify. The more you complete, the higher your Apple Cash value climbs — up to $750.",
},
{
  q: "When will I receive my Apple Cash?",
  a: "Once your deals are verified, you will receive your Apple Cash reward instantly.",
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
    src="/images/apple.png"
    alt="Apple Pay"
    className="w-full rounded-2xl"
  />
</div>

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 text-black max-w-lg leading-snug">
          $750 Apple Cash
        </h1>

        <div className="w-full max-w-lg rounded-2xl border border-gray-200 p-6 mb-6 bg-white">
          <div className="space-y-6">
            {[1, 2, 3].map((step, i) => (
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
                      "Enter your email and basic info",
                      "Complete 3-5 sponsored deals",
                      "Receive your $750 Apple Cash!",
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


        <FAQSection />
      </div>
    </>
  );
}

export default App;
