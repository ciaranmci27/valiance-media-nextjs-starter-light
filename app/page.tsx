"use client"

import Image from "next/image"
import { useState } from "react"

function CodeBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative flex items-center bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 font-mono text-sm">
      <span className="text-gray-500 select-none mr-3">$</span>
      <code className="text-gray-300 flex-1 break-all">{command}</code>
      <button
        onClick={handleCopy}
        className="ml-3 p-1.5 text-gray-500 hover:text-white hover:bg-gray-700 rounded transition-colors"
        title="Copy to clipboard"
      >
        {copied ? (
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <a href="https://www.valiancemedia.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://www.valiancemedia.com/_next/image?url=%2Flogos%2Fhorizontal-logo-inverted.png&w=256&q=75"
            alt="Valiance Media"
            width={256}
            height={64}
            className="mx-auto mb-8 hover:opacity-80 transition-opacity"
            unoptimized
          />
        </a>

        <h1 className="text-3xl font-bold mb-4">Next.js Starter Light</h1>

        <p className="text-gray-400 mb-8">
          A lightweight Next.js boilerplate by Valiance Media. Pre-configured with TypeScript,
          Tailwind CSS, and ESLint to help you quickly bootstrap your next project with
          best practices out of the box.
        </p>

        <div className="mb-8 text-left">
          <h2 className="text-lg font-semibold mb-4">Quick Start</h2>
          <div className="space-y-3">
            <CodeBlock command="git clone https://github.com/ciaranmci27/valiance-media-nextjs-starter-light.git" />
            <CodeBlock command="cd valiance-media-nextjs-starter-light" />
            <CodeBlock command="npm install" />
            <CodeBlock command="npm run dev" />
          </div>
        </div>

        <a
          href="https://github.com/ciaranmci27/valiance-media-nextjs-starter-light"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          View on GitHub
        </a>
      </div>
    </main>
  )
}
