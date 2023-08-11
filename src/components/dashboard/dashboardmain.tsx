import React, { useState } from 'react';
import Filters from '../filters/filters';
import DataTable from '../datagrid/dataGrid';
import "./dashboard.css";
interface BlockOption {
  id: number;
  name: string;
}
function DashboardMain() {
  const [selectedFilterValues, setSelectedFilterValues] = useState<BlockOption[]>([]); // Add this state

  const handleApplyFilter = (selectedValues: BlockOption[]) => {
    setSelectedFilterValues(selectedValues);
  };

  return (
    <div className="dashboard_main">
      <div className="filters">
        <Filters onApplyFilter={handleApplyFilter} />
      </div>
      <div className="data_grid">
        <DataTable selectedFilterValues={selectedFilterValues} />
      </div>
    </div>
  );
}

export default DashboardMain;
