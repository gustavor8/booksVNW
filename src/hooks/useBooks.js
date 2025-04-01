import { useState, useEffect } from "react";
import axios from "axios";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [donationStatus, setDonationStatus] = useState(
    "Doação realizada com sucesso!"
  );

  //  seacrh books
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get(
          "https://chalengeapiwithpythonvnw.onrender.com/books"
        );
        setBooks(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  // Donate Books
  const donateBook = async (donationData) => {
    try {
      const response = await axios.post(
        "https://chalengeapiwithpythonvnw.onrender.com/donate",
        donationData
      );

      if (response.status === 201) {
        setDonationStatus("Doação realizada com sucesso!");
      }
    } catch (err) {
      setDonationStatus(
        "Doação não realizada! Verifique todos os campos. O erro foi: " + err
      );
    }
  };

  return { books, loading, error, donateBook, donationStatus };
};

export default useBooks;
