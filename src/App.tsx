import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Páginas SEO
import TransporteCorporativoTresLagoas from "./pages/TransporteCorporativoTresLagoas";
import MobilidadeCorporativaMS from "./pages/MobilidadeCorporativaMS";
import TransporteParaIndustriaMS from "./pages/TransporteParaIndustriaMS";
import LocacaoVeiculosComMotorista from "./pages/LocacaoVeiculosComMotorista";
import LogisticaEmpresarialMS from "./pages/LogisticaEmpresarialMS";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Páginas SEO */}
          <Route
            path="/transporte-corporativo-tres-lagoas"
            element={<TransporteCorporativoTresLagoas />}
          />
          <Route path="/mobilidade-corporativa-ms" element={<MobilidadeCorporativaMS />} />
          <Route path="/transporte-para-industria-ms" element={<TransporteParaIndustriaMS />} />
          <Route
            path="/locacao-veiculos-com-motorista"
            element={<LocacaoVeiculosComMotorista />}
          />
          <Route path="/logistica-empresarial-ms" element={<LogisticaEmpresarialMS />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
