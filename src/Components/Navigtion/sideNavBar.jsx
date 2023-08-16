import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Grid from "@mui/material/Grid";


import { useState } from "react";

import HomePage from "../Homepage";
import Account from "../MyAccount/Account";

import { makeStyles } from "@material-ui/core/styles";
import Profile from "./Profile";
import HelpDesk from "../HelpDesk/HelpDesk";
import Notification from "../Notifications/Notifications";
import History from "../History/History";
import WebsiteManagerComponent from "../WMS/WebsiteManager"; 
import SupportTeam from "../Support/SupportTeam";
import AdminComponent from "../Admin/Admin";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2), // adds 16px of margin
  },
  button: {
    margin: theme.spacing(1), // adds 8px of margin
  },
  container: {
    margin: "0 auto", // centers the container horizontally
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const [selectedComponent,setSelectedComponent] = useState("Home");

  const menu1 = ["Home", "My Account","Notifications", "History", "Help"];
  const menu2 = ["Admin View" , "Website Manager", "Support Team", "My Team"];

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const changeComponent = (component) => {
    setSelectedComponent(component);
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu1.map((text, index) => (
          <ListItem key={index} disablePadding >
            <ListItemButton onClick={() => changeComponent(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}        
      </List>
      <Divider />
      <List >
        {menu2.map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => changeComponent(text)}>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    
  );

  return (
    <div>
      <Grid className={classes.root} container>
        <Grid xs={6}>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                variant="contained"
                colorblue
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuOpenIcon />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Grid>

        <Grid
          xs={6}
          justifyContent="flex"
          alignItems="right"
        >
          <Profile />
        </Grid>
      </Grid>
      <Grid className={classes.root}>
        { selectedComponent === 'Home'  && <HomePage />}
        { selectedComponent === 'My Account' && <Account />}
        { selectedComponent === 'Notifications' && <Notification />}
        { selectedComponent === "Help" && <HelpDesk /> }
        { selectedComponent === "History" && <History />}

        { selectedComponent === "Website Manager" && <WebsiteManagerComponent />}
        { selectedComponent === "Support Team" && <SupportTeam />}
        { selectedComponent === "Admin View" && <AdminComponent /> }
      </Grid>
    </div>
  ); 
}
