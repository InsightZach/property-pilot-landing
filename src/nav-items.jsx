import { HomeIcon, HelpCircleIcon, PhoneIcon, BookOpenIcon, InfoIcon, NewspaperIcon } from "lucide-react";
import { lazy } from 'react';

const Index = lazy(() => import("./pages/Index.jsx"));
const FAQ = lazy(() => import("./pages/FAQ.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Resources = lazy(() => import("./pages/Resources.jsx"));
const WhyInsight = lazy(() => import("./pages/WhyInsight.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    component: Index,
  },
  {
    title: "Why Insight?",
    to: "/why-insight",
    icon: <InfoIcon className="h-4 w-4" />,
    component: WhyInsight,
  },
  {
    title: "FAQ",
    to: "/faq",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    component: FAQ,
  },
  {
    title: "Resources",
    to: "/resources",
    icon: <BookOpenIcon className="h-4 w-4" />,
    component: Resources,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneIcon className="h-4 w-4" />,
    component: Contact,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <NewspaperIcon className="h-4 w-4" />,
    component: Blog,
  },
];
