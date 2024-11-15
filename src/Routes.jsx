import { Routes, Route } from "react-router-dom";
import Home from "../src/components/home/home";
import DonateForm from "../src/components/donateForm/donateForm";
import DonatedBooks from "../src/components/donatedBooks/donatedBooks";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/querodoar" element={<DonateForm />} />
      <Route path="/livrosdoados" element={<DonatedBooks />} />
    </Routes>
  );
}
