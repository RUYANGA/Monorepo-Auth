import React from "react";
import { SidebarInset } from "../ui/sidebar";
import DashboardSummary from "./dashboard-summary";
import { ProductFormDialog } from "./product-form";

function Dashboard() {
  return (
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <span className="text-2xl font-extrabold text-indigo-500">
          Dashboard Overview
        </span>
        <DashboardSummary />
        <ProductFormDialog />

        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </SidebarInset>
  );
}

export default Dashboard;
