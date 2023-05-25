import { useEffect } from "react";
import { fetchData } from "./utils/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGernres } from "./store/homeSlice";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { darkBtn } from "./store/darkBtnSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
// import SearchResults from "./pages/searchResults/SearchResults";
import About from "./pages/about/About";
import PagenNotFound from "./pages/404/PageNotFound";
import Sidebar from "./components/Sidebar";
import useFetch from "./hooks/useFetch";

function App() {
  const dispatch = useDispatch();
  const darkLightMode = () => {
    if (
      localStorage.theme == "dark" ||
      (!(localStorage.theme === "light") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      dispatch(darkBtn({ icon: faSun, text: "Light Mode" }));
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      dispatch(darkBtn({ icon: faMoon, text: "Dark Mode" }));
    }
  };

  const fetchApiConfig = () => {
    fetchData("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const getAllGenres = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((point) => {
      promises.push(fetchData(`/genre/${point}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => {
        allGenres[item.id] = item;
      });
    });
    dispatch(getGernres(allGenres));
  };

  useEffect(() => {
    getAllGenres();
    fetchApiConfig();
    darkLightMode();
  }, []);

  return (
    <BrowserRouter class>
      <Sidebar />
      <section className="w-full max-h-[100svh]  px-10 py-0 overflow-y-scroll overflow-x-hidden">
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
