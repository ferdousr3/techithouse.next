import Layout from "../components/Layout";
import { Grid, Container } from "@material-ui/core";
import Image from "next/image";
import useStyles from "../theme/whywe";
import PageTitle from "../components/PageTitle/PageTitle";
import CheckIcon from '@material-ui/icons/Check';
import NextLink from "next/link";
import allData from "../data/allData";



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
        {/* why we middle*/}
        <Grid container className={classes.whyWeMiddle} >
          <Grid item xs={12}>
            <Container>
              <Grid container className={classes.whyWeStartMain} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whyWeMLimage}>
                  <div className={classes.whyWeRimag}>
                    <Image
                      src="/whywe/whywe1.png"
                      alt="why"
                      width={450}
                      height={480}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whyWeMRMain} >
                  <div className={classes.whyweR}>
                    <h1>
                      How do I find the right expert?
                    </h1>
                    <h2>
                      TechitHouse’s unique algorithm matches you with vetted experts that are a perfect fit for what you actually need Marketing experts in your niche.
                    </h2>
                    <div className={classes.whyweMRIconsMain}>
                      <div className={classes.whyweMRIcons}>
                        <CheckIcon className={classes.whyweRMIcon} />
                        <p className={classes.whyweRMIconP}>Stop blindly sifting through lists of recommendations searching
                        </p>
                      </div>
                      <div className={classes.whyweMRIcons}>
                        <CheckIcon className={classes.whyweRMIcon} />
                        <p className={classes.whyweRMIconP}>
                          Stop wasting time listening to questionable sales pitches
                        </p>
                      </div>
                      <div className={classes.whyweMRIcons}>
                        <CheckIcon className={classes.whyweRMIcon} />
                        <p className={classes.whyweRMIconP}>
                          Stop losing money to lazy marketing providers
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        {/* why we last*/}
        <Grid container className={classes.whyWeStart} >
          <Grid item xs={12}>
            <Container>
              <Grid container className={classes.whyWeStartMain} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whyWeLMain} >
                  <div className="ff">
                    <h1>
                      How do I know they are ‘that good’?
                    </h1>
                    <p>
                      We are fierce! Exponent only works with high performing experts, with proven experience and skills who have been vetted by us. We sink our teeth into our experts’ accounts & data to see their track record ourselves, evaluating past results in specific industries and channels. We fight against mediocrity every step of the way we sink our teeth.
                    </p>
                    <div className={classes.whywelaMain}>
                      <div className={classes.whywelaSubMain}>
                        <h5 className={classes.whywelaTitle} >
                          4505
                        </h5>
                        <h6 className={classes.whywelaDetails} >
                          Customers
                        </h6>
                      </div>
                      <div className="div">
                        <h5 className={classes.whywelaTitle} >
                          26%
                        </h5>
                        <h6 className={classes.whywelaDetails} >
                          ROI
                        </h6>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whyWeRimage}  >
                  <div className={classes.whyWeRimag}>
                    <Image
                      src="/whywe/whywe2.png"
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
        {/*Our Core Values*/}
        <Grid container className={classes.whyWeMiddle} >
          <Grid item xs={12}>
            <Container>
              <Grid container className={classes.whyWeStartMain} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.a}>
                  <Grid container spacing={4} >
                    {allData.corevalue.map(item => (
                      <Grid key={item.id} item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <div className={classes.coreValueLMain}>
                          <item.icon />
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
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.whyWeMRMain} >
                  <div className={classes.whyweR}>
                    <h1>
                      Our Core Values
                    </h1>
                    <h2>
                      While big companies have large marketing budgets to access top talents and high- quality technology that delivers results.
                      <br /> <br />
                      From header to footer, build your website using a fully visual interface. Its super easy for beginners to get started and super powerful for pros. If you can imagine it, you can build it. Tatsu offers a power packed.
                    </h2>

                    <div className={classes.whyweMRIcons}>
                      <button className={classes.whyWeMBtn} >
                        <NextLink href="/whywe" >
                          Discover More
                        </NextLink>
                      </button>
                    </div>
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