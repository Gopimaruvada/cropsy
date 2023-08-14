import axios from "axios";

export const getRowReportsById = async (id: number) => {
  try {
    const response = await axios.get(
      `https://raw.githubusercontent.com/wjsoft08/test-data/main/api/example_row_reports_block_${id}.json`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching row reports:", error);
    throw error;
  }
};

export const getBlocks = async (filter: any) => {
  try {
    const response = await axios.get(
      `https://raw.githubusercontent.com/wjsoft08/test-data/main/api/example_blocks.json`
    );
    return response.data.filter((d: any) => d.name.includes(filter));
  } catch (error) {
    console.error("Error fetching blocks:", error);
    throw error;
  }
};
