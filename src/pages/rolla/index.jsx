import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useState } from "react";
import { multilineColumn, isKeyboardEvent, GridCellEditStopReasons } from '../../assets/enableMultilineEdit';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // 1. put your rows into state
  const [rows, setRows] = useState(mockDataTeam);

  // 2. handle edits
  const handleCellEditCommit = (params) => {
    const { id, field, value } = params;
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: value,    // overwrite the edited field
            }
          : row
      )
    );
  };
  

  
  const columns = [
    
    {
      field: "κωδικος",
      headerName: "κωδικος",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    
    {
      field: "παχος",
      headerName: "παχος",
      type: "number",
      
    },
    {
      field: "πλατος",
      headerName: "πλατος",
       type: "number",
      
    },
    {
      field: "ημερομηνια_εισαγωγης",
      headerName: "ημερομηνια_εισαγωγης",
      type: "number",
      headerAlign: "left",
      align: "left",
      editable: true,
    },
    {
      field: "μηκος",
      headerName: "μηκος",
      flex: 1,
      type: "number",
      headerAlign: "left",
      align: "left",
      editable: true,
    },
    {
      field: "σχολια",
      headerName: "σχολια",
      flex: 3,
      editable: true,
      ...multilineColumn,
    },
    {
      field: "α_κ",
      headerName: "α_κ",
      
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    
      
      <Box
        m="0px 500px 0px 0px"
        height="60vh"
        sx={{
          
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[900],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
         rows={mockDataTeam}
         columns={columns}
          
           onCellEditCommit={handleCellEditCommit}
         onCellEditStop={(params, event) => {
          if(params.field !== 'σχολια') return
          if (params.reason !== GridCellEditStopReasons.enterKeyDown) return;

         if (isKeyboardEvent(event) && !event.ctrlKey && !event.metaKey ) {
         event.defaultMuiPrevented = true;
         }
          }
         
        }
         />
      </Box>
   
  );
};

export default Team;