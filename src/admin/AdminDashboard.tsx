import { Outlet } from "react-router";

const AdminDashboard = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="top-0 left-0 fixed bg-zinc-300 p-10 w-[280px] min-h-screen">
        <h1 className="text-3xl">Admin</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
