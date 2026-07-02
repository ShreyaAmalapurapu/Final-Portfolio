export function SiteHeader() {
  return (
    <header className="space-y-3">
      <p className="text-xs md:text-sm text-gray-600">
        <span className="text-green-400">shreya@portfolio</span>
        <span className="text-gray-500">:</span>
        <span className="text-cyan-400">~</span>
        <span className="text-gray-500">$ </span>
        <span className="text-gray-500">whoami</span>
      </p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight flex items-center">
        <span className="text-cyan-400">shreya</span>
        <span className="w-2.5 md:w-3.5 h-10 md:h-14 bg-cyan-400 ml-2 animate-pulse" />
      </h1>
      <p className="text-lg md:text-xl text-gray-400">
        <span className="text-pink-400">{">"}</span> studying <span className="text-cyan-400">cs + math</span> @
        columbia
      </p>
    </header>
  )
}
