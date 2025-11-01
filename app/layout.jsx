export const metadata = {
  title: "Optimus Lead",
  description: "External Sales Director & Outbound machine for small teams"
};

import "../app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
