import { makeStyles, withStyles } from '@material-ui/core/styles';
import themes from "./themes";


const web1 = '#7164ea';
const web2 = '#f29111';
const web3 = '#ff4a69';
const web4 = '#42cd83';
const webbg = '#E6E6E7';

const useStyles = makeStyles((theme) => ({
  whyWeStart: {
    background: '#FFFFFF',
    // [ theme.breakpoints.up("md") ]: {
    //   padding: '1rem 0rem 3.5rem 0rem',
    // },
    paddingTop: '3rem',
    paddingBottom: '2rem',

  },
  whyWeStartMain: {
    [ theme.breakpoints.up("md") ]: {
      padding: '0rem 3.5rem 0rem 3.5rem',
    },
    [ theme.breakpoints.down("md") ]: {
      padding: '0rem 0rem 3.5rem 0rem',
    },
    [ theme.breakpoints.only("md") ]: {
      padding: '0rem 0rem 3.5rem 0rem',
    },
  },
  whyWeLMain: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    '& h1': {
      fontFamily: themes.source,
      color: themes.error,
      lineHeight: '2.9rem',
      fontSize: '2.5rem',
      fontWeight: 700,
      paddingTop: '5px',
      paddingBottom: '5px',
      margin: '10px 0px',
      [ theme.breakpoints.up("md") ]: {
        paddingRight: '28%',
      },
      [ theme.breakpoints.only("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.down("md") ]: {
        paddingRight: '5%',
      },
    },
    '& p': {
      fontSize: '1.1rem',
      fontFamily: themes.rubik,
      color: themes.info,
      fontWeight: 400,
      [ theme.breakpoints.up("md") ]: {
        paddingRight: '28%',
      },
      [ theme.breakpoints.only("md") ]: {
        paddingRight: '12%',
      },
      [ theme.breakpoints.down("md") ]: {
        paddingRight: '3%',
      },
    },
  },
  whyWeRimage: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    // border: '1px solid red',
    // marginRight: '-10px',
  },
  whyWeRimag: {
    boxShadow: '0px 0px 50px 0px rgb(22 107 97 / 8%)',
  },


}));
export default useStyles;



