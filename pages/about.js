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
import { FaMedapps, FaSearchengin, FaMedal } from "react-icons/fa";
import CheckIcon from '@material-ui/icons/Check';




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
              <Grid container spacing={4} className={classes.contactpaddingdMain} >
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
              <Grid container className={classes.aboutmidMain} >
                {/* left */}
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                  <div className="div">
                    <h1 className={classes.aboutmidLTitle} >
                      about us
                    </h1>
                    <h2 className={classes.aboutmidLSubTitle}  >
                      We Are Here For Digital Agency, Make Your Work Easy
                    </h2>
                    <p className={classes.aboutmidLDetails}  >
                      Wе are working with web and graphics design, web development, digital marketing. We fосuѕ оn dеlivеring with professional services аnd building lоng-tеrm relationship with оur сliеntѕ.Our team holds themselvesaccountable for every client&apos;s project. We get to know every client we work with to create a custom design according to their requirement. <br /> <br />
                      That is why we are different, and that&apos;s how we have gained success. Our services include: Website design and development. Apps. Search engine marketing (pay-per-click, retargeting). Search engine optimization. Social media marketing. Content creation. Online lead generation. Online brand development and management. Email marketing
                    </p>
                    <button className={classes.aboutMBtn} >
                      <NextLink href="/" >
                        our services
                      </NextLink>
                    </button>
                  </div>
                </Grid>
                {/* Right */}
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}   >
                  <div className={classes.aboutmidRImage} >
                    <Image
                      src="/about/aboutnew.jpg"
                      alt="about new"

                      width={696}
                      height={650}

                    />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* what we do */}
        <Grid container className={classes.whatWeDo} >
          <Grid item xs={12}>
            <Container>
              <div className="div">
                <h1 className={classes.aboutUsTitle} >
                  what we do
                </h1>
                <h2 className={classes.aboutUssubT} >
                  Fresh Ideas for Every Business
                </h2>
              </div>
              <Grid container spacing={3} className={classes.whatWeDoMain} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="div">
                    <Image
                      src="/about/about_us.png"
                      alt="about us"
                      width={496}
                      height={456}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whatidoLMain} >
                  <div className="div">
                    <div className={classes.whatidoLMain1}>
                      <FaMedapps className={classes.whatidoLIcon1} />
                      <div className={classes.whatidoLheading}>
                        <h1  >
                          Creative Approach
                        </h1>
                        <p >
                          Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam.
                        </p>
                      </div>
                    </div>
                    <div className={classes.whatidoLMain2}>
                      <FaMedal className={classes.whatidoLIcon2} />
                      <div className={classes.whatidoLheading}>
                        <h1  >
                          Guaranteed Success
                        </h1>
                        <p >
                          Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam.
                        </p>
                      </div>
                    </div>
                    <div className={classes.whatidoLMain3}>
                      <FaSearchengin className={classes.whatidoLIcon3} />
                      <div className={classes.whatidoLheading}>
                        <h1>
                          SEO Optimization
                        </h1>
                        <p >
                          Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam.
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* our vision mision and other */}
        {/* <Grid container className={classes.vission} >
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={2} className={classes.vissionMain} >
                {allData.aboutvision.map(item => (
                  <Grid key={item.id} item xs={12} sm={12} md={6} lg={6} xl={6}  >
                    <div className={classes.vissionMainHeadin}>
                      <div className="img">
                        <item.icon />
                      </div>
                      <div className={classes.vissionMainDetails}>
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
        </Grid> */}
        {/* Our mission & vission */}
        <Grid container className={classes.missionVission} >
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={3} className={classes.missionVissionMain} >

                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whyweRight} >
                  <div className="div">
                    <div className="div">
                      <h1 className={classes.whyweTitle} >
                        Our Mission, Vision & Golas
                      </h1>
                      <h2 className={classes.missionVissionsubT} >
                        Keep Going With Your passion.
                      </h2>
                    </div>
                    <div className={classes.whyweRMain}>
                      <CheckIcon className={classes.whyweRIcon1} />
                      <div className={classes.whyweRheading}>
                        <h1  >
                          Vision
                        </h1>
                        <p >
                          Our Vission Is To Provide Our Clients With The Utmost Satisfaction And Create A Better Online Experience For Many People.
                        </p>
                      </div>
                    </div>
                    <div className={classes.whyweRMain}>
                      <CheckIcon className={classes.whyweRIcon2} />
                      <div className={classes.whyweRheading}>
                        <h1  >
                          Mission
                        </h1>
                        <p >
                          Our Mission Is To Reach The Goal Of Our Clients And Provide Services That Are Suitable For Their Needs
                        </p>
                      </div>
                    </div>
                    <div className={classes.whyweRMain}>
                      <CheckIcon className={classes.whyweRIcon3} />
                      <div className={classes.whyweRheading}>
                        <h1>
                          Goals
                        </h1>
                        <p >
                          Give A Huge Boost To Your Entire Blogging Experience With Features Specially Designed For Increased User Experience.
                        </p>
                      </div>
                    </div>
                    {/* <button className={classes.aboutMBtn} >
                      <NextLink href="/whywe" >
                        Discover More
                      </NextLink>
                    </button> */}
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.missionVisionRight} >
                  <div className="div">
                    <Image
                      src="/about/aboutnew4.jpg"
                      alt="about us"
                      width={663}
                      height={512}
                    />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* WHY CHOOSE US */}
        <Grid container className={classes.whywe} >
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={3} className={classes.whyweMain} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whyweLeft} >
                  <div className="div">
                    <Image
                      src="/about/about_us1.png"
                      alt="about us"
                      width={496}
                      height={456}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whyweRight} >
                  <div className="div">
                    <div className="div">
                      <h1 className={classes.whyweTitle} >
                        WHY CHOOSE US
                      </h1>
                      <h2 className={classes.whywesubT} >
                        Save Time & Effort
                        With the Techithouse
                      </h2>
                    </div>
                    <div className={classes.whyweRMain}>
                      <CheckIcon className={classes.whyweRIcon1} />
                      <div className={classes.whyweRheading}>
                        <h1  >
                          First Working Process
                        </h1>
                        <p >
                          For startups and growing businesses, an online specialist can develop a digital marketing plan to help you grow.
                        </p>
                      </div>
                    </div>
                    <div className={classes.whyweRMain}>
                      <CheckIcon className={classes.whyweRIcon2} />
                      <div className={classes.whyweRheading}>
                        <h1  >
                          Dedicated Team Member
                        </h1>
                        <p >
                          Your digital consultant will also be able to kickstart campaigns and maximise your marketing budget
                        </p>
                      </div>
                    </div>
                    <div className={classes.whyweRMain}>
                      <CheckIcon className={classes.whyweRIcon3} />
                      <div className={classes.whyweRheading}>
                        <h1>
                          24/7 Hours Support
                        </h1>
                        <p >
                          Lorem ipsum dolor sit amet, vix an natum labitur eleif, mel amet laoreet prois menandri.
                        </p>
                      </div>
                    </div>
                    <button className={classes.aboutMBtn} >
                      <NextLink href="/whywe" >
                        Discover More
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
                    Our TechItHouse Team Allways for your help!
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

export default agency;