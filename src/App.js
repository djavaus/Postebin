import { Header } from "./components/header/Header";
import { Main } from "./pages/main/Main";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import {Account} from "./pages/account/Account"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [token, setToken] = useState('')

  const [logedin, setLogedin] = useState(false)
  console.log(logedin);

  if (token) {
    return (
      <div>
        <Router>
          <Header setToken={setToken} />
          <Routes>
            <Route element={<Home />} path='/home' />
            <Route element={<Account />} path='/acc' />
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  } else {
    return (
      <div>
        <Main setLogedin={setLogedin} setToken={setToken} />
      </div>
    );
  }
}

export default App;
