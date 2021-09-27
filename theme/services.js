import { makeStyles, withStyles } from '@material-ui/core/styles';
import themes from "./themes";


const web1 = '#695ce8';
const web2 = '#f47514';
const web3 = '#ff4a69';
const web4 = '#38c77b';
const webbg = '#F9F8FE';

const useStyles = makeStyles((theme) => ({

  servicesMainSection: {
    backgroundColor: '#FFFFFF',
    [ theme.breakpoints.up("md") ]: {
      padding: '8rem 4rem 3rem 4rem',
    },
    [ theme.breakpoints.only("md") ]: {
      padding: '8rem 2rem 3rem 2rem',
    },
    [ theme.breakpoints.down("md") ]: {
      padding: '8rem 1.5rem 3rem 1.5rem',
    },
  },
  servicesMainPart: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0px 22px 90px 0px rgb(18 28 109 / 13%)',
    transition: 'background 0.3s, border 0.3s, border - radius 0.3s, box - shadow 0.3s',
    margin: '10px 10px 10px 10px',
    position: 'relative',
    padding: '30px 40px',
    '&:hover': {
      '& $servicesMainImage': {
        transform: 'scale(1.1)',
        transition: 'all .4s',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        width: '230px',
        height: '260px',
      },
      // '& $servicesMainImg': {
      //   width: '230px',
      //   height: '230px',
      // },
      
    },
    '& h1': {
      fontSize: '1.3rem',
      color: themes.error,
      fontFamily: themes.rubik,
      paddingTop: '80px',
      textAling: 'center !important',
      // border: '1px solid red',
    },
    '& p': {
      fontSize: '.9rem',
      color: themes.heading,
      fontFamily: themes.mont,
      textAling: 'center !important',
      fontWeight: 500,
    },
  },
 
  servicesMainImg: {
    width: '230px',
    height: '230px',
    position: 'absolute',
    marginTop: '-115px',
    right: '50%',
    transform: 'translateX(50%)',
    // border: '1px solid red',
    
  },
  servicesMainImage: {
    height: '230px',
    width: '230px',
    position: 'relative',
    marginTop: '8px !important',
    // border: '1px solid red',
  },
  idStyle: {
    width: '30px',
    height: '30px',
    position: 'absolute',
    marginTop: '-115px',
    right: '52%',
    transform: 'translateX(52%)',

  },
  idStyleMain: {
    width: '30px',
    height: '30px',
    fontSize: '2.5rem',
    color: '#FFF',
    fontFamily: themes.rubik,

  },
// web design
  webDSection: {
    backgroundColor: '#FFFFFF',
    [ theme.breakpoints.up("md") ]: {
      padding: '4rem 4rem 3rem 4rem',
    },
    [ theme.breakpoints.only("md") ]: {
      padding: '4rem 2rem 3rem 2rem',
    },
    [ theme.breakpoints.down("md") ]: {
      padding: '4rem 1.5rem 3rem 1.5rem',
    },
  },
  webDRMain: {
    [ theme.breakpoints.up("md") ]: {
      paddingLeft: '2rem',
    },
    [ theme.breakpoints.only("md") ]: {
      paddingLeft: '1rem',
    },
    [ theme.breakpoints.down("md") ]: {
      paddingLeft: '.8rem',
    },
  },
  webDRTitle: {
    fontFamily: themes.rubik,
    color: themes.heading,
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '.2rem',
  },
  webDRSubTitle: {
    fontFamily: themes.source,
    color: themes.error,
    lineHeight: '2.5rem',
    fontSize: '2.2rem',
    fontWeight: 700,
    paddingTop: '5px',
    paddingBottom: '5px',
    margin: '10px 0px',
    [ theme.breakpoints.up("md") ]: {
      paddingRight: ' 10%',
    },
    [ theme.breakpoints.only("md") ]: {
      paddingRight: '7%',
    },
    [ theme.breakpoints.down("md") ]: {
      paddingRight: '3%',
    },
  },
  webDRDetails: {
    fontSize: '1.1rem',
    fontFamily: themes.rubik,
    color: themes.info,
    fontWeight: 400,

    [ theme.breakpoints.up("md") ]: {
      paddingRight: ' 8%',
    },
    [ theme.breakpoints.only("md") ]: {
      paddingRight: '5%',
    },
    [ theme.breakpoints.down("md") ]: {
      paddingRight: '3%',
    }
  },
  webDRMainCenter:{
   display: 'flex !Important',
    // justifyContent: 'center',
    justifyItems: 'center',
    // border: '1px solid red',
    // width: '100%',
    // height: '100%',
  },
  webDRFetureMain: {
    paddingTop: '3px',
    paddingLeft: '10px',
  },
  webDRFeture: {
    fontSize: '.9rem',
    fontFamily: themes.rubik,
    color: themes.info,
    fontWeight: 400,
    '& span':{
      color: '#6254e7',
      paddingRight: '4px',
    },
  },
  webDMBtn: {
    backgroundImage: 'linear-gradient(96deg, #9289f5 0% ,#6254e7 51%, #9289f1 100%)',
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
      backgroundColor: 'linear-gradient(0deg,  #9289f1 100% , #9289f5 40% , #6254e7 51%)',
      transition: 'all .2s ease',
      color: '#fff',
    },
  },
  
}));
export default useStyles;



