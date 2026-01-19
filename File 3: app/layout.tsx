export const metadata = {
  title: "Adrian J. Permal — Director / Producer",
  description: "Cinematic storytelling through film, music, and culture."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
