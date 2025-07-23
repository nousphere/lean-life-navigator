import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { CategoriesManagement } from "./pages/admin/CategoriesManagement";
import { ProgramsManagement } from "./pages/admin/ProgramsManagement";
import { AdminSidebar } from "./components/AdminSidebar";

const queryClient = new QueryClient();

function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <div className="flex-1">
          <header className="h-12 flex items-center border-b bg-background">
            <SidebarTrigger className="ml-2" />
            <h2 className="ml-4 font-semibold">Weight Loss Admin</h2>
          </header>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/categories" element={<CategoriesManagement />} />
              <Route path="/programs" element={<ProgramsManagement />} />
              <Route path="/programs/new" element={<div className="p-6">Add Program Form (Coming Soon)</div>} />
              <Route path="/programs/:id/edit" element={<div className="p-6">Edit Program Form (Coming Soon)</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
