import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

function Header() {
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography>Crypto Dashboard</Typography>
          <Select>
            <MenuItem>USD</MenuItem>
            <MenuItem>ILS</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
