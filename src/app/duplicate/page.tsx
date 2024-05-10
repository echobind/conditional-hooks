"use client";

import { useState } from "react";
import { Back } from "../Back";

function useCountA() {
  console.log("useCountA");
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return { incrementCount, count };
}

function useCountB() {
  console.log("useCountB");
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return { incrementCount, count };
}

function Counter() {
  const [version, setVersion] = useState<"A" | "B">("A");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { count, incrementCount } = version === "A" ? useCountA() : useCountB();

  function toggleVersion() {
    setVersion(version === "A" ? "B" : "A");
  }

  return (
    <div className="flex flex-col gap-5">
      <h1>Duplicate hooks</h1>
      <div className="text-sm">The hooks are different from each other.</div>
      <button
        className="bg-blue-700 py-2 px-8 rounded-sm"
        onClick={incrementCount}
      >
        {count}
      </button>
      <button
        className="bg-red-700 py-2 px-8 rounded-sm"
        onClick={toggleVersion}
      >
        Hook: {version}
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Back />
      <Counter />
    </div>
  );
}
