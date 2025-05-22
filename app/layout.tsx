import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const DEFAULT_THEME = "light"

export const metadata = {
  title: "ENSIMBINI ENGINEERING CC",
  description: "Professional engineering solutions for all your needs.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={DEFAULT_THEME}
      style={{ colorScheme: DEFAULT_THEME }}
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={DEFAULT_THEME}
          enableSystem
          enableColorScheme
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}