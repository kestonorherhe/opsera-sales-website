import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import SalesHome from "../pages/products/sales/Home";
import Legal from "../pages/Legal";
import Services from "../pages/Services";
import Terms from "../pages/terms";
import Faq from "../pages/Faq";

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
    path: "/faq",
    component: <Faq />,
  },
  {
    path: "/legal",
    component: <Legal />,
  },
  {
    path: "/terms",
    component: <Terms />,
  },
  {
    path: "/sales",
    component: <SalesHome />,
  },
];

export { publicRoutes };
