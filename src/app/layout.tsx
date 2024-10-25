import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/nextjs';

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
		<ClerkProvider>
			<html lang='en'>
				<body className={`${outfit.variable} antialiased`}>
					<NextTopLoader />
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
