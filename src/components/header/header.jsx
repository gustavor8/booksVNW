import { Link } from "react-router-dom";
import { useState } from "react";

import headerBooks from "../../assets/img/headerBooks.png";
import searchIcon from "../../assets/img/search.png";

import s from "./header.module.scss";

export default function Header() {
  const [searchText, setSearchText] = useState("");

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
            <Link to="/" className={s.menuItem}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/livrosdoados" className={s.menuItem}>
              Livros Doados
            </Link>
          </li>
          <li>
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
          <li className={s.buttonLi}>
            <Link to="/querodoar">Quero Doar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
