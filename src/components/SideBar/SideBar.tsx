import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./SideBar.css";

function SideBar({ onScrollTo }: { onScrollTo: (section: "proyectos" | "contacto" | "sobreMi") => void }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 150 }} role="presentation" className="sideBar" onClick={toggleDrawer(false)}>
      <List>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              onScrollTo("sobreMi");
            }}
          >
            <ListItemText primary={"Sobre mí"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              onScrollTo("proyectos");
            }}
          >
            <ListItemText primary={"Proyectos"} />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              onScrollTo("contacto");
            }}
          >
            <ListItemText primary={"Contacto"} />
          </ListItemButton>
        </ListItem>
        
      </List>
    </Box>
  );

  return (
    <div className="sideBar-container">
      <IconButton onClick={toggleDrawer(true)}>
        <DehazeIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default SideBar;
