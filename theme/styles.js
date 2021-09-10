import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: '80vh',
  
  },
  footer: {
    textAlign: 'center',
  },
  toolbar: theme.mixins.toolbar,
  // home page
  hero:{
    background: '#030C26',
    color: '#fff',
    padding:'100px 20px',
    // margin: '0px auto',
    border: '1px solid red',
  },
  heroTitle: {
    fontSize: '5rem',
  },
}));
export default useStyles;