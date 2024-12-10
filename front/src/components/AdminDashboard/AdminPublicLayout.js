import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const AdminPublicLayout = () => {
  console.log("Rendering PublicLayout at:", new Date().toISOString());
  return (
    <>
      <Navbar />
      <main>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </>
  );
};

export default AdminPublicLayout;
