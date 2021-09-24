import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import { Grid, Container } from "@material-ui/core";
import useStyles from "../theme/services";



const services = () => {
  return (
    <>
      <Layout
        // SEO
        title="Services - techithouse"
      >
        {/* page title */}
        <PageTitle
          pagename="Services"
          title="Home"
          subtitle="Services"
        />
        {/* services strart*/}
        <Grid container className={classes.homeAccordion} >
          <Grid item xs={12}>
            <Container>
              <Grid container>
                <Grid item xs={12}>
                  <h1>
                    The future is changing and we are a part of it
                  </h1>
                  <h2>
                    TechitHouse  Provide a pixel perfect Designed and Devloped Website, that is tailor made for startups and businesses. Build your website swiftly and easily.
                  </h2>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>

      </Layout>
    </>
  );
};

export default services;