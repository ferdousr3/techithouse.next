import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  navbar: {
    // flexGrow: 1,
    boxShadow: '0 4px 20px 0 rgba(167, 172, 183, .3)',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    [ theme.breakpoints.up("md") ]: {
      padding: '0px 80px',
    },
    [ theme.breakpoints.down("sm") ]: {
      padding: '0px 40px',
    },

    '&:li': {
      listStyle: 'none',
    },
    
  },
  li: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    '& a':{
      fontSize: 20,
      color: '#000000',
      fontWeight: 600,
    },
  },
  navbarLast: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 10,
    listStyle: 'none',
    width: '80%',
    display: 'none',
    [ theme.breakpoints.up("md") ]: {
      display: 'flex',
    },

  },
  navbarToggle: {
    display: 'none',
    [ theme.breakpoints.down("sm") ]: {
      display: 'flex',
    },
  },
  navbarToggleS: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: '#0AC0AB',
    width: '90%',
  },
  drawer: {
    width: drawerWidth,
    display: 'none',
    [ theme.breakpoints.down("sm") ]: {
      display: 'flex',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#F4F9FC',
  },
  drawerTop: {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    marginTop: 20,
  },
  drawerTopMenu: {
    marginTop: 18,
    listStyle: 'none',
  },
  drawerPadding: {
    paddingLeft: 50,
  },

}));
export default useStyles;