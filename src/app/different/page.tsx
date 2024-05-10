"use client";

import { useState } from "react";
import { Back } from "../Back";

function useCountA() {
  console.log("useCountA");
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  const otherCount = count;

  return { incrementCount, count, otherCount };
}

function useCountB() {
  console.log("useCountB");
  const [reverseCount, setReverseCount] = useState(0);
  const [count, setCount] = useState(0);

  function incrementCount() {
    setReverseCount(reverseCount - 1);
    setCount(count + 1);
  }

  const otherCount = reverseCount;

  return { incrementCount, count, otherCount };
}

function Counter() {
  const [version, setVersion] = useState<"A" | "B">("A");

  const { count, otherCount, incrementCount } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    version === "A" ? useCountA() : useCountB();

  function toggleVersion() {
    setVersion(version === "A" ? "B" : "A");
  }

  return (
    <div className="flex flex-col gap-5">
      <h1>Duplicate hooks</h1>
      <div className="text-sm">The hooks are copies of each other.</div>
      <button
        className="bg-blue-700 py-2 px-8 rounded-sm"
        onClick={incrementCount}
      >
        {count}, {otherCount}
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
