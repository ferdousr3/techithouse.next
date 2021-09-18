import { makeStyles } from "@material-ui/styles";
import themes from "./themes";


const useStyles = makeStyles ((theme) => ({
  contactbRoot: {
    width: '100',
    textAlign: 'center',
  },
  contactbTitle: {
    fontFamily: themes.rubik,
    color: themes.info,
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '.2rem',
  },
 contactbsubT: {
    fontFamily: themes.source,
    color: themes.error,
    lineHeight: '2.9rem',
    fontSize: '2.7rem',
    fontWeight: 700,
    paddingTop: '5px',
    paddingBottom: '5px',
    margin: '10px 0px',
    // [ theme.breakpoints.up("sm") ]: {
    //   paddingRight: '30px',
    // },
  },
  contactbD: {
    fontFamily: themes.rubik,
    color: themes.info,
    fontSize: '1rem',
    fontWeight: 400,
    // [theme.breakpoints.up("sm") ]: {
    //   padding: '0% 25%',
    // },
  },
}));
export default useStyles;