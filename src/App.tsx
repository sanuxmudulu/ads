import "./styles.css";

function App() {
  const handleLearnMore = () => {
    window.location.href = "https://www.apple.com/apple-cash/";
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: "#FFFFFF",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
      }}
    >
      <section className="w-full max-w-xl text-center">
        <div
          className="text-6xl md:text-7xl mb-8"
          style={{
            color: "#000000",
            lineHeight: 1,
          }}
        >
          
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
          Apple Cash — Now Available.
        </h1>

        <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 max-w-md mx-auto">
          Send and receive money easily with Apple Cash. Available on all Apple
          devices.
        </p>

        <button
          onClick={handleLearnMore}
          className="rounded-full px-8 py-4 font-semibold text-base md:text-lg"
          style={{
            background: "#000000",
            color: "#FFFFFF",
            border: "none",
            cursor: "pointer",
          }}
        >
          Learn More
        </button>
      </section>
    </main>
  );
}

export default App;
