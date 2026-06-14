"use client";

import { useState } from "react";
import {
  FiClipboard,
  FiRefreshCcw,
  FiX,
  FiGithub,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

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
  const [error, setError] = useState("");
  const [showClearModal, setShowClearModal] = useState(false);

   /* ================= PASTE ================= */
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setSms(text);
    } catch {}
  };
  /* ================= PARSE ================= */
  const handleParse = () => {
    const result = parseTokens(sms);

    if (!result.length) {
      setTokens([]);
      setError("No valid tokens found");
      return;
    }

    setTokens(result);
    setActiveIndex(0);
    setDone(false);
    setParsed(true);
    setError("");
  };

  /* ================= ENTER ================= */
  const handleEnter = () => {
    if (activeIndex === tokens.length - 1) {
      setDone(true);
      return;
    }
    setActiveIndex((p) => p + 1);
  };

  const current = tokens[activeIndex];
  const next = tokens[activeIndex + 1];

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">

      <div className="mx-auto max-w-md px-4 py-5">

        <div className="sticky top-3 z-50 mb-5 rounded-2xl border border-white/40 bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90 p-4 shadow-2xl backdrop-blur-md">
  
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white shadow-inner">
      ⚡
    </div>

    <div>
      <h1 className="text-lg font-bold text-white leading-tight">
        Meter Token Helper
      </h1>
      <p className="text-xs text-white/80">
        Safe Step Token System
      </p>
    </div>
  </div>

</div>

        {/* ================= INPUT ================= */}
        <div className="rounded-3xl bg-white p-4 shadow-xl">

          <textarea
            value={sms}
            onChange={(e) => setSms(e.target.value)}
            placeholder="Paste meter SMS here..."
            className="h-40 w-full resize-none rounded-2xl border p-4 text-sm outline-none"
          />

          

       <div className="mt-4 flex items-center gap-3">

  {/* Paste Button */}
  <button
    onClick={handlePaste}
    className="h-12 w-12 flex items-center justify-center rounded-2xl bg-slate-900/80 text-white shadow-lg border border-slate-700 hover:bg-slate-800 active:scale-95 transition"
    title="Paste"
  >
    <FiClipboard size={20} />
  </button>

  {/* Parse Button */}
  <button
    onClick={handleParse}
    className="flex-1 h-12 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm font-bold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition"
  >
    <FiRefreshCcw size={18} />
    <span>Parse Token</span>
  </button>

  {/* Clear Button */}
  {/* <button
    onClick={() => setShowClearModal(true)}
    className="h-12 w-12 flex items-center justify-center rounded-2xl bg-red-500/10 text-red-500 border border-red-200 shadow-lg hover:bg-red-500 hover:text-white active:scale-95 transition"
    title="Clear"
  >
    <FiX size={22} />
  </button> */}

  <button
  onClick={() => setShowClearModal(true)}
  disabled={!sms.trim()}
  className={`h-12 w-12 flex items-center justify-center rounded-2xl border shadow-lg transition
    ${
      sms.trim()
        ? "bg-red-500/10 text-red-500 border-red-200 hover:bg-red-500 hover:text-white active:scale-95"
        : "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50"
    }
  `}
  title="Clear"
>
  <FiX size={22} />
</button>

</div>
         {error && (
  <div className="mt-3 flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-600 shadow-sm">
    <span className="mt-[2px] text-sm">⚠️</span>
    <p className="leading-relaxed font-medium">{error}</p>
  </div>
)}
        </div>
<div className="mt-4 rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-blue-50 px-4 py-3 text-center text-xs text-sky-700 shadow-sm">
  💡 <span className="font-semibold">Tip:</span> মিটারে{" "}
  <span className="rounded-md bg-sky-600 px-2 py-1 text-white font-bold">889</span>{" "}
  চাপলে শেষ সফল সিকোয়েন্স দেখাবে। এরপরের নম্বর থেকে টোকেন শুরু করুন।
