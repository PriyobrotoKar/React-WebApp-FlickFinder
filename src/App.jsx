import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { darkBtn } from "./store/darkBtnSlice";
import { getApiConfiguration, getGernres } from "./store/homeSlice";
import { fetchData } from "./utils/api";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
// import SearchResults from "./pages/searchResults/SearchResults";
import Sidebar from "./components/Sidebar";
import PagenNotFound from "./pages/404/PageNotFound";
import About from "./pages/about/About";
import SearchResults from "./pages/searchResults/SearchResults";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import Watchlist from "./pages/watchlist/Watchlist";

function App() {
  const [showSidebar, setShowSidebar] = useState();
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

  const checkLogin = () => {
    console.log(location.pathname);
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
    <BrowserRouter>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <section
        id="contentSection"
        onClick={(e) => {
          console.log(e.target);
          e.target.parentElement.classList.contains("hamburger") ||
          e.target.classList.contains("hamburger")
            ? ""
            : (setShowSidebar(false), (document.body.style.overflow = ""));
        }}
        className="lg:ml-[19rem] overflow-x-hidden min-h-[100svh] flex flex-col"
      >
        <Header setShowSidebar={setShowSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PagenNotFound />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
