import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faHeart, faBook } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
const SidebarData = [
  {
    title: "Browse",
    icon: <FontAwesomeIcon icon={faCompass} />,
    path: "/",
  },
  {
    title: "WatchList",
    icon: <FontAwesomeIcon icon={faHeart} />,
    path: "/watchlists",
  },
  {
    title: "Coming Soon",
    icon: <FontAwesomeIcon icon={faCalendar} />,
    path: "/comingsoon",
  },
  {
    title: "About",
    icon: <FontAwesomeIcon icon={faBook} />,
    path: "/about",
  },
];

export { SidebarData };
