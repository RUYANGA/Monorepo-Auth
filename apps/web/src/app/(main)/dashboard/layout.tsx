import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main>
        <nav className="flex items-center justify-evenly">
          <SidebarTrigger />
          <h1 >RUYANGA</h1>
        </nav>
        {children}
      </main>
    </SidebarProvider>
  );
}
