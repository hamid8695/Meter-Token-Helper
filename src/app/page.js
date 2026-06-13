"use client";

import { useState } from "react";
import { FiClipboard } from "react-icons/fi";

/* ================= TOKEN PARSER ================= */
const parseTokens = (input) => {
  const clean = input
    .replace(/\u00A0/g, " ")
    .replace(/[\u200B-\u200D\uFEFF]/g, "");

  const matches = clean.match(/(?:\d[\s-]*){20}/g) || [];

  const tokens = matches
    .map((t) => t.replace(/\D/g, ""))
    .filter((t) => t.length === 20);

  return Array.from(new Set(tokens));
};

/* ================= FORMAT ================= */
const formatToken = (token) =>
  token.match(/.{1,4}/g)?.join(" ") || token;

/* ================= PAGE ================= */
export default function Page() {
  const [sms, setSms] = useState("");
  const [tokens, setTokens] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [parsed, setParsed] = useState(false);

  /* ================= PASTE ================= */
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setSms(text);
    } catch {}
  };

  /* ================= PARSE ================= */
  const handleParse = () => {
    const parsedTokens = parseTokens(sms);

    setTokens(parsedTokens);
    setActiveIndex(0);
    setDone(false);
    setParsed(true);
  };

  /* ================= CLEAR ================= */
  const handleClear = () => {
    if (!parsed) return;

    const ok = window.confirm("Are you sure you want to clear all tokens?");
    if (!ok) return;

    setSms("");
    setTokens([]);
    setActiveIndex(0);
    setDone(false);
    setParsed(false);
  };

  /* ================= ENTER ================= */
  const handleEnter = () => {
    if (tokens.length === 0) return;

    if (activeIndex === tokens.length - 1) {
      setDone(true);
      return;
    }

    setActiveIndex((prev) => prev + 1);
  };

  const currentToken = tokens[activeIndex];
  const nextToken = tokens[activeIndex + 1];

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-md px-4 py-5">

        {/* HEADER */}
        <div className="sticky top-3 z-50 mb-5 rounded-3xl border bg-white/90 p-4 shadow-xl backdrop-blur">
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white font-bold">
              ⚡
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Meter Token Helper
              </h1>
              <p className="text-xs text-slate-500">
                Safe Step Token Entry System
              </p>
            </div>

          </div>
        </div>

        {/* INPUT */}
        <div className="rounded-3xl bg-white p-4 shadow-xl">

          <textarea
            value={sms}
            onChange={(e) => setSms(e.target.value)}
            placeholder="Paste meter SMS here..."
            className="h-40 w-full resize-none rounded-2xl border p-4 text-sm outline-none"
          />

          {/* FIXED 3 BUTTON GRID (NO LAYOUT SHIFT) */}
          <div className="mt-4 grid grid-cols-3 gap-3">

            <button
              onClick={handlePaste}
              className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white"
            >
              <FiClipboard />
              Paste
            </button>

            <button
              onClick={handleParse}
              className="h-12 rounded-2xl bg-sky-600 font-semibold text-white"
            >
              Parse
            </button>

            <button
              onClick={handleClear}
              disabled={!parsed}
              className={`h-12 rounded-2xl font-semibold text-white transition-all active:scale-[0.98]
                ${
                  parsed
                    ? "bg-red-500"
                    : "bg-red-300 opacity-40 cursor-not-allowed"
                }`}
            >
              Clear
            </button>

          </div>
        </div>

        {/* STEP CARD */}
        {tokens.length > 0 && (
          <div className="mt-6 rounded-[28px] bg-white p-6 shadow-xl border">

            {/* STEP */}
            <div className="text-center mb-6">
              <span className="inline-block rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-sky-600">
                STEP {activeIndex + 1} / {tokens.length}
              </span>

              <h2 className="mt-4 text-[11px] font-bold uppercase tracking-[2px] text-slate-400">
                Enter This Token
              </h2>
            </div>

            {/* TOKEN DISPLAY */}
            <div className="mb-6 flex flex-col items-center gap-3">

              <div className="flex justify-center gap-4">
                {currentToken
                  ?.match(/.{1,4}/g)
                  ?.slice(0, 3)
                  .map((part, idx) => (
                    <span
                      key={idx}
                      className="min-w-[70px] text-center text-[32px] font-extrabold tracking-tight"
                    >
                      {part}
                    </span>
                  ))}
              </div>

              <div className="flex justify-center gap-4">
                {currentToken
                  ?.match(/.{1,4}/g)
                  ?.slice(3, 5)
                  .map((part, idx) => (
                    <span
                      key={idx}
                      className="min-w-[70px] text-center text-[32px] font-extrabold tracking-tight"
                    >
                      {part}
                    </span>
                  ))}
              </div>

            </div>

            {/* NEXT */}
            {nextToken && (
              <div className="mb-6 text-center text-[11px] text-slate-400">
                Next →{" "}
                <span className="font-mono text-slate-500">
                  {formatToken(nextToken)}
                </span>
              </div>
            )}

            {/* DONE */}
            {done && (
              <div className="text-center text-green-600 font-bold">
                ✓ ALL TOKENS COMPLETED
              </div>
            )}

            {/* ENTER */}
            {!done && (
              <button
                onClick={handleEnter}
                className="mt-4 w-full rounded-2xl bg-sky-600 px-4 py-4 text-white shadow-md active:scale-[0.98]"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-sm font-bold tracking-wider">
                    ENTER DONE
                  </span>

                  <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold">
                    {activeIndex + 1}/{tokens.length}
                  </span>
                </div>
              </button>
            )}

          </div>
        )}

        {/* EMPTY STATE */}
        {tokens.length === 0 && (
          <div className="mt-6 rounded-3xl border border-dashed p-6 text-center text-sm text-slate-500">
            Paste SMS → Parse → Start Step Mode
          </div>
        )}

      </div>
    </main>
  );
}