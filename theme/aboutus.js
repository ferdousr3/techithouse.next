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
    boxShadow: '0px 0px 1px rgb(249, 248, 255 / 80 %)',
    border: '1px solid #E5E8EC',
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
    boxShadow: '0px 0px 1px rgb(255, 252, 246 / 80 %)',
    border: '1px solid #E5E8EC',
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
    boxShadow: '0px 0px 1px rgb(240, 255, 252 / 80 %)',
    border: '1px solid #E5E8EC',
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
    backgroundColor: '#F9F8FE',
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
    // border: '1px solid #E5E8EC',
    // backgroundColor: '#fff',
    // boxShadow: '0 1px 10px 0 rgb(0 0 0 / 5 %)',
    // padding: '10px 0px 10px 10px',
  },
  // WHY CHOOSE US
  whywe: {
    [ theme.breakpoints.down("md") ]: {
      padding: '2rem 0rem 2rem 0rem',
    },
    [ theme.breakpoints.only("md") ]: {
      padding: '2rem 0rem 2rem 0rem',
    },
    [ theme.breakpoints.up("md") ]: {
      padding: '3rem 2rem 2rem 2rem',
    },
  },
  // whyweMain: {
  //   marginTop: '3rem',
  // },
  whyweLeft: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  whyweRight: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  whyweTitle:{
    fontFamily: themes.rubik,
    color: themes.heading,
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '.2rem',
  },
  whywesubT:{
    fontFamily: themes.source,
    color: themes.error,
    lineHeight: '2rem',
    fontSize: '1.9rem',
    fontWeight: 700,
    paddingTop: '0px',
    paddingBottom: '25px',
    margin: '5px 0px',
    [ theme.breakpoints.up("md") ]: {
      paddingRight: '50%',
    },
    [ theme.breakpoints.only("md") ]: {
      paddingRight: '10%',
    },
    [ theme.breakpoints.down("md") ]: {
      paddingRight: '5%',
    },
  },
  whyweRMain: {
    display: 'flex',
    marginBottom: '15px',
    '& h1': {
      fontFamily: themes.mont,
      color: themes.error,
      fontSize: '1.4rem',
      lineHeight: '1rem',
      margin: '0px 0px',
      fontWeight: 700,

    },
    '& p': {
      fontSize: '1rem',
      fontFamily: themes.mont,
      color: themes.info,
      fontWeight: 500,
      [ theme.breakpoints.down("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.only("md") ]: {
        paddingRight: '5%',
      },
      [ theme.breakpoints.up("md") ]: {
        paddingRight: '18%',
      },

    },
  },
  whyweRheading: {
    marginLeft: '20px',
  },
  whyweRIcon1: {
    fontSize: '1.7rem',
    color: '#fff',
    background: 'linear-gradient( #6254e7 , #9289f1 )',
    borderRadius: '50%',
    fontWeight: 700,
    padding: '5px',
  },
 whyweRIcon2: {
   fontSize: '1.7rem',
   color: '#fff',
   background: 'linear-gradient( #f56616, #f0ac0e )',
   borderRadius: '50%',
   fontWeight: 700,
   padding: '5px',
  },
 whyweRIcon3: {
   fontSize: '1.7rem',
   color: '#fff',
   background: 'linear-gradient( #34c478 , #88fdb9 )',
   borderRadius: '50%',
   fontWeight: 700,
   padding: '5px',
  },


  
}));
export default useStyles;



