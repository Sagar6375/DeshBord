import React from "react";
import DashboardStatsGrid from "../components/DashboardStatsGrid";
import TransactionChart from "../components/TransactionChart";
import RecentOrders from "../components/RecentOrders";
import BuyerProfilePieChart from "../components/BuyerProfilePieChart";
import PopularProducts from "../components/PopularProducts";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
	  <div className="flex flex-col md:flex-row gap-4 w-full">
      <TransactionChart className="w-full md:w-1/2 lg:w-1/3 p-2" />
      <BuyerProfilePieChart className="w-full md:w-1/2 p-2" />
    </div>
	  <div className="flex flex-col md:flex-row gap-4 w-full">
      <RecentOrders className="w-full md:w-1/2 lg:w-1/3 p-2" />
      <PopularProducts className="w-full md:w-1/2 p-2" />
    </div>
    </div>
  );
}
