import s from "./donatedBooks.module.scss";
import useBooks from "../../hooks/useBooks";
import LoadingInfo from "../loadingInfo/spin";
// const jsonBooks = [
//   {
//     titulo: "1984",
//     categoria: "Distopia",
//     autor: "George Orwell",
//     link_foto:
//       "https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     titulo: "Harry Potter e a Pedra Filosofal",
//     categoria: "Fantasia",
//     autor: "J.K. Rowling",
//     link_foto:
//       "https://m.media-amazon.com/images/I/81pB+joKL4L._UF894,1000_QL80_.jpg",
//   },
//   {
//     titulo: "O Código Da Vinci",
//     categoria: "Suspense",
//     autor: "Dan Brown",
//     link_foto:
//       "https://m.media-amazon.com/images/I/91QSDmqQdaL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     titulo: "A Guerra dos Tronos",
//     categoria: "Fantasia",
//     autor: "George R.R. Martin",
//     link_foto: "https://m.media-amazon.com/images/I/91+1SUO3vUL.jpg",
//   },
//   {
//     titulo: "O Pequeno Príncipe",
//     categoria: "Infantil",
//     autor: "Antoine de Saint-Exupéry",
//     link_foto:
//       "https://m.media-amazon.com/images/I/81TmOZIXvzL._AC_UF1000,1000_QL80_.jpg",
//   },
// ];

export default function DonateBooks() {
  const { books, loading, error } = useBooks();

  if (loading) return <LoadingInfo></LoadingInfo>;
  if (error) return <h1>Erro ao carregar livros: {error}</h1>;

  if (books.length === 0) return <h1>Nenhum livro foi doado.</h1>;

  return (
    <section className={s.booksDonated}>
      {books.map((book, index) => (
        <article key={index} className={s.bookDonated}>
          <img src={book.image_url} className={s.bookDonatedCover} />
          <p className={s.bookDonatedInfo}>{book.title}</p>
          <p className={s.bookDonatedInfo}>{book.category}</p>
          <p className={s.bookDonatedInfo}>{book.author}</p>
        </article>
      ))}
    </section>
  );
}
