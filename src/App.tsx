function App() {
  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(7px);
            }
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
          }

          body {
            margin: 0;
            min-height: 100vh;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
            background: #ffffff;
            color: #000;
            overflow: hidden;
          }
        `}
      </style>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#ffffff",
          paddingTop: "120px",
        }}
      >
        <div
          style={{
            width: "calc(100% - 40px)",
            maxWidth: "390px",
            padding: "34px 26px 36px",
            textAlign: "center",
            borderRadius: "22px",
            background: "#ffffff",
            border: "1px solid #e5e5e5",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            opacity: 0,
            transform: "translateY(16px)",
            animation: "fadeUp 0.35s ease forwards 0.08s",
          }}
        >
          <h1
            style={{
              fontSize: "31px",
              lineHeight: 1.12,
              fontWeight: 600,
              letterSpacing: "-0.8px",
              color: "#000",
              marginBottom: "18px",
            }}
          >
            Click here to Get
            <br />
            <span style={{ color: "#000" }}>Started</span>
          </h1>

          <div
            style={{
              width: 0,
              height: 0,
              margin: "0 auto 22px",
              borderLeft: "15px solid transparent",
              borderRight: "15px solid transparent",
              borderTop: "26px solid #000",
              animation: "bounce 1.15s ease-in-out infinite",
            }}
          ></div>

          <a
            href="https://www.apple.com/apple-pay/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              minHeight: "62px",
              borderRadius: "16px",
              border: "none",
              textDecoration: "none",
              cursor: "pointer",
              background: "#000",
              color: "#fff",
              fontSize: "20px",
              fontWeight: 900,
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.22)",
              transition: "transform 0.15s ease, filter 0.15s ease",
            }}
          >
            CONTINUE
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
