import Layout from "../components/Layout";
import { Grid, Container } from "@material-ui/core";
import Image from "next/image";
import useStyles from "../theme/whywe";
import PageTitle from "../components/PageTitle/PageTitle";



const whywe = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <>
      <Layout
        title="Why We - techithouse"
      >
        {/* page title */}
        <PageTitle
          pagename=" Why We?"
          title="Home"
          subtitle="Why We?"
        />
        {/* why we strart*/}
        <Grid container className={classes.whyWeStart} >
          <Grid item xs={12}>
            <Container>
              <Grid container className={classes.whyWeStartMain} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whyWeLMain} >
                  <div className="ff">
                    <h1>
                      How does TechitHouse identify my business needs?
                    </h1>
                    <p>
                      We are dedicated to providing you with good marketing results for your unique business needs. That’s why we learn about your business needs before planning a tailored-made digital marketing strategy.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whyWeRimage}  >
                  <div className={classes.whyWeRimag}>
                    <Image 
                    src="/whywe/whywe1.png"
                    alt="why"
                    width={400}
                    height={420}
                    />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>


      </Layout>
    </>
  );
};

export default whywe;