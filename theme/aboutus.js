import { makeStyles, withStyles } from '@material-ui/core/styles';
import themes from "./themes";


const web1 = '#7164ea';
const web2 = '#f29111';
const web3 = '#ff4a69';
const web4 = '#42cd83';
const webbg = '#E6E6E7';

const useStyles = makeStyles((theme) => ({
  aboutusMain: {
    background: '#FFFFFF',
    // [ theme.breakpoints.up("md") ]: {
    //   padding: '1rem 0rem 3.5rem 0rem',
    // },
    [ theme.breakpoints.down("md") ]: {
      padding: '2rem 0rem 3.5rem 0rem',
    },
    [ theme.breakpoints.only("md") ]: {
      padding: '2rem 0rem 3.5rem 0rem',
    },
  },
  contactpaddingdMain: {
    [ theme.breakpoints.up("md") ]: {
      padding: '0rem 2rem 0rem 2rem',
    },
  },
  aboutUsRoot: {
    width: '100',
    textAlign: 'center',
    margin: '50px auto'
  },
  aboutUsTitle: {
    fontFamily: themes.rubik,
    color: themes.heading,
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '.2rem',
    textAlign: 'center',
  },
  aboutUssubT: {
    fontFamily: themes.source,
    color: themes.error,
    lineHeight: '2.9rem',
    fontSize: '2.5rem',
    fontWeight: 700,
    paddingTop: '5px',
    paddingBottom: '5px',
    margin: '10px 0px',
    textAlign: 'center',
    [ theme.breakpoints.up("md") ]: {
      padding: '0% 28%',
    },
    [ theme.breakpoints.only("md") ]: {
      padding: '0% 8%',
    },
    [ theme.breakpoints.down("md") ]: {
      padding: '0% 7%',
    },
  },
  aboutUsD: {
    fontSize: '1.1rem',
    fontFamily: themes.rubik,
    color: themes.info,
    fontWeight: 400,
    textAlign: 'center',
    [ theme.breakpoints.up("md") ]: {
      padding: '0% 25%',
    },
    [ theme.breakpoints.only("md") ]: {
      padding: '0% 8%',
    },
    [ theme.breakpoints.down("md") ]: {
      padding: '0% 7%',
    },
  },
  // aboutmain:{
  //   backgroundColor: (aboutmain) =>{
  //     if (aboutmain.id == 1 ){
  //       return '#f9f8ff'
  //     }
  //     if (aboutmain.id == 2 ){
  //       return '#fffcf6'
  //     }
  //     if (aboutmain.id == 3 ){
  //       return '#f0fffc'
  //     }
  //   }
  // },
  MainaboutDesign1: {
    background: '#f9f8ff',
    padding: '35px',
    textAlign: 'center',
    borderRadius: '10px',
    '&:img': {
      textAlign: 'center',
    },
    '& h1': {
      color: themes.error,
      fontSize: '1.4rem',
    },
    '& p': {
      fontSize: '1rem',
      fontFamily: themes.rubik,
      color: themes.info,
      fontWeight: 400,
    },
  },
  MainaboutDesign2: {
    background: '#fffcf6',
    padding: '35px',
    textAlign: 'center',
    borderRadius: '10px',
    '&:img': {
      textAlign: 'center',
    },
    '& h1': {
      color: themes.error,
      fontSize: '1.4rem',
    },
    '& p': {
      fontSize: '1rem',
      fontFamily: themes.rubik,
      color: themes.info,
      fontWeight: 400,
    },
  },
  MainaboutDesign3: {
    background: '#f0fffc',
    padding: '35px',
    textAlign: 'center',
    borderRadius: '10px',
    '&:img': {
      textAlign: 'center',
    },
    '& h1': {
      color: themes.error,
      fontSize: '1.4rem',
    },
    '& p': {
      fontSize: '1rem',
      fontFamily: themes.rubik,
      color: themes.info,
      fontWeight: 400,
    },
  },
  // about middle
  aboutusMiddle: {
    [ theme.breakpoints.down("md") ]: {
      padding: '2rem 0rem 3.5rem 0rem',
    },
    [ theme.breakpoints.only("md") ]: {
      padding: '2rem 0rem 3.5rem 0rem',
    },
  },
  aboutmidMain: {
    [ theme.breakpoints.up("md") ]: {
      padding: '5rem 0rem 3.5rem 2rem',
    },
    // backgroundColor: 'rgba(255,255,255,1)',
  },
  aboutmidLTitle: {
    fontFamily: themes.rubik,
    color: themes.heading,
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '.2rem',
  },
  aboutmidLSubTitle: {
    fontFamily: themes.source,
    color: themes.error,
    lineHeight: '2.9rem',
    fontSize: '2.5rem',
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
  aboutmidLDetails: {
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
  aboutmidRImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // border: '1px solid red',
    // margin: '0px - 150px 0px 0px',
    // padding: '300px 0px 300px 0px',
    // backgroundImage: 'url("/about/aboutnew.jpg)',
    // backgroundPosition: 'center left',
    // backgroundRepeat: 'no - repeat',
  },

  aboutMBtn: {
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
  // what we do
  whatWeDo: {
    [ theme.breakpoints.down("md") ]: {
      padding: '2rem 0rem 2rem 0rem',
    },
    [ theme.breakpoints.only("md") ]: {
      padding: '2rem 0rem 2rem 0rem',
    },
    [ theme.breakpoints.up("md") ]: {
      padding: '2rem 2rem 2rem 2rem',
    },
  },
  whatWeDoMain: {
    marginTop: '3rem',
  },
  whatidoLMain: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  whatidoLMain1: {
    display: 'flex',
    marginBottom: '20px',
    '& h1': {
      fontFamily: themes.mont,
      color: web1,
      fontSize: '1.3rem',
      lineHeight: '1rem',
      margin: '0px 0px',
      fontWeight: 600,

    },
    '& p': {
      fontSize: '1rem',
      fontFamily: themes.rubik,
      color: themes.info,
      fontWeight: 400,
      [ theme.breakpoints.down("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.only("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.up("md") ]: {
        paddingRight: '30%',
      },

    },
  },
  whatidoLheading: {
    marginLeft: '20px',
  },
  whatidoLIcon1: {
    fontSize: '4rem',
    color: web1,
    // padding: '20px',
    borderRadius: '10px',
    fontWeight: 700,
  },
  whatidoLMain2: {
    display: 'flex',
    marginBottom: '20px',
    '& h1': {
      fontFamily: themes.mont,
      color: web2,
      fontSize: '1.3rem',
      lineHeight: '1rem',
      margin: '0px 0px',
      fontWeight: 600,

    },
    '& p': {
      fontSize: '1rem',
      fontFamily: themes.rubik,
      color: themes.info,
      fontWeight: 400,
      [ theme.breakpoints.down("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.only("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.up("md") ]: {
        paddingRight: '30%',
      },

    },
  },
  whatidoLheading: {
    marginLeft: '20px',
  },
  whatidoLIcon2: {
    fontSize: '4rem',
    // backgroundColor: webbg,
    color: web2,
    // padding: '5px 10px',
    borderRadius: '10px',
    fontWeight: 700,
  },
  whatidoLMain3: {
    display: 'flex',
    '& h1': {
      fontFamily: themes.mont,
      color: web4,
      fontSize: '1.3rem',
      lineHeight: '1rem',
      margin: '0px 0px',
      fontWeight: 600,

    },
    '& p': {
      fontSize: '1rem',
      fontFamily: themes.rubik,
      color: themes.info,
      fontWeight: 400,
      [ theme.breakpoints.down("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.only("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.up("md") ]: {
        paddingRight: '30%',
      },

    },
  },
  whatidoLheading: {
    marginLeft: '20px',
  },
  whatidoLIcon3: {
    fontSize: '4rem',
    // backgroundColor: webbg,
    color: web4,
    // padding: '5px 10px',
    borderRadius: '10px',
    fontWeight: 700,
  },
  // vission & mission
  vission: {
    backgroundColor: '#F8F8F8',
    [ theme.breakpoints.down("md") ]: {
      padding: '2rem 0rem 3.5rem 0rem',
    },
    [ theme.breakpoints.only("md") ]: {
      padding: '2rem 0rem 3.5rem 0rem',
    },

  },
  vissionMain: {
    [ theme.breakpoints.up("md") ]: {
      padding: '3.5rem 4rem 2rem 4rem',
    },
  },
  vissionMainHeadin: {
    display: 'flex',
    marginBottom: '15px',
    '& img': {
      // backgroundColor: '#ffffff',
      // padding: '40px',
      // borderRadius: '50%',
      marginTop: '-5px !important',
    },
    '& h1': {
      fontFamily: themes.mont,
      color: themes.error,
      fontSize: '1.8rem',
      lineHeight: '2rem',
      margin: '0px 0px',
      fontWeight: 700,
    },
    '& p': {
      fontSize: '1rem',
      fontFamily: themes.rubik,
      color: themes.info,
      fontWeight: 400,
      [ theme.breakpoints.down("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.only("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.up("md") ]: {
        paddingRight: '15%',
      },

    },
  },
  vissionMainDetails: {
    marginLeft: '15px',
  },
}));
export default useStyles;



