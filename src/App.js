import { Header } from "./components/header/Header";
import { Main } from "./pages/main/Main";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "./components/registration/Registration";
import { Auth } from "./components/auth/Auth";


function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {/* <Route element={<Main />} path="/" /> */}
          {/* <Route element={<Registration />} path="/" /> */}
          <Route element={<Auth />} path="/" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
