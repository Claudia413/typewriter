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
    <main className="grid grid-cols-1 auto-rows-fr min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <h1 className="font-prata">Think first</h1>
      <div className="min-w-full min-h-full shadow-xl bg-white bg-opacity-50 py-10 px-6 md:p-24"></div>
      {typed}
      <div>
        <input
          className="shadow-xl min-w-full bg-white bg-opacity-50 p-6 border-none outline-none"
          placeholder="start typing here"
          value={""}
          onChange={handleChange}
        ></input>
      </div>
    </main>
  );
}
