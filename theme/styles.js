import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: '80vh',
    margin: '0px auto',
    width: '100%',


  },
  footer: {
    textAlign: 'center',
  },
  toolbar: theme.mixins.toolbar,
  // home page
  hero: {
    background: '#030D28',
    color: '#fff',
    paddingTop: '70px',
    paddingBottom: '100px',
    margin: '0px auto',
    // border: '1px solid red',
    width: '100%',
  },
  heroFirstPart: {
    width: '100%',
    // border: '1px solid red',
  },
  heroMain: {
    width: '100%',
    padding: '0px 10px',
    // textAlign: 'center',
    // [ theme.breakpoints.down("xs") ]: {
    //   fontSize: '1.5rem',
    // },
  },
  heroTitle: {
    fontSize: '4rem',
    width: '100%',
    fontWeight: 700,
    lineHeight: '1.1em',
    color: '#FFFFFF',
    fontFamily: '"Source Sans Pro", "Sans- serif"',
    // textAlign: 'center',
    [ theme.breakpoints.down("xs") ]: {
      fontSize: '1.5rem',
    },
  },
  heroSubTitle: {
    fontSize: '1rem',
    color: '#9FA5B7',
    fontFamily: '"Rubik", "Sans- serif"',
    fontWeight: 400,
  },
  heroBtnPadding: {
    paddingTop: 30,
    [ theme.breakpoints.up("sm") ]: {
      display: 'flex',
    },
    [ theme.breakpoints.down("xs") ]: {
      display: 'flex-inline',
    },
  },

  heroBtn: {
    fontFamily: '"Rubik", "Sans- serif"',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: ' 0.2px',
    color: '#ffffff',
    textTransform: 'uppercase',
    border: '2px solid #313E647f',
    borderRadius: '25px',
    padding: '14px 27px 14px 27px',
    cursor: ' pointer',
    background: 'rgba(0, 0, 0, 0)',
    [ theme.breakpoints.up("sm") ]: {
      marginRight: '10px',
    },
    '&:hover': {
      transition: 'all .6s',
      background: '#1A233E',
      border: '2px solid #1A233E',
    },
  },
  heroBtnMargintop: {
    // marginRight: '10px',
    [ theme.breakpoints.down("xs") ]: {
      marginTop: '35px',
    },
  },
  heroBtnTwo: {
    fontFamily: '"Rubik", "Sans- serif"',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: ' 0.2px',
    color: '#ffffff',
    textTransform: 'uppercase',
    border: '2px solid #1A233E',
    borderRadius: '25px',
    padding: '14px 27px 14px 27px',
    cursor: ' pointer',
    background: '#1A233E',
    '&:hover': {
      transition: 'all .6s',
      background: 'rgba(0, 0, 0, 0)',
      border: '2px solid #313E647f',
    },
  },
  heroRight: {
    position: 'relative',
  },
  heroIcon: {
    position: 'absolute',
    background: '#ffffff',
    padding: '16px',
    borderRadius: '50%',
    top: 25,
    left: '5%',

  },
  // services
  services: {
    padding: '30px 0px',
  },
  servicesLeft: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 0px 62px 0px rgba(9.999999999999991, 50.99999999999997, 80, 0.1)',
    transition: 'background 0.3s, border 0.3s, border- radius 0.3s, box - shadow 0.3s',
    margin: '0px 15px 30px 15px',
    padding: '25px 30px 30px 39px',
    borderRadius:' 10px 10px 10px 10px',
  },
}));
export default useStyles;