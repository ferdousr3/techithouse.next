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
  webDRMainCenter: {
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
    '& span': {
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
  webDevFetureMain: {
    marginTop: '30px',
    marginBottom: '10px',
    // border: '1px solid red',
    '& h5':{
      fontFamily: themes.rubik,
      color: web2,
      fontSize:'1.2rem',
      fontWeight: '600',
      lineHeight: '1rem',
      margin: '0px 0px',
    },
    '& p':{
      fontFamily: themes.rubik,
      color: themes.warning,
      fontSize: '.9rem',
      fontWeight: '400',
      paddingRight: '20px',
    },
  },
  webDevIcon: {
    fontSize: '2.5rem',
    color: web2,
    marginBottom: '5px',
  },
  deployCSection:{
    backgroundColor: '#F8F8F8',
    [ theme.breakpoints.up("md") ]: {
      padding: '4rem 5rem 3rem 5rem',
    },
    [ theme.breakpoints.only("md") ]: {
      padding: '4rem 2rem 3rem 2rem',
    },
    [ theme.breakpoints.down("md") ]: {
      padding: '4rem 1.5rem 3rem 1.5rem',
    },
  },
  deployCSectionHeading:{
    paddingBottom: '20px',
    textAlign: 'center',
    '& h1':{
      fontFamily: themes.rubik,
      color: themes.heading,
      fontSize: '1rem',
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: '.2rem',
      
    },
    '& h2':{
      fontFamily: themes.source,
      color: themes.error,
      lineHeight: '2.5rem',
      fontSize: '2.2rem',
      fontWeight: 700,
      paddingTop: '5px',
      paddingBottom: '5px',
      margin: '10px 0px',
      [ theme.breakpoints.up("md") ]: {
        padding: '0% 25%',
      },
      [ theme.breakpoints.only("md") ]: {
        padding: '0% 10%',
      },
      [ theme.breakpoints.down("md") ]: {
        padding: '0% 7%',
      },
    },
    '& p':{
      fontSize: '1.1rem',
      fontFamily: themes.rubik,
      color: themes.info,
      fontWeight: 400,
      [ theme.breakpoints.up("md") ]: {
        padding: '0% 20%',
      },
      [ theme.breakpoints.only("md") ]: {
        padding: '0% 8%',
      },
      [ theme.breakpoints.down("md") ]: {
        padding: '0% 5%',
      },
    },
  },
  deployMainPart:{
    display: 'flex',
    '&:hover':{
      '& svg': {
        color: web2,
      },
      '& span': {
        color: web2,
      },
      '& h1': {
        color: web2,
      },
    },
    '& svg':{
      fontSize: '4rem',
      color: web1,
      marginRight: '15px',
    },
    '& span':{
      color: web1,
      fontSize: '1.3rem',
      fontWeight: 700,
      
    },
    '& h1':{
      fontFamily: themes.mont,
      color: web1,
      fontSize: '1.4rem',
      fontWeight: 700,
      margin: '0px 0px',
    },
    '& p':{
      fontSize: '1.1rem',
      fontFamily: themes.rubik,
      color: themes.info,
      fontWeight: 400,
      [ theme.breakpoints.up("md") ]: {
        paddingRight: ' 20%',
      },
      [ theme.breakpoints.only("md") ]: {
        paddingRight: ' 8%',
      },
      [ theme.breakpoints.down("md") ]: {
        paddingRight: ' 5%',
      },
    },
  },
  digitalMIcon:{
    fontSize: '2.5rem',
    color: web4,
    marginBottom: '5px',
  },
  digitalMFetureMain: {
    marginTop: '30px',
    marginBottom: '10px',
    // border: '1px solid red',
    '& h5': {
      fontFamily: themes.rubik,
      color: web4,
      fontSize: '1.2rem',
      fontWeight: '600',
      lineHeight: '1rem',
      margin: '0px 0px',
    },
    '& p': {
      fontFamily: themes.rubik,
      color: themes.warning,
      fontSize: '.9rem',
      fontWeight: '400',
      paddingRight: '20px',
    },
  },
  // getin tous
  joinUs: {
  backgroundImage: 'linear-gradient(96deg, #050D29 0% ,#041134 51%, #050C28 100%)',
  [ theme.breakpoints.up("md") ]: {
    padding: '3rem 3.5rem 3rem 3.5rem',
  },
  [ theme.breakpoints.down("md") ]: {
    padding: '2rem 0rem 3.5rem 2rem',
  },
  [ theme.breakpoints.only("md") ]: {
    padding: '2rem 0rem 3.5rem 2rem',
  },
  '& h1': {
    color: '#FFFFFF',
    fontSize: '2.5rem',
    paddingRight: '24%',
    [ theme.breakpoints.down("md") ]: {
      fontSize: '1.8rem',
    },
  },
},
  joinUsMBtn: {
  background: 'transparent',
  outline: 'none',
  width: 'auto',
  height: ' 50px',
  cursor: 'pointer',
  padding: '10px 40px',
  margin: '0 0 15px',
  fontSize: '15px',
  fontFamily: themes.mont,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '.2px',
  border: '2px solid #FFFFFF',
  color: '#fff',
  marginTop: '10px',
  '&:hover': {
    backgroundColor: '#FFFFFF ',
    transition: 'all .5s ease',
    color: '#050C28 ',
    border: '2px solid #FFFFFF',
  },
},
  whyWeMRMain: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
}));
export default useStyles;



