import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};
