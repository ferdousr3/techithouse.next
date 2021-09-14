import { makeStyles } from "@material-ui/core";

import themes from "../../theme/themes";




const useStyles = makeStyles((theme) => ({

  footerBackground: {
    background: themes.error,
    paddingTop: '50px',
    
  },
  footer: {
    background: themes.error,
    '& li':{
      listStyle: 'none',
      marginBottom:'5px',
    },
  },
  footefirstpart:{
    textAlign: 'left',
  },
  footefirstpTitle:{
    textAlign: 'center',
    color: '#F0F0F0',
    fontFamily: themes.rubik,
  },
  footefirstpDetails:{
    textAlign: 'left',
    color: '#454D65',
    fontFamily: themes.rubik,
    fontWeight: 500,
    [ theme.breakpoints.up("sm") ]: {
      padding: '0px 20px 0px 55px',
    },
  },
  footeSecondpart:{
    textAlign: 'left',
  },
  footerTitle: {
    color: '#F0F0F0',
    fontFamily: themes.source,
    paddingLeft: '35px',
  },
  footerLink: {
    color: '#454D65',
    fontFamily: themes.rubik,
    fontWeight: 500,
    marginBottom: '8px',
    '&:hover':{
      color: '#9FA5B7',
      paddingLeft: '5px',
      transition: 'all 0.6s ease',
    },
  },
  footerContactlLink: {
    color: '#454D65',
    fontFamily: themes.rubik,
    fontWeight: 500,
    margin: '8px 0px',
    '&:hover':{
      color: '#9FA5B7',
    },
  },
  footerSociallLinks: {
    display: 'flex',
    paddingTop: '6px',
    
  },
  footerSocialLink: {
    display: 'block',
    color: '#454D65',
    fontFamily: themes.rubik,
    fontSize:'1rem',
    fontWeight: 500,
    padding: '4px 0px',
    paddingRight: '20px',
    '&:hover':{
      color: '#9FA5B7',
    },
  },
  footerCopyrightDiv:{
    paddingTop:'30px',
    
  },
  footerCopyright:{
    paddingTop: '25px',
    paddingBottom: '5px',
    borderTop: '1px solid #131C34',
    color: '#454D65',
    fontFamily: themes.rubik,
    fontWeight: 400,
  },
}));
export default useStyles;