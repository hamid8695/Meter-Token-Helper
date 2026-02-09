import "./globals.css";

export const metadata = {
  title: "NanoKite",
  description: "Innovative Software Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-to-br from-slate-50 to-blue-50">
        {children}
      </body>
    </html>
  );
}
