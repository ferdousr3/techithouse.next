import Head from "next/head";
import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Navbar from "./Navbar/Navbar";
import useStyles from "../theme/styles";


const Layout = ({ title, description, children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ' "Montserrat", "sans-serif"',
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '0px 0px',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '0px 0px',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f2f2f2',
      },
      secondary: {
        main: '#0AC0AB',
      },
      error: {
        main: '#030C26',
      },
      info: {
        main: '#696687',
      },
    },
  });



  const classes = useStyles();
  return (
    <>
      {/* SEO */}
      <Head>
        <title>{title ? `${title} - TechIthouse` : 'TechIthouse'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        < Navbar />
        <div className={classes.toolbar}></div>
        <div className={classes.main} >
          {children}
        </div>
        <footer className={classes.footer} >
          <h2>footer techithouse</h2>
        </footer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
