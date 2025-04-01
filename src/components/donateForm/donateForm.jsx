import { useState } from "react";
import openBook from "../../assets/img/openBook.png";
import s from "./donateForm.module.scss";
import useBooks from "../../hooks/useBooks";

export default function DonateForm() {
  const { donateBook, donationStatus } = useBooks();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    image_url: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    donateBook(formData);

    const userChoice = window.confirm(
      `${donationStatus}! Deseja doar novamente?`
    );
    if (!userChoice) {
      window.location.href = "/livrosdoados";
    } else {
      setFormData({ title: "", category: "", author: "", image_url: "" });
    }
  };

  // const donate = (e) => {
  //   e.preventDefault();
  //   console.log(e.target);
  //   const donationData = {
  //     title: e.target.title.value,
  //     category: e.target.category.value,
  //     author: e.target.author.value,
  //     image_url: e.target.image_url.value,
  //   };

  //   // Checks if all fields are filled in
  //   if (
  //     donationData.title &&
  //     donationData.category &&
  //     donationData.author &&
  //     donationData.image_url
  //   ) {
  //     alert("Doação realizada com sucesso!");
  //   } else {
  //     alert("Doação não realizada! Verifique todos os campos.");
  //   }
  // };

  return (
    <div className={s.container}>
      <h4>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h4>
      <form onSubmit={handleSubmit} className={s.form}>
        <figure>
          <img src={openBook} alt="Imagem de um livro aberto" />
          <figcaption>Informações do Livro</figcaption>
        </figure>

        <input
          type="text"
          placeholder="Título"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Categoria"
          value={formData.category}
          name="category"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Autor"
          value={formData.author}
          name="author"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Link da imagem da capa"
          value={formData.image_url}
          name="image_url"
          onChange={handleInputChange}
          required
        />
        <button type="submit">Doar</button>
      </form>
    </div>
  );
}
