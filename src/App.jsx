import { BrowserRouter } from "react-router-dom";

import Header from "../src/components/header/header";
import AppRoutes from "./Routes";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main style={{ minHeight: "85vh" }}>
          <AppRoutes />
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
