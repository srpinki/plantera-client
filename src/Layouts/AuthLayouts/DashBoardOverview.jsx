import React from "react";
import { MdOutlineCategory, MdPersonOutline, MdTrendingUp } from "react-icons/md";

const DashBoardOverview = () => {
  return (
    <div className="p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      <p className="text-gray-500 mt-1 mb-6">
        Welcome back! Here's what's happening with your plants today.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Total Plants",
            value: 156,
            icon: <MdOutlineCategory />,
            desc: "All plants in catalog",
          },
          {
            label: "My Plants",
            value: 12,
            icon: <MdPersonOutline />,
            desc: "Plants you've added",
          },
          {
            label: "Categories",
            value: 8,
            icon: <MdOutlineCategory />,
            desc: "Different plant types",
          },
          {
            label: "Growth Rate",
            value: 23,
            icon: <MdTrendingUp />,
            desc: "New plants this month",
          },
        ].map((card, i) => (
          <div key={i} className="card bg-white shadow-sm p-4">
            <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
              <span>{card.label}</span>
              {card.icon}
            </div>
            <h3 className="text-2xl font-bold">{card.value}</h3>
            <p className="text-sm text-gray-400">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Profile and Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Profile */}
        <div className="card bg-white shadow-sm p-6">
          <h3 className="font-bold text-lg mb-4">Profile Information</h3>
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://i.pravatar.cc/100?img=3" alt="User" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-sm text-gray-500">john.doe@example.com</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card bg-white shadow-sm p-6">
          <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
          <ul className="text-sm space-y-2">
            <li>
              <span className="text-green-500 font-bold">●</span> Added new
              plant: <strong>Monstera Deliciosa</strong>{" "}
              <span className="text-gray-400 ml-2">2 hours ago</span>
            </li>
            <li>
              <span className="text-blue-500 font-bold">●</span> Updated care
              instructions for <strong>Snake Plant</strong>{" "}
              <span className="text-gray-400 ml-2">1 day ago</span>
            </li>
            <li>
              <span className="text-yellow-500 font-bold">●</span> Watered 5
              plants <span className="text-gray-400 ml-2">2 days ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardOverview;
