import { Poppins } from "next/font/google";
import style from "./globals.css";
import Header from "@/components/header/header";

const inter = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600'] });

export const metadata = {
    title: "Game of thrones",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
