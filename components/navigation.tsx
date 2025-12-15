"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-cyan-400/20 mb-8">
      <div className="flex gap-8">
        <Link
          href="/about"
          className={`px-4 py-3 border-b-2 transition-colors ${
            pathname === "/about"
              ? "border-cyan-400 text-cyan-400"
              : "border-transparent text-gray-400 hover:text-cyan-400"
          }`}
        >
          about me
        </Link>
        <Link
          href="/"
          className={`px-4 py-3 border-b-2 transition-colors ${
            pathname === "/" ? "border-cyan-400 text-cyan-400" : "border-transparent text-gray-400 hover:text-cyan-400"
          }`}
        >
          projects
        </Link>
        <Link
          href="/work"
          className={`px-4 py-3 border-b-2 transition-colors ${
            pathname === "/work"
              ? "border-cyan-400 text-cyan-400"
              : "border-transparent text-gray-400 hover:text-cyan-400"
          }`}
        >
          work
        </Link>
      </div>
    </nav>
  )
}
