import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const clashDisplay = localFont({
    src: './fonts/ClashDisplay.ttf',
});

export const metadata: Metadata = {
    title: 'Macro',
    description:
        'Manage your personal finances the easy way - See all your accounts in one place and get insights, so you can make informed choices about your money.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${clashDisplay.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
