import React from "react";
import Filters from "../filters/filters";
import DataTable from "../datagrid/dataGrid";
import "./dashboard.css";

function DashboardMain() {
  return (
    <div className="dashboard_main">
      <div className="filters">
        <Filters />
      </div>
      <div className="data_grid">
        <DataTable />
      </div>
    </div>
  );
}

export default DashboardMain;
