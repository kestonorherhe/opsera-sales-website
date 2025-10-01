import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/products/sales/Home";
import Legal from "../pages/Legal";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Terms from "../pages/terms";

const publicRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/services",
    component: <Services />,
  },
  {
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    path: "/contact-us",
    component: <ContactUs />,
  },
  {
    path: "/projects",
    component: <Portfolio />,
  },
  {
    path: "/legal",
    component: <Legal />,
  },
  {
    path: "/terms",
    component: <Terms />,
  },
];

export { publicRoutes };
