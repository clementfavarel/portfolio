import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Clément FAVAREL | Portfolio",
  description:
    "Portfolio de Clément Favarel, développeur web orienté backend et devops.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={dm.className}>{children}</body>
    </html>
  );
}
