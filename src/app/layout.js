import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "WebBox Demo"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div style={{ display: "flex", gap: "8px" }}>
					<Link href="/">Home</Link>
					<Link href="/webbox">WebBox</Link>
				</div>
				{children}
			</body>
		</html>
	);
}
