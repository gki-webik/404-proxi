import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const scripts = [
  "/js/jquery-3.7.1.min.js",
  "/js/bootstrap.min.js",
  "/js/validator.min.js",
  "/js/jquery.slicknav.js",
  "/js/swiper-bundle.min.js",
  "/js/jquery.waypoints.min.js",
  "/js/jquery.counterup.min.js",
  "/js/isotope.min.js",
  "/js/jquery.magnific-popup.min.js",
  "/js/SmoothScroll.js",
  "/js/parallaxie.js",
  "/js/gsap.min.js",
  "/js/SplitText.js",
  "/js/ScrollTrigger.min.js",
  "/js/typed.js",
  "/js/wow.js",
  "/js/function.js",
];

const loadAllScripts = async () => {
  try {
    for (const script of scripts) {
      await loadScript(script);
    }
    console.log("Все скрипты загружены");

    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (error) {
    console.error("Ошибка загрузки скриптов:", error);

    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
};

loadAllScripts();
