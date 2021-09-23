import { makeStyles, withStyles } from '@material-ui/core/styles';
import themes from "./themes";




const useStyles = makeStyles((theme) => ({
  contactRoot: {
    width: '100',
    textAlign: 'center',
    margin: '50px auto'
  },
  contactbTitle: {
    fontFamily: themes.rubik,
    color: themes.heading,
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '.2rem',
    textAlign: 'center',
  },
  contactbsubT: {
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
    [ theme.breakpoints.down("md") ]: {
      padding: '0% 7%',
    },
  },
  contactbD: {
    fontSize: '1.1rem',
    fontFamily: themes.rubik,
    color: themes.info,
    fontWeight: 400,
    textAlign: 'center',
    [ theme.breakpoints.up("md") ]: {
      padding: '0% 25%',
    },
    [ theme.breakpoints.down("md") ]: {
      padding: '0% 7%',
    },
  },
  // contact last part
  contactMain: {
    padding: '5rem 0rem 3.5rem 0rem',
    backgroundColor: 'rgba(255,255,255,1)', 
  },
  contactpaddingdMain: {
    [ theme.breakpoints.up("md") ]: {
      padding: '0rem 2rem 0rem 2rem',
    },
  },
  contactMainAling:{
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactDetailsTitle: {
    fontSize: '1rem',
    fontFamily: themes.rubik,
    color: themes.heading,
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  contactDetailsSubTitle: {
    fontSize: '1.5rem',
    fontFamily: themes.mont,
    color: themes.error,
    fontWeight: 700,
    lineHeight: '7px',
  },
  contactDetailsP: {
    fontSize: '1.1rem',
    fontFamily: themes.rubik,
    color: themes.info,
    fontWeight: 400,
    paddingTop: '15px',
    paddingBottom: '25px',
    [ theme.breakpoints.up("md") ]: {
      paddingRight: '30%',
    },
    [ theme.breakpoints.down("md") ]: {
      paddingRight: '10%',
    },
  },
  contactDetailsPhone: {
    fontSize: '1.1rem',
    fontFamily: themes.source,
    color: themes.error,
    fontWeight: 600,
    lineHeight: '5px',
    margin: '0px 0px',
  },
  contactDetailsPD: {
    fontSize: '.9rem',
    fontFamily: themes.rubik,
    color: '#5747e4',
    fontWeight: 400,
    // lineHeight:'10px',
    marginTop: '17px',
    fontWeight: 500,
  },
  contactEmail: {
    padding: '20px 0px',
  },
  contatFromMain: {
    backgroundImage: 'url("/contact/contact.png")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  fromMain: {
    padding: '50px 20px 40px 50px',
  },
  fromDetailsSubTitle: {
    fontSize: '1.5rem',
    fontFamily: themes.mont,
    color: themes.error,
    fontWeight: 700,
    lineHeight: '7px',
  },
  fromDetailsP: {
    fontSize: '1.1rem',
    fontFamily: themes.rubik,
    color: themes.info,
    fontWeight: 400,
    paddingTop: '10px',
    paddingBottom: '25px',
  },
  fromMainFild: {
    margin: '2px 0px 15px 0px',
  },
  fromFild: {
    color: themes.error,
  },
  contactFromBtn: {
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
      color:'#fff',
    },
  },
}));
export default useStyles;



