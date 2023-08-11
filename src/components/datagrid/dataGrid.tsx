import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getRowReportsById } from "../../services/apiService";
import { RowData, DataTableProps, CustomStat } from "../../Models/index";

const columns: GridColDef[] = [
  { field: "attribute", headerName: "Attribute", width: 130 },
  { field: "blockId", headerName: "Block ID", width: 100 },
  { field: "rowId", headerName: "Row ID", width: 100 },
  { field: "Pruned to Target%", headerName: "Pruned to Target%", width: 100 },

  { field: "scanArea", headerName: "Scan Area", type: "number", width: 100 },
  { field: "0 Canes", headerName: " 0 Canes", type: "number", width: 100 },
  { field: "1 Canes", headerName: " 1 Canes", type: "number", width: 100 },
  { field: "2 Canes", headerName: " 2 Canes", type: "number", width: 100 },
  { field: "3 Canes", headerName: " 3 Canes", type: "number", width: 100 },
  { field: "4 Canes", headerName: " 4 Canes", type: "number", width: 100 },
];

const DataTable: React.FC<DataTableProps> = ({ selectedFilterValues }) => {
  const [data, setData] = React.useState<RowData[]>([]);
  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    if (selectedFilterValues.length > 0) {
      fetchData(selectedFilterValues[0].id); // Assuming you want to use the first selected value's id
    }
  }, [selectedFilterValues]);

  useEffect(() => {
    if (selectedFilterValues.length > 0) {
      fetchData(selectedFilterValues[0].id); // Assuming you want to use the first selected value's id
    }
  }, [selectedFilterValues]);

  const fetchData = async (selectedId: number) => {
    try {
      const rowReports = await getRowReportsById(selectedId);

      const customStatsRows: RowData[] = rowReports?.map((row: any) => {
        const rowData: RowData = {
          id: row.id,
          attribute: row.attribute,
          blockId: row.blockId,
          rowId: row.rowId,
          scanArea: row.scanArea,
        };

        let highestCaneCount = 0;
        let sumCaneCounts = 0;

        row.customStats.forEach((stat: CustomStat, index: number) => {
          rowData[`${index} Canes`] = stat.vinecount;
          sumCaneCounts += stat.vinecount;

          if (stat.vinecount > highestCaneCount) {
            highestCaneCount = stat.vinecount;
          }
        });

        rowData["Pruned to Target%"] = (
          (highestCaneCount / sumCaneCounts) *
          100
        ).toFixed(1);

        return rowData;
      });

      setData(customStatsRows); // Set the data state here
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default DataTable;
