import { makeStyles , withStyles, } from '@material-ui/core/styles';
import themes from "./themes";




const useStyles = makeStyles ((theme) => ({
  contactRoot: {
    width: '100',
    textAlign: 'center',
    margin:'50px auto'
  },
  contactbTitle: {
    fontFamily: themes.rubik,
    color: themes.info,
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
  contactMain:{
    padding: '5rem 0rem 2.5rem 0rem',
    backgroundColor: 'rgba(255,255,255,1)'
  },
  contactDetailsTitle:{
    fontSize: '1rem',
    fontFamily: themes.rubik,
    color: themes.warning,
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  contactDetailsSubTitle:{
    fontSize: '1.5rem',
    fontFamily: themes.mont,
    color: themes.error,
    fontWeight: 700,
    lineHeight: '7px',
  },
  contactDetailsP:{
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
  contactDetailsPhone:{
    fontSize: '1.1rem',
    fontFamily: themes.source,
    color: themes.error,
    fontWeight: 600,
    lineHeight:'5px',
    margin: '0px 0px',
  },
  contactDetailsPD:{
    fontSize: '.9rem',
    fontFamily: themes.rubik,
    color: '#5747e4',
    fontWeight: 400,
    // lineHeight:'10px',
    marginTop: '17px',
    fontWeight: 500,
  },
  contactEmail:{
    padding: '20px 0px',
  },
  contatFromMain:{
    backgroundImage: 'url("/contact/contact.png")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  fromMain:{
    padding: '50px 10px 40px 50px',
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
  fromMainFild:{
    margin: '2px 0px 15px 0px',
  },
  fromFild:{
    color: themes.error,
  },
  
}));
export default useStyles;



