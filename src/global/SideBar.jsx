import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"; // New import
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// Item component needs a slight adjustment for the new MenuItem
const Item = ({ title, to, icon, selected, setSelected ,setIsCollapsed, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      
      onClick={() => {
  setSelected(title);
  setIsCollapsed(prev => !prev);
      }}
      icon={icon}
      component={<Link to={to} />}
      
      // menuItemStyles can be defined here or higher up
      style={{
        color: colors.grey[100], // Default color for the item text
      }}
    >
      <Typography>{title}</Typography>
      
    </MenuItem>
  );
};

const AppSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true); // State is here
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor={colors.greenAccent[800]}
        rootStyles={{}}
      >
        <Menu
          iconShape="square"
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              return {
                color: colors.grey[100],
                padding: "5px 35px 5px 20px !important",
                backgroundColor: 'transparent',
                '&:hover': {
                  color: `${colors.redAccent[400]} !important`,
                  backgroundColor: `transparent !important`,
                },
                ...(active && {
                  color: " #faaf65 !important",
                  backgroundColor: 'transparent !important',
                }),
              };
            },
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)} // This is fine here, as it's within AppSidebar's scope
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              setIsCollapsed={setIsCollapsed} // <--- Passed setIsCollapsed here!
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              setIsCollapsed={setIsCollapsed} // <--- Passed setIsCollapsed here!
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              setIsCollapsed={setIsCollapsed} // <--- Passed setIsCollapsed here!
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              setIsCollapsed={setIsCollapsed} // <--- Passed setIsCollapsed here!
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              setIsCollapsed={setIsCollapsed} // <--- Passed setIsCollapsed here!
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              setIsCollapsed={setIsCollapsed} // <--- Passed setIsCollapsed here!
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              setIsCollapsed={setIsCollapsed} // <--- Passed setIsCollapsed here!
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              setIsCollapsed={setIsCollapsed} // <--- Passed setIsCollapsed here!
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              setIsCollapsed={setIsCollapsed} // <--- Passed setIsCollapsed here!
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              setIsCollapsed={setIsCollapsed} // <--- Passed setIsCollapsed here!
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              setIsCollapsed={setIsCollapsed} // <--- Passed setIsCollapsed here!
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default AppSidebar;