import React, { useState, useEffect, useRef } from "react";
import { DataGrid, GridSearchIcon } from "@mui/x-data-grid";
import rows from "./RowData.json";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PreviewSharpIcon from "@mui/icons-material/PreviewSharp";
const columns = [
  { field: "id", headerName: "Id", width: 80 },
  { field: "Name", headerName: "Name", width: 200, editable: true },
  { field: "Address", headerName: "Address", width: 200 },
  { field: "Phone", headerName: "Phone", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
];

export default function DataGridDemo() {
  const [Data, setData] = useState(rows);
  const [first, setfirst] = useState("");

  useEffect(() => {
    setData(
      rows.filter((Fullname) =>
        Fullname.Name.toLocaleLowerCase().includes(first)
      )
    );
    if (first === "") {
      setData(rows);
    }
  }, [first]);
  return (
    <div
      style={{
        height: 500,
        width: "50%",
        boxShadow: "0 0 5px 0 rgba(0,0,0,.5)",
      }}
    >
      <div className="w-full py-2 flex justify-between border-b px-3 items-center bg-slate-300 text-gray-700">
        <h3>Approval Pending</h3>
        <TextField
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon className="icon" />
              </InputAdornment>
            ),
          }}
          placeholder="Search...."
          sx={{ color: "red" }}
          value={first}
          onChange={(e) => {
            setfirst(e.target.value);
          }}
        />
        <Button
          endIcon={<PreviewSharpIcon />}
          color="info"
          variant="contained"
          sx={{ borderRadius: 50, flexShrink: 0, background: "gray" }}
        >
          View ALL
        </Button>
      </div>
      <DataGrid
        aria-label="Dashborad"
        // autoHeight={true}
        rows={Data}
        columns={columns}
        // autoPageSize={true}
        pageSize={100}
        // rowsPerPageOptions={[6]}
      />
    </div>
  );
}
