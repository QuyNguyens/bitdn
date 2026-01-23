import Footer from './components/Footer';
import HeaderBottom from './components/HeaderBottom';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <HeaderBottom />
      {children}
      <Footer />
    </main>
  );
}
