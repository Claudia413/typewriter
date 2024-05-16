"use client";
import { useState } from "react";

export default function Home() {
  const [typed, setTyped] = useState("");

  const handleChange = (event: any) => {
    setTyped(typed + event?.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Think before you type</h1>
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
