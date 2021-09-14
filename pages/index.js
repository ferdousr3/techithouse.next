import { Container, Grid } from "@material-ui/core";
import NextLink from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import allData from "../data/allData";
import useStyles from "../theme/styles";
import ServicesRight from "../components/Services/ServicesRight";
import AboutusLeft from "../components/Aboutus/AboutusLeft";
import Workingprocess from "../components/Workingprocess/Workingprocess";



const home = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    <>
      <Layout
        title="Home - techithouse"
      >
        {/* hero section */}
        <Grid container className={classes.hero}>
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={2}  >
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.heroFirstPart} >
                  <div className={classes.heroMain}>
                    <h1 className={classes.heroTitle} >
                      One-stop service <br /> for Design and Development
                    </h1>
                    <h2 className={classes.heroSubTitle} >
                      {allData.heroSubTitle}
                    </h2>
                    <div className={classes.heroBtnPadding}>
                      <div className="div">
                        <NextLink href="/" >
                          <a className={classes.heroBtn} >
                            contact today
                          </a>
                        </NextLink>
                      </div>
                      <div className={classes.heroBtnMargintop}>
                        <NextLink href="/" >
                          <a className={classes.heroBtnTwo} >
                            our services
                          </a>
                        </NextLink>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className={classes.heroRight} >
                  <div className={classes.heroImage}>
                    <Image src="/hero/heroGirl.png"
                      alt="hero" layout="responsive"
                      width={610} height={590} />
                  </div>
                  <div className={classes.heroIcon}>
                    <Image src="/hero/wifi.gif"
                      alt="hero" width={70} height={65} />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* services  */}
        <Grid container className={classes.services} >
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={2}  >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                  <Grid container>
                    {allData.services.map(item => (
                      <Grid key={item.id} item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <div className={classes.servicesLeft}>
                          <Image className={classes.servicesLeftImage} src={item.image} alt={item.title} width={80} height={80} />
                          <h1 className={classes.servicesLeftTitle} >
                            {item.title}
                          </h1>
                          <p className={classes.servicesLeftDetails} >
                            {item.details}
                          </p>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.servicesRightGrid} >
                  <div className={classes.servicesRight}>
                    <h1 className={classes.servicesRt}>
                      {allData.serviceRt}
                    </h1>
                    <h2 className={classes.servicesRst}>
                      {allData.serviceRst}
                    </h2>
                    <p className={classes.servicesRpt}>
                      {allData.serviceRpt}
                    </p>
                    <div className="div">
                      <Grid container>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                          <ServicesRight
                            title="Understand Your Audience"
                          />
                          <ServicesRight
                            title="Understand Your Audience"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                          <ServicesRight
                            title="Understand Your Audience"
                          />
                          <ServicesRight
                            title="Understand Your Audience"
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <div className={classes.serviceBtnMargin}>
                      <NextLink href="/" >
                        <a className={classes.serviceRBtn} >
                          contact today
                        </a>
                      </NextLink>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* About us  */}
        <Grid container className={classes.aboutus} >
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={2}  >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.aboutusLeftGrid} >
                  <div className={classes.aboutusLeft}>
                    <div className={classes.aboutusLeftBg}>
                      <h1 className={classes.aboutusRt}>
                        {allData.aboutusRt}
                      </h1>
                      <h2 className={classes.aboutusRst}>
                        {allData.aboutusRst}
                      </h2>
                      <p className={classes.aboutusRpt}>
                        {allData.aboutusRpt}
                      </p>
                    </div>
                    <div className="div">
                      <Grid container>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>

                          <AboutusLeft
                            title="200"
                            details="Happy Client"
                          />
                          <AboutusLeft
                            title="20"
                            details="Awards"
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>

                          <AboutusLeft
                            title="3.5+"
                            details="Experience"
                          />
                          <AboutusLeft
                            title="100"
                            details="Project"
                          />
                        </Grid>
                      </Grid>
                    </div>
                    {/* <div className={classes.aboutusBtnMargin}>
                      <NextLink href="/services" >
                        <a className={classes.aboutusRBtn} >
                          Reade More
                        </a>
                      </NextLink>
                    </div> */}
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.aboutusRight} >
                  <div className={classes.aboutusRightImag} >
                    <Image src="/aboutus/about1.svg" alt="about us" layout="responsive" width={674} height={631} />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* Working process */}
        <Grid container className={classes.Workingprocess} >
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={2}  >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.WorkingprocessGrid} >
                  <div className={classes.WorkingprocessMain}>
                    <Workingprocess />
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

export default home;
