import Providers from '@/components/Providers';

export const metadata = {
  title: 'Recoil Yeze',
  description: 'how to use Recoil',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
