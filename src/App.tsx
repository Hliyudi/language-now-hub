import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index.tsx";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));

// Lazy-load heavy providers that aren't needed for initial paint
const QueryClientProvider = lazy(() =>
  import("@tanstack/react-query").then((m) => ({
    default: ({ children }: { children: React.ReactNode }) => {
      const client = new m.QueryClient();
      return <m.QueryClientProvider client={client}>{children}</m.QueryClientProvider>;
    },
  }))
);

const DeferredProviders = lazy(() =>
  Promise.all([
    import("@/components/ui/sonner"),
    import("@/components/ui/toaster"),
    import("@/components/ui/tooltip"),
  ]).then(([sonnerMod, toasterMod, tooltipMod]) => ({
    default: ({ children }: { children: React.ReactNode }) => (
      <tooltipMod.TooltipProvider>
        <toasterMod.Toaster />
        <sonnerMod.Toaster />
        {children}
      </tooltipMod.TooltipProvider>
    ),
  }))
);

const App = () => (
  <LanguageProvider>
    <BrowserRouter>
      <Suspense fallback={null}>
        <QueryClientProvider>
          <DeferredProviders>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
            </Routes>
          </DeferredProviders>
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  </LanguageProvider>
);

export default App;
