import "./globals.css";

export const metadata = {
  title: "Meter220 | মিটার টোকেন হেল্পার",
  description: "প্রিপেইড মিটার টোকেন এসএমএস থেকে দ্রুত টোকেন বের করুন",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
