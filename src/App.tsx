import { Toaster } from "@/components/components/ui/toaster";
import { Toaster as Sonner } from "@/components/components/ui/sonner";
import { TooltipProvider } from "@/components/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import DevOpsIndex from "./pages/DevOpsIndex";
import DevOpsNavbar from "./components/DevOpsNavbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <DevOpsNavbar />
            <main>
              <Routes>
                <Route path="/" element={<DevOpsIndex />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;