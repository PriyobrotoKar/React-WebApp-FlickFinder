import { useEffect } from "react";
import { fetchData } from "./utils/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
// import SearchResults from "./pages/searchResults/SearchResults";
import About from "./pages/about/About";
import PagenNotFound from "./pages/404/PageNotFound";
import Sidebar from "./components/Sidebar";

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(
  //     fetchData("/movie/popular").then((res) =>
  //       dispatch(getApiConfiguration(res))
  //     )
  //   );
  // }, []);

  return (
    <BrowserRouter class>
      <Sidebar />
      <section className="w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PagenNotFound />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
