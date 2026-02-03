import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CounterComponentUseState } from "./CounterComponentUseState.tsx";
import { CounterComponentUseRef } from "./CounterComponentUseRef.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <CounterComponentUseState />
    <CounterComponentUseRef />
  </StrictMode>,
);
