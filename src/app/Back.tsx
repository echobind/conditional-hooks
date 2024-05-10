import Link from "next/link";

export function Back() {
  return (
    <div className="mb-5">
      <Link
        className="py-2 px-4 bg-gray-500 rounded-sm inline-block text-sm"
        href="/"
      >
        &lt;&nbsp;&nbsp;Back
      </Link>
    </div>
  );
}
