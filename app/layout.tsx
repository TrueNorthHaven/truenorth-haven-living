export const metadata = {
  title: "TrueNorth Haven Living",
  description: "Structured supportive living and shared housing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}