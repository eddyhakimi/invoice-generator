import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import MiniDrawer from "../components/MiniDrawer";

export const metadata: Metadata = {
  title: "Invoice Generator",
  description: "Generate invoices for your clients",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <MiniDrawer>{children}</MiniDrawer>
        </ThemeRegistry>
      </body>
    </html>
  );
}
