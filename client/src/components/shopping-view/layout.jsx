import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import { Footer } from "@/pages/shopping-view/Footer";
import { Feature } from "@/pages/shopping-view/Feature";



function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <ShoppingHeader />
     
      <main className="flex flex-col w-full">
        <Outlet />
        <div className="pt-50px">
        <Feature/>
        <Footer/>
        </div>
      </main>
    </div>
  );
}

export default ShoppingLayout;
