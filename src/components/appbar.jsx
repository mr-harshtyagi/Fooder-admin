import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Badge from '@mui/material/Badge';
import { styled } from "@mui/material/styles";
import { useState } from "react";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -8,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Appbar(prop) {
    const [value,setValue]=useState(0);
  return (
    <Box style={{ marginTop: "80px" }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            if (newValue === 0) {
              prop.dishes();
            }
            if (newValue === 1) {
              prop.orders();
            }
          }}
        >
          <BottomNavigationAction label="Menu" icon={<MenuBookIcon />} />
          <BottomNavigationAction
            label="Recent Orders"
            icon={
              <StyledBadge badgeContent={2} color="success" >
                <RestaurantIcon />
              </StyledBadge>
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
