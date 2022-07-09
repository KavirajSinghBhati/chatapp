import React from "react";
import DashboardToggle from "./dashboard/DashboardToggle";

const Sidebar = () => {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashboardToggle />
      </div>
      Bottom with chat rooms
    </div>
  );
};

export default Sidebar;
