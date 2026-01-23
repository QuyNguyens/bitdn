import Footer from './components/Footer';
import Header from './components/Header/components';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
