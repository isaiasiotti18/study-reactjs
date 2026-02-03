/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useRef } from "react";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  function handleClick() {
    if (divRef.current!.style.backgroundColor === "red") {
      divRef.current!.style.backgroundColor = "blue";
      h1Ref.current!.style.color = "yellow";
    } else {
      divRef.current!.style.backgroundColor = "red";
      h1Ref.current!.style.color = "blue";
    }
  }
  return (
    <div ref={divRef} style={{ backgroundColor: "red" }}>
      <h1 ref={h1Ref} style={{ color: "blue" }}>
        Hello World
      </h1>

      <button onClick={handleClick}>Click aqui para mudar as cores</button>
    </div>
  );
}

export default App;
