import { HomeIcon, HelpCircleIcon, PhoneIcon, BookOpenIcon, InfoIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import Resources from "./pages/Resources.jsx";
import WhyInsight from "./pages/WhyInsight.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Why Insight?",
    to: "/why-insight",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <WhyInsight />,
  },
  {
    title: "FAQ",
    to: "/faq",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <FAQ />,
  },
  {
    title: "Resources",
    to: "/resources",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <Resources />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <Contact />,
  },
];