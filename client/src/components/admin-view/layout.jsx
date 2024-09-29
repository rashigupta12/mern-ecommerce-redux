import { Outlet } from "react-router-dom";
// import AdminSideBar from "./sidebar";
// import AdminHeader from "./header";
// import { useState } from "react";

function AdminLayout() {
  // const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* admin sidebar */}
      {/* <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} /> */}
      <h6>sidebar</h6>
      <div className="flex flex-1 flex-col">
        {/* admin header */}
        <h6>admin header</h6>
        {/* <AdminHeader setOpen={setOpenSidebar} /> */}
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;