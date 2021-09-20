import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NextLink from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import ActiveLink from './ActiveLink';
import { Drawer, IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import useStyles from "./NavbarStyles";




const Navbar = () => {
  const classes = useStyles();
  const menuItens = [
    {
      text: 'Services',
      icon: <SubjectOutlined color="secondary" />,
      path: '/services',
    },

    {
      text: 'Why We',
      icon: <PeopleAltOutlinedIcon color="secondary" />,
      path: '/whywe',
    },
    {
      text: 'About Us',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/about',
    },
    {
      text: 'Contact',
      icon: <EmailOutlinedIcon color="secondary" />,
      path: '/contact',
    },
  ];
  // const [ drawerOpen, setDraweropen ] = useState(false);

  const [ open, setOpen ] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className={classes.root} >
        {/* Drawer */}
        <Drawer className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.drawerTop}>
            <li className={classes.drawerTopMenu} >
              <NextLink href="/" >
                <a >TechitHouse</a>
              </NextLink>
            </li>
            <IconButton aria-label="close drawer"
              onClick={handleDrawerClose}  >
              <CloseOutlinedIcon />
            </IconButton>
          </div>
          <List className={classes.drawerPadding}>
            {menuItens.map(item => (
              <ListItem key={item.text} >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ActiveLink
                  onClick={() => setOpen(false)}
                  href={item.path}
                  title={item.text}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
        {/* appbar */}
        <AppBar position="fixed" color="primary" elevation={0} >
          <Toolbar className={classes.navbar}  >
            <li className={classes.li} >
              <NextLink href="/">
                <a>TechIThouse</a>
              </NextLink>
            </li>
            <ul className={classes.navbarLast} >
              <li>
                <ActiveLink
                  href="/"
                  title="Home"
                />
              </li>
              <li>
                <ActiveLink
                  href="/services"
                  title="Services"
                />
              </li>

              <li>
                <ActiveLink
                  href="/whywe"
                  title="Why We"
                />
              </li>
              <li>
                <ActiveLink
                  href="/about"
                  title="About Us"
                />
              </li>
              <li>
                <ActiveLink
                  href="/contact"
                  title="Contact"
                />
              </li>
            </ul>
            {/* drawer Open */}
            <div className={classes.navbarToggle}  >
              <IconButton aria-label="open drawer"
                onClick={handleDrawerOpen} >
                {/* <FaBars className={classes.navbarToggleS} /> */}
                <DehazeOutlinedIcon className={classes.navbarToggleS} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

      </div>
    </>
  );
};

export default Navbar;
