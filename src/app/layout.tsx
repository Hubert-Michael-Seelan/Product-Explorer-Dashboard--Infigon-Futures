import "./globals.css";
import ThemeProvider from "@/components/ui/ThemeProvider";

export const metadata = {
  title: "Product Explorer Dashboard",
  description: "Next.js Product Explorer",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
