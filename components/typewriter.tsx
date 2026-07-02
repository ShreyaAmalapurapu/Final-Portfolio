"use client"

import { useEffect, useState } from "react"

export function Typewriter({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = deleting ? 90 : 160
    const pauseAtFull = 1600
    const pauseAtEmpty = 500

    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && display === text) {
      timeout = setTimeout(() => setDeleting(true), pauseAtFull)
    } else if (deleting && display === "") {
      timeout = setTimeout(() => setDeleting(false), pauseAtEmpty)
    } else {
      timeout = setTimeout(() => {
        setDisplay((prev) => (deleting ? text.slice(0, prev.length - 1) : text.slice(0, prev.length + 1)))
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [display, deleting, text])

  return <span className={className}>{display}</span>
}
