import ThemeProvider from './components/ThemeProvider';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quran App',
  description: '',
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-secondary'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
