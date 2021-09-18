import { makeStyles, Grid, Container } from "@material-ui/core";
import NextLink from "next/link";
import Image from "next/image";
import themes from "../../theme/themes";




const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url("/pagebg/bg2.jpg")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

  },
  pageTitleMain: {
    textAlign: 'center',
    color: '#ffffff',
    paddingTop: '4rem',
    paddingBottom: '4rem',
  },
  pTitle: {
    fontFamily: themes.rubik,
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: '4px',
    margin: '8px 0px !important'

  },
  pLink: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    fontFamily: themes.mont,
    fontWeight: 500,
  },
  linkA: {
    display: 'block',
    marginTop: '14px',
    marginRight: '7px',
    fontFamily: themes.mont,
    fontWeight: 500,
  },

}));




const PageTitle = ({ pagename, title, subtitle }) => {

  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} >
        <Grid item xs={12}>
          <Container>
            <div className={classes.pageTitleMain}>
              <div className="title">
                <p className={classes.pTitle} >{pagename}</p>
              </div>
              <div className={classes.pLink}>
                <NextLink href="/" >
                  <a className={classes.linkA} >
                    {title}
                  </a>
                </NextLink>
                <span style={{ display: 'block', marginTop: '14px', marginRight: '10px', }} >
                  &rarr;
                </span>
                <p>
                  {subtitle}
                </p>
              </div>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default PageTitle;
