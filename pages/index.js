import { Container, Grid, Typography } from "@material-ui/core";
import Layout from "../components/Layout";


import useStyles from "../theme/styles";



const home = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    <>
      <Layout
        title="Home - techithouse"
      >
        <Grid container className={classes.hero} >
          <Grid item xs={12} >
            <Container>
              <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <h1 className={classes.heroTitle} >
                    Influencer
                    Marketing for
                    Your Business
                  </h1>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  hhh
                </Grid>
              </Grid>
            </Container>
          </Grid>

        </Grid>

      </Layout>
    </>
  );
};

export default home;
