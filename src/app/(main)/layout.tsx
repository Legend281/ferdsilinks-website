import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <Header />
      <div className="flex-1">
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </div>
      <Footer />
    </LanguageProvider>
  );
}
