import { BrowserRouter } from "react-router-dom";

import Header from "../src/components/header/header";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
