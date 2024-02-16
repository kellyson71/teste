import React from "https://esm.run/react@18";
import { createRoot } from "https://esm.run/react-dom@18/client";
import confetti from "https://esm.run/canvas-confetti@1";

function App() {
  function onClick() {
    confetti({
      particleCount: 150,
      spread: 60
    });

    // Reproduzir o som quando o botão é clicado
    const audio = document.getElementById("audio");
    audio.play();

    // Mostrar o iframe
    const iframe = document.getElementById("myIframe");
    iframe.style.display = "block";

    // Mostrar a div oculta
    const hiddenDiv = document.getElementById("hiddenDiv");
    hiddenDiv.style.display = "block";
  }

  return (
    React.createElement("button", { className: "button", onClick: onClick },
      React.createElement("span", null, "\uD83C\uDF89"),
      React.createElement("span", null, "CLIQUE AQUI")));
}

createRoot(document.getElementById("root")).render(React.createElement(App, null));
