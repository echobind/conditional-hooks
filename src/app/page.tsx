import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="mb-8 text-2xl">Conditional Hooks</h1>
      <ul className="flex flex-col gap-3 text-xl">
        <li>
          <Link href="/duplicate">Hooks are copies</Link>
        </li>
        <li>
          <Link href="/different">Hooks are different</Link>
        </li>
        <li>
          <Link href="/hard-switch">Hooks are dependencies</Link>
        </li>
      </ul>
    </div>
  );
}
