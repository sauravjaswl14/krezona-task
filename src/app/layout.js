import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistMonaSans = localFont({
  src: "./fonts/Mona-Sans.woff2",
  variable: "--font-geist-mono",
  weight: "100 400 900",
});

export const metadata = {
  title: "Krezona Task",
  description: "Developed by saurav jaiswal",
};
{
  /* ${geistSans.variable} ${geistMono.variable} */
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMonaSans} ${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
