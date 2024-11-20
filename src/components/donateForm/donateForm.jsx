import openBook from "../../assets/img/openBook.png";
import s from "./donateForm.module.scss";
export default function DonateForm() {
  // Function called on form submit
  const donate = (e) => {
    e.preventDefault();
    console.log(e.target);
    const donationData = {
      title: e.target.title.value,
      category: e.target.category.value,
      author: e.target.author.value,
      imageLink: e.target.imageLink.value,
    };

    // Checks if all fields are filled in
    if (
      donationData.title &&
      donationData.category &&
      donationData.author &&
      donationData.imageLink
    ) {
      alert("Doação realizada com sucesso!");
    } else {
      alert("Doação não realizada! Verifique todos os campos.");
    }
  };

  return (
    <div className={s.container}>
      <h4>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h4>
      <form onSubmit={donate} className={s.form}>
        <figure>
          <img src={openBook} alt="Imagem de um livro aberto" />
          <figcaption>Informações do Livro</figcaption>
        </figure>

        <input type="text" placeholder="Título" name="title" required />
        <input type="text" placeholder="Categoria" name="category" required />
        <input type="text" placeholder="Autor" name="author" required />
        <input
          type="text"
          placeholder="Link da imagem da capa"
          name="imageLink"
          required
        />
        <button type="submit">Doar</button>
      </form>
    </div>
  );
}
