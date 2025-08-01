import { SidebarInset } from "@/components/ui/sidebar";
import React from "react";
import { ProductFormDialog } from "@/components/adminDashboard/product-form";

function ProductPage() {
  return (
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <ProductFormDialog />
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          Products
        </div>
      </div>
    </SidebarInset>
  );
}
export default ProductPage;
