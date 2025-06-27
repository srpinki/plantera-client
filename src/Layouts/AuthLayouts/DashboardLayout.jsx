import React from "react";
import {
  MdDashboard,
  MdOutlineAddCircle,
  MdOutlineInventory,
  MdPersonOutline,
  MdOutlineCategory,
  MdTrendingUp,
} from "react-icons/md";
import { Link, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open h-screen pt-18">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      {/* Main Content */}
      <div className="drawer-content flex flex-col bg-base-200">
        {/* Mobile Navbar */}
        <div className="w-full bg-white p-4 shadow-md lg:hidden flex justify-between items-center">
          <label htmlFor="dashboard-drawer" className="btn btn-outline btn-sm">
            ☰ Menu
          </label>
          <h2 className="text-lg font-bold text-green-700">Plant Dashboard</h2>
        </div>

        {/* Page Content */}
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="w-64 bg-white p-6 shadow-md min-h-full">
          <h1 className="text-2xl font-bold text-green-700 mb-8">
            Plant Dashboard
          </h1>
          <ul className="menu text-base-content">
            <li>
              <label htmlFor="dashboard-drawer" className="cursor-pointer">
                <Link to="/auth/dashboard/overview" className="flex items-center gap-2">
                  <MdDashboard /> Overview
                </Link>
              </label>
            </li>

            <li>
              <label htmlFor="dashboard-drawer" className="cursor-pointer">
                <Link to="/all-plants" className="flex items-center gap-2">
                  <MdOutlineInventory /> All Plants
                </Link>
              </label>
            </li>

            <li>
              <label htmlFor="dashboard-drawer" className="cursor-pointer">
                <Link
                  to="/auth/dashboard/add-plant"
                  className="flex items-center gap-2"
                >
                  <MdOutlineAddCircle /> Add Plant
                </Link>
              </label>
            </li>

            <li>
              <label htmlFor="dashboard-drawer" className="cursor-pointer">
                <Link
                  to="/auth/dashboard/my-plants"
                  className="flex items-center gap-2"
                >
                  <MdPersonOutline /> My Plants
                </Link>
              </label>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
