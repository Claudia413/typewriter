"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "material-symbols";

export default function Home() {
  const [typed, setTyped] = useState("");
  const [toType, setToType] = useState("");
  const [delay, setDelay] = useState(100);
  const [minDelay, setMinDelay] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [isDelayChecked, setIsDelayChecked] = useState(false);

  const handleChange = (event: any) => {
    setToType(toType + event?.target.value);
  };

  const handleKeyUp = (event: any) => {
    if (event.key === "Enter") {
      setToType(toType + "\n");
    }
  };

  useEffect(() => {
    if (isDelayChecked) {
      setMinDelay(1100);
    } else {
      setMinDelay(0);
    }
  }, [isDelayChecked]);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelay(Math.min(minDelay, toType.length * 20 + 100));
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

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const handleNoDelayChange = () => {
    setIsDelayChecked(!isDelayChecked);
  };

  return (
    <main className="grid grid-cols-1 grid-rows-custom h-screen flex-col items-center justify-between p-8 md:p-24 md:pt-0 text-brown-900">
      <div className="self-start">
        <Link href={"/"}>
          <h1 className="font-prata my-8">Think first</h1>
        </Link>
      </div>
      <div className="mb-16">
        <span
          onClick={toggleSettings}
          className={`material-symbols-rounded ${
            settingsOpen ? "text-current" : "text-brown-300"
          } cursor-pointer mb-4`}
          title={settingsOpen ? "hide settings" : "show settings"}
        >
          settings
        </span>
        <div
          className={`opacity-0 transition-opacity flex flex-row p-1 ${
            settingsOpen ? "opacity-100" : "pointer-events-none"
          } `}
        >
          <div className="flex items-baseline">
            <input
              type="checkbox"
              checked={isDelayChecked}
              onChange={handleNoDelayChange}
            />
            <label id="delay-label" className="ml-1.5">
              Typing delay
            </label>
          </div>
        </div>
      </div>
      <div className="min-w-full min-h-full max-h-[100%] shadow-xl bg-white row-span-4 bg-opacity-50 py-10 px-6 md:p-24 overflow-x-hidden overflow-y-auto whitespace-pre-wrap">
        {typed}
      </div>
      <div className="mt-16">
        <input
          className="shadow-xl min-w-full bg-white bg-opacity-50 row-span-2 p-6 border-none outline-none"
          placeholder="start typing here"
          value={""}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        ></input>
      </div>
    </main>
  );
}
