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
    paddingTop: '4.5rem',
    paddingBottom: '4.5rem',

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
        paddingRight: '22%',
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
  // why we middle
  whyWeMiddle: {
    background: '#F8F8F8',
    // [ theme.breakpoints.up("md") ]: {
    //   padding: '1rem 0rem 3.5rem 0rem',
    // },
    paddingTop: '4.5rem',
    paddingBottom: '4.5rem',

  },
  whyweR:{
    [ theme.breakpoints.up("md") ]: {
      paddingLeft: '15%',
    },
    [ theme.breakpoints.only("md") ]: {
      paddingLeft: '5%',
    },
    [ theme.breakpoints.down("md") ]: {
      paddingLeft: '5%',
    },
  },
  whyWeMLimage: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  whyWeMRMain: {
    display: 'flex',
    justifyContent: 'end',
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
        paddingRight: '5%',
      },
      [ theme.breakpoints.only("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.down("md") ]: {
        paddingRight: '5%',
      },
    },
    '& h2': {
      fontSize: '1.1rem',
      fontFamily: themes.rubik,
      color: themes.info,
      fontWeight: 400,
      [ theme.breakpoints.up("md") ]: {
        paddingRight: '13%',
      },
      [ theme.breakpoints.only("md") ]: {
        paddingRight: '12%',
      },
      [ theme.breakpoints.down("md") ]: {
        paddingRight: '3%',
      },
    },
  },
  whyweMRIconsMain:{
    marginTop: '35px',
  },
  whyweMRIcons:{
    display: 'flex',
    // marginBottom: '10px',
  },
  whyweRMIcon: {
    fontSize: '1rem',
    color: '#fff',
    background: 'linear-gradient( #6254e7 , #9289f1 )',
    borderRadius: '50%',
    fontWeight: 700,
    padding: '3px',
    // marginTop: '5px',
    marginRight: '10px',
  },
  whyweRMIconP: {
    fontSize: '.9rem',
    fontFamily: themes.rubik,
    color: themes.heading,
    fontWeight: 400,
    lineHeight: '1.5rem',
    marginTop: '-3px',
  },
  whywelaMain:{
    display: 'flex',
    
  },
  whywelaSubMain:{
    marginRight: '80px',
  },
  whywelaTitle:{
    fontFamily: themes.source,
    color: themes.error,
    lineHeight: '0rem',
    fontSize: '1.8rem',
    fontWeight: 800,
  
  },
  whywelaDetails:{
    fontSize: '1.1rem',
    fontFamily: themes.source,
    color: themes.heading,
    fontWeight: 700,
    lineHeight: '0rem',
    marginTop: '-10px',
  },
  whyWeMBtn: {
    backgroundImage: 'linear-gradient(96deg, #9289f1 0% ,#6254e7 51%, #9289f1 100%)',
    backgroundSize: '150% 100 %',
    // display: 'inline - block',
    // transition: all .3s
    outline: 'none',
    width: 'auto',
    height: ' 50px',
    cursor: 'pointer',
    padding: '10px 30px',
    lineHeight: '23px',
    margin: '0 0 15px',
    fontSize: '12px',
    fontFamily: themes.rubik,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '.2px',
    border: 'none',
    color: '#fff',
    borderRadius: '5px',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: 'linear-gradient(0deg,  #9289f1 100% , #9289f1 0% , #6254e7 51%)',
      transition: 'all .5s ease',
      color: '#fff',
    },
  },
  // core Value
  coreValueLMain:{
    background: 'rgba(255, 255, 255, 1)',
    minHeight: '270px',
    boxShadow: '0px 15px 25px 0px rgb(0 0 0 / 4%)',
    borderRadius: '4px',
    margin: '0px 0px 0px 0px',
    padding: '30px 30px',
    '& svg':{
      fontSize: '3rem',
      color: 'rgba(10,192,171,1)',
    },
    '& h1':{
      fontSize: '1.2rem',
      fontFamily: themes.mont,
      color: themes.error,
    },
    '& p':{
      fontSize: '.9rem',
      // fontFamily: themes.rubik,
      color: themes.info,
      fontWeight:500,
    },

  },
}));
export default useStyles;



