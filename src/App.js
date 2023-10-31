import { Header } from "./components/header/Header";
import { Main } from "./pages/main/Main";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route element={<Main />} path="/" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
