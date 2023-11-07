import { Header } from "./components/header/Header";
import { Main } from "./pages/main/Main";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import { Account } from "./pages/account/Account"
import { Public } from "./pages/public/Public";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [token, setToken] = useState('')

  // const setCookies = () => {
  //   Cookies.set("token", token, { expires: 7 });
  // }
  
  // const GetCookie = () => {
  //   alert(Cookies.get("token"));
  // };

  // useEffect(() => {
  //   localStorage.setItem('Token', token);
  // }, [token]);

  // console.log(token.token);

  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //    setItems(items);
  //   }
  // }, []);

  if (token) {
    return (
      <div>
        <Router>
          <Header setToken={setToken} />
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Account />} path='/acc' />
            <Route element={<Public />} path='/public' />
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  } else {
    return (
      <div>
        <Main setToken={setToken} />
      </div>
    );
  }
}

export default App;
