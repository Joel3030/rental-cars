import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';

const outfit = localFont({
	src: './fonts/Outfit.ttf',
	variable: '--font-outfit-wght',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Rental Cars',
	description: 'admin rental cars',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${outfit.variable} antialiased`}>
				<NextTopLoader color='#000' />
				{children}
			</body>
		</html>
	);
}
