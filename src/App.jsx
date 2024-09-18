import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { navItems } from "./nav-items";
import WhyInsight from "./pages/WhyInsight";
import React, { Suspense, useTransition, lazy } from 'react';

const queryClient = new QueryClient();

const NavigationWrapper = ({ children }) => {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  const handleNavigation = (to) => {
    startTransition(() => {
      navigate(to);
    });
  };

  return React.cloneElement(children, { handleNavigation });
};

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

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
              <Route
                path="/privacy-policy"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <PrivacyPolicy />
                  </Suspense>
                }
              />
            </Routes>
          </Suspense>
        </NavigationWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
