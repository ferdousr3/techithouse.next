import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import { Grid, Container } from "@material-ui/core";
import useStyles from "../theme/services";
import allData from "../data/allData";
import Image from "next/image";
import NextLink from "next/link";
import { FaNodeJs, FaMicrosoft, FaBullhorn, FaChartBar } from "react-icons/fa";



const services = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

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
        <Grid container className={classes.servicesMainSection} >
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={0} >
                {allData.servicespage.map(item => (
                  <Grid key={item.id} item xs={12} sm={6} md={4} lg={4} xl={4} >
                    <div className={classes.servicesMainPart}>
                      <div className={classes.servicesMainImg}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={230}
                          height={230}
                          className={classes.servicesMainImage}
                        />
                      </div>
                      <div className={classes.idStyle}>
                        <h5 className={classes.idStyleMain} >
                          .0{item.id}
                        </h5>
                      </div>
                      <div className="div">
                        <h1>
                          {item.title}
                        </h1>
                        <p>
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* web design Services */}
        <Grid container className={classes.webDSection} >
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={3} >
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                  <div>
                    <Image
                      src="/services/service3.png"
                      alt="web design services"
                      width={538}
                      height={475}

                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.webDRMainCenter} >
                  <div className={classes.webDRMain} >
                    <h1 className={classes.webDRTitle} >
                      Web Design
                    </h1>
                    <h2 className={classes.webDRSubTitle} >
                      We Provide
                      Best We Design Services
                    </h2>
                    <p className={classes.webDRDetails} >
                      Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam. Ne nam nonumy putent fuisset, reque fabulas ne.
                    </p>
                    <div className={classes.webDRFetureMain}>
                      <p className={classes.webDRFeture}>
                        <span>&#9679; </span> Pure HTML &  CSS with JS
                      </p>
                      <p className={classes.webDRFeture}>
                        <span>&#9679; </span>  NentJS With Any CSS
                      </p>
                      <p className={classes.webDRFeture}>
                        <span>&#9679; </span>   React With Any CSS
                      </p>
                    </div>
                    <button className={classes.webDMBtn} >
                      <NextLink href="/whywe" >
                        get in touch
                      </NextLink>
                    </button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* web Development Services */}
        <Grid container className={classes.webDSection} >
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={3} >
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.webDRMainCenter} >
                  <div className={classes.webDRMain} >
                    <h1 className={classes.webDRTitle} >
                      Web Development
                    </h1>
                    <h2 className={classes.webDRSubTitle} >
                      We are Exclusive
                      Solution Agency
                    </h2>
                    <p className={classes.webDRDetails} >
                      Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam. Ne nam nonumy putent fuisset, reque fabulas ne.
                    </p>
                    <div >
                      <Grid container className={classes.webDevFetureMain} >
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                          <div className="div">
                            <div className="icon">
                              <FaNodeJs className={classes.webDevIcon} />
                              <h5> NodeJs </h5>
                              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum, eligendi non rem iure. </p>
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                          <div className="div">
                            <div className="icon">
                              <FaMicrosoft className={classes.webDevIcon} />
                              <h5> Asp.Net </h5>
                              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum, eligendi non rem iure. </p>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <button className={classes.webDMBtn} >
                      <NextLink href="/whywe" >
                        get in touch
                      </NextLink>
                    </button>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                  <div>
                    <Image
                      src="/services/service4.png"
                      alt="web design services"
                      width={650}
                      height={510}

                    />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* web Deployment & cloud computingServices */}
        <Grid container className={classes.deployCSection} >
          <Grid item xs={12}>
            <Container>
              <div className={classes.deployCSectionHeading}>
                <h1>
                  Deploy & Cloud Computing
                </h1>
                <h2>
                  How Deploy & Cloud Computing Team Can Help
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quam ea neque dolore eum, vel voluptatem harum architecto libero minima.
                </p>
              </div>
              <Grid container spacing={3} >
                {allData.deploy.map(item => (
                  <Grid key={item.id} item xs={12} sm={6} md={6} lg={6} xl={6}
                    className={classes.deployMain}>
                    <div className={classes.deployMainPart}>
                      <div className="div">
                        <item.icon />
                      </div>
                      <div className="heading">
                        <span>
                          0{item.id}
                        </span>
                        <h1>
                          {item.title}
                        </h1>
                        <p>
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* Digital marketing Services */}
        <Grid container className={classes.webDSection} >
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={3} >
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                  <div>
                    <Image
                      src="/services/service5.png"
                      alt="web design services"
                      width={650}
                      height={600}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.webDRMainCenter} >
                  <div className={classes.webDRMain} >
                    <h1 className={classes.webDRTitle} >
                      Digital Marketing
                    </h1>
                    <h2 className={classes.webDRSubTitle} >
                      Boosts Your Website Traffic!
                    </h2>
                    <p className={classes.webDRDetails} >
                      Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam. Ne nam nonumy putent fuisset, reque fabulas ne.
                    </p>
                    <div >
                      <Grid container className={classes.digitalMFetureMain} >
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                          <div className="div">
                            <div className="icon">
                              <FaBullhorn className={classes.digitalMIcon} />
                              <h5> Media Promotion </h5>
                              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum, eligendi non rem iure. </p>
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                          <div className="div">
                            <div className="icon">
                              <FaChartBar className={classes.digitalMIcon} />
                              <h5> Infographics Content </h5>
                              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum, eligendi non rem iure. </p>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <button className={classes.webDMBtn} >
                      <NextLink href="/whywe" >
                        get in touch
                      </NextLink>
                    </button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* joun us */}
        <Grid container className={classes.joinUs} >
          <Grid item xs={12}>
            <Container>
              <Grid container className={classes.whyWeStartMain} >
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className={classes.a}>
                  <h1>
                    If You have any Question About our Services fill free and contac US!
                  </h1>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.whyWeMRMain} >
                  <div className="div">
                    <button className={classes.joinUsMBtn} >
                      <NextLink href="/contact" >
                        Contact US
                      </NextLink>
                    </button>
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

export default services;