import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

export default function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-4 text-center ">
                <div className="bg- shadow-lg aspect-video rounded-xl p-7 ">
                  <div className="flex items-center justify-between p-4">
                    <h1 className="font-bold text-2xl">Total Products</h1>
                    <TrendingUp size={48} className="text-red-600" />
                  </div>
                  <span className="text-3xl">89</span>
                </div>
                <div className="bg- shadow-lg aspect-video rounded-xl p-7 ">
                  <div className="flex items-center justify-between p-4">
                     <Users size={50} className="text-red-600" />
                    <h1 className="font-bold text-2xl">Total Users</h1>
                   
                  </div>
                  <span className="text-3xl">48</span>
                </div>
                <div className="bg- shadow-lg aspect-video rounded-xl p-7 ">
                  <div className="flex items-center justify-between p-4">
                    <h1 className="font-bold text-2xl">Sales Summary </h1>
                    <DollarSign size={48} className="text-red-600" />
                    
                  </div>
                  <span className="text-3xl">9</span>
                </div>
                <div className="bg- shadow-lg aspect-video rounded-xl p-7 ">
                  <div className="flex items-center justify-between p-4">
                    <h1 className="font-bold text-2xl">Recent Orders</h1>
                    <ShoppingCart size={48} className="text-red-600" />
                    
                  </div>
                  <span className="text-3xl">50</span>
                </div>

               
              </div>
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
