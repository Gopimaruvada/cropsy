export interface BlockOption {
  id: number;
  name: string;
}

export interface CustomStat {
  attribute: string;
  vinecount: number;
  attributeVal: number;
}
export interface RowData {
  id: number;
  attribute: string;
  blockId: number;
  rowId: number;
  scanArea: number;
  [key: string]: number | string; // Define dynamic keys
}

export interface DataTableProps {
  selectedFilterValues: BlockOption[];
}

export interface SearchResult {
    id: number;
    name: string;
  }
