import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { navItems } from "./nav-items";
import WhyInsight from "./pages/WhyInsight";
import NotFound from "./pages/NotFound";
import React, { Suspense, useTransition, lazy, useEffect } from 'react';

const queryClient = new QueryClient();

const NavigationWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPending, startTransition] = useTransition();

  const handleNavigation = (to) => {
    startTransition(() => {
      navigate(to);
    });
  };

  useEffect(() => {
    const currentRoute = navItems.find(item => item.to === location.pathname) || { title: "Insight Property Tax" };
    document.title = `${currentRoute.title} | Insight Property Tax`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", currentRoute.description || "Expert property tax appeal services for commercial, industrial, and apartment properties in Minnesota. Maximize your savings with Insight Property Tax.");
    }
  }, [location]);

  return React.cloneElement(children, { handleNavigation });
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <NavigationWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {navItems.map(({ to, component: Component }) => (
                <Route
                  key={to}
                  path={to}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Component />
                    </Suspense>
                  }
                />
              ))}
              <Route
                path="/why-insight"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <WhyInsight />
                  </Suspense>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </NavigationWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
