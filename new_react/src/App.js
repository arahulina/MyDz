import AnraFooter from "./components/Footer/AnraFooter";
import AnraHeader from "./components/Header/AnraHeader";

import {Routes, Route, BrowserRouter} from "react-router-dom";
import React from "react";

import PageHome from "./pages/Home";
import PageAbout from "./pages/About";
import PageError from "./pages/Error";
import PagePhone from "./pages/Phone";
import Main from "./components/Nav/Main";
import PageTags from "./pages/Tags";
import PageAuth from "./pages/Auth";


function App() {
  return (
      <BrowserRouter>
          <div className="App container">
              <AnraHeader></AnraHeader>
              <Main></Main>
              <Routes>
                  <Route path="/" element={<PageHome />} />
                  <Route path="/about" element={<PageAbout />} />
                  <Route path="/phone" element={<PagePhone />} />
                  <Route path="/tags" element={<PageTags />} />
                  <Route path="/auth" element={<PageAuth />} />
                  <Route path="*" element={<PageError />} />
              </Routes>
              <AnraFooter></AnraFooter>
          </div>
      </BrowserRouter>
  );
}

export default App;