</div>
     

        {tokens.length > 0 && (
  <div className="mt-6 rounded-3xl border border-white/20 bg-gradient-to-b from-white via-slate-50 to-slate-100 p-6 shadow-2xl">

    {/* STEP BADGE */}
    <div className="mb-5 text-center">
      <span className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-md">
        STEP {activeIndex + 1} / {tokens.length}
      </span>
    </div>

    {/* TOKEN DISPLAY */}
    {/* <div className="text-center">
      <div className="text-3xl font-mono font-bold tracking-widest text-slate-900">
        {formatToken(current)}
      </div>

      {next && (
        <p className="mt-2 text-xs text-slate-500">
          Next → <span className="font-medium text-slate-700">{formatToken(next)}</span>
        </p>
      )}
    </div> */}


    <div className="text-center space-y-3">
  {/* Current Token Card */}
  <div className="relative mx-auto w-fit">
    <div className="px-6 py-4 rounded-2xl bg-slate-100 border border-slate-200 shadow-sm">
      <div className="text-3xl font-mono font-bold tracking-[0.35em] text-slate-900 select-none">
        {formatToken(current)}
      </div>
    </div>

    {/* subtle indicator dot */}
    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500 "></span>
    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-600"></span>
  </div>

  {/* Next Token Guide */}
  {next && (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
      <span className="text-[11px] text-slate-500">Next Step</span>
      <span className="text-xs font-semibold text-slate-800 font-mono tracking-widest">
        {formatToken(next)}
      </span>
    </div>
  )}

  {/* Hint */}
  <p className="text-[11px] text-slate-400">
    Enter tokens one by one in correct sequence
  </p>
</div>

    {/* ACTION BUTTON */}
{!done ? (
 <button
  onClick={handleEnter}
  className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-4 text-white font-bold shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
>
  ENTER DONE • STEP {activeIndex + 1}/{tokens.length}
</button>
) : (
  <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 py-4 text-center font-bold text-green-700 shadow-sm animate-bounce">
    ✓ ALL COMPLETED
  </div>
)}

  </div>
)}

      {/* ================= EMPTY ================= */}
{tokens.length === 0 && (
  <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-gradient-to-b from-white to-slate-50 p-8 text-center shadow-sm">

    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 text-xl">
      ⚡
    </div>

    <h3 className="text-sm font-bold text-slate-700">
      Ready to Start
    </h3>

    <p className="mt-2 text-xs text-slate-500">
      Paste SMS → Parse Tokens → Start Step Mode
    </p>

    <div className="mt-4 text-[11px] text-slate-400">
      Your tokens will appear here after parsing
    </div>

  </div>
)}

       {/* ================= FOOTER (RESTORED) ================= */}
<footer className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">

  <p className="font-semibold text-slate-800">
    Developed by <span className="text-slate-900">Syed Md. Abdul Hamid</span>
  </p>

  <div className="mt-4 flex justify-center gap-3 text-sm">

    <a
      href="https://github.com/hamid8695"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-white text-xs shadow hover:bg-slate-800 transition"
    >
      <FiGithub /> GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/hamid8695/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-white text-xs shadow hover:bg-blue-700 transition"
    >
      <FiLinkedin /> LinkedIn
    </a>

    <a
      href="https://www.facebook.com/syedmdabdulhamidazad"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-xl bg-sky-600 px-3 py-2 text-white text-xs shadow hover:bg-sky-700 transition"
    >
      <FiFacebook /> Facebook
    </a>

  </div>

  <p className="mt-4 text-[11px] text-slate-400">
    Mobile Friendly Meter Token System • v1.0
  </p>

</footer>
      </div>
      {showClearModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

    <div className="w-[90%] max-w-sm rounded-3xl bg-white p-6 shadow-2xl">

      <h2 className="text-lg font-bold text-slate-800">
        Clear all data?
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        This will remove SMS, tokens and reset step progress.
      </p>

      <div className="mt-6 flex gap-3">

        <button
          onClick={() => setShowClearModal(false)}
          className="flex-1 rounded-2xl bg-slate-100 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            setSms("");
            setTokens([]);
            setParsed(false);
            setShowClearModal(false);
          }}
          className="flex-1 rounded-2xl bg-red-500 py-3 text-sm font-bold text-white hover:bg-red-600 transition"
        >
          Yes, Clear
        </button>

      </div>

    </div>

  </div>
)}
    </main>
  );
}