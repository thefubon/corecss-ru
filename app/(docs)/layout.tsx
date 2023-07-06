export const metadata = {
  title: "Core CSS | Docs",
  description: "",
};

export default async function DocsLayout({children}: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      Header
      {children}
    </main>
  );
}
