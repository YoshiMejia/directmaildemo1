import './globals.css';

export const metadata = {
  title: 'WAConverter',
  description: 'CSV converter for WAC Marketing Dept.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mono">{children}</body>
    </html>
  );
}
