"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [typed, setTyped] = useState("");
  const [toType, setToType] = useState("");
  const [delay, setDelay] = useState(100);

  const handleChange = (event: any) => {
    setToType(toType + event?.target.value);
  };

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelay(Math.min(1100, toType.length * 50 + 100));
    }, 200);

    return () => clearTimeout(delayTimer);
  }, [typed]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTyped(typed + toType.charAt(0));
      setToType(toType.substring(1));
    }, delay);

    // Cleanup function to clear the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }, [toType]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-prata">Think first</h1>
      <p>
        A slow typewriter for those who find themselves editing while writing
      </p>
      <div>{typed}</div>
      <div>
        <input
          placeholder="start typing here"
          value={""}
          onChange={handleChange}
        ></input>
      </div>
    </main>
  );
}
