import { Grid, Container } from "@material-ui/core";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import useStyles from "../theme/contactStyles";



const contact = () => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();


  return (
    <>
      <Layout
        title="Contact - techithouse"
      >
        {/* page title */}
        <PageTitle
          pagename="Contact Us"
          title="Home"
          subtitle="Contact Us"
        />    
        {/* business */}
        <Grid container >
          <Grid item xs={12}>
            <Container>
              <div className="business">
                <h1 className={classes.contactbTitle} >business</h1>

              </div>
            </Container>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default contact;