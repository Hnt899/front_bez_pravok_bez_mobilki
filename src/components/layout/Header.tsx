import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogoTag } from "../ui/LogoTag";

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        {/* Левая часть */}
        <div className="flex items-center gap-2">
          <Button variant="pill" asChild>
            <a
              href="#hero"
              aria-label="О нас"
              onClick={(e) => handleScroll(e, "#hero")}
            >
              О нас
            </a>
          </Button>
          <Button variant="pill" asChild>
            <a
              href="#services"
              aria-label="Услуги"
              onClick={(e) => handleScroll(e, "#services")}
            >
              Услуги
            </a>
          </Button>
          <Button variant="pill" asChild>
            <a
              href="#blog"
              aria-label="Блог"
              onClick={(e) => handleScroll(e, "#blog")}
            >
              Блог
            </a>
          </Button>
        </div>

        {/* Лого по центру */}
        <Link to="/" className="ml-20">
          <LogoTag />
        </Link>

        {/* Правая часть */}
        <div className="flex items-center gap-2">
          <Button variant="pill" asChild>
            <a
              href="#portfolio"
              aria-label="Портфолио"
              onClick={(e) => handleScroll(e, "#portfolio")}
            >
              Портфолио
            </a>
          </Button>
          <Button variant="pill" asChild>
            <a
              href="#contacts"
              aria-label="Контакты"
              onClick={(e) => handleScroll(e, "#contacts")}
            >
              Контакты
            </a>
          </Button>
          <Button variant="cta" asChild>
            <Link to="/order" aria-label="Хочу проект">
              Хочу проект
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
