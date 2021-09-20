import Layout from "../components/Layout";
import { Grid, Container } from "@material-ui/core";
import PageTitle from "../components/PageTitle/PageTitle";
import Image from "next/image";
import NextLink from "next/link";
import useStyles from "../theme/aboutus";
import allData from "../data/allData";
import dev from "../public/about/dev.png";
import design from "../public/about/design.png";
import marketing from "../public/about/marketing.png";



const agency = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    <>
      <Layout
        // seo
        title="About Us - techithouse"
      >
        {/* page title */}
        <PageTitle
          pagename="About Us"
          title="Home"
          subtitle="About Us"
        />
        {/* main part */}
        <Grid container className={classes.aboutusMain} >
          <Grid item xs={12}>
            <Container>
              <div className={classes.aboutUsRoot}>
                <h1 className={classes.aboutUsTitle} >
                  TechIthouse
                </h1>
                <h2 className={classes.aboutUssubT} >
                  The Digital Agency
                </h2>
                <p className={classes.aboutUsD} >
                  Trusted by organizations with 95%+ customer satisfaction
                </p>
              </div>
              <Grid container spacing={4} >
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                  <div className={classes.MainaboutDesign1}>
                    <div className="image">
                      <Image
                        src={dev}
                        alt="web"
                        width={150}
                        height={120}
                      />
                    </div>
                    <h1>
                      Web, UI/UX design & Development
                    </h1>
                    <p>
                      Delectus recteque has ne, no pro tation commodo. Ea libris utamur vix, in sumo augue soluta vis.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                  <div className={classes.MainaboutDesign2}  >
                    <div className="image">
                      <Image
                        src={design}
                        alt="web"
                        width={150}
                        height={120}
                      />
                    </div>
                    <h1>
                      App deploy And Cloud Computing
                    </h1>
                    <p>
                      Delectus recteque has ne, no pro tation commodo. Ea libris utamur vix, in sumo augue soluta vis.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                  <div className={classes.MainaboutDesign3}  >
                    <div className="image">
                      <Image
                        src={marketing}
                        alt="web"
                        width={180}
                        height={120}
                      />
                    </div>
                    <h1>
                      Digital Marketing & B2B Lead sales
                    </h1>
                    <p>
                      Delectus recteque has ne, no pro tation commodo. Ea libris utamur vix, in sumo augue soluta vis.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* about us middle part */}
        <Grid container className={classes.aboutusMiddle} >
          <Grid item xs={12}>
            <Container>
              <Grid container >
                {/* left */}
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                <div className="div">

                </div>
              </Grid>
               {/* Right */}
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
              <Image
              src="/about/aboutnew.jpg"
               alt="about new"
               layout="responsive"
               width={400}
               height={400}
              />
              </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* about us last part */}
        <Grid container className={classes.homeAccordion} >
          <Grid item xs={12}>
            <Container>
              gggg
            </Container>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default agency;