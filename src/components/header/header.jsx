import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import headerBooks from "../../assets/img/headerBooks.png";
import searchIcon from "../../assets/img/search.png";

import s from "./header.module.scss";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 675);
  const location = useLocation();
  // Atualiza o estado com base no redimensionamento da janela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 674);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup para evitar vazamento de memória
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const searchBooks = (event) => {
    event.preventDefault();
    console.log("Buscando por:", searchText);
    alert("Você clicou no botão de pesquisar!");
  };

  return (
    <header>
      <figure>
        <img src={headerBooks} alt="Imagem de Livros" />
        <figcaption>
          <h2>Livros Vai na Web</h2>
        </figcaption>
      </figure>

      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={`${s.menuItem} ${
                location.pathname === "/" ? s.active : ""
              }`}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/livrosdoados"
              className={`${s.menuItem} ${
                location.pathname === "/livrosdoados" ? s.active : ""
              }`}
            >
              Livros Doados
            </Link>
          </li>
          <li className={s.searchField}>
            <form
              onSubmit={searchBooks}
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                type="text"
                placeholder="O que você procura?"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button type="submit">
                <img src={searchIcon} alt="Botão Buscar" />
              </button>
            </form>
          </li>
          <li
            // prettier-ignore
            className={`${isMobile ? "": s.buttonLi} ${
              location.pathname === "/querodoar" ? s.active : ""
            }`}
          >
            <Link
              to="/querodoar"
              className={`${isMobile ? s.menuItem : ""} ${
                location.pathname === "/querodoar" ? s.active : ""
              }`}
            >
              Quero Doar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
