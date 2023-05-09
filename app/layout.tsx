import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import { Raleway } from "next/font/google";
import ActiveStatus from "./components/ActiveStatus";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "MensagensTop",
  description: "O melhor aplicativo de mensagens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
