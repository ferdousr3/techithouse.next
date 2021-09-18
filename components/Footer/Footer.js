
import { Grid, Container } from "@material-ui/core";
import NextLink from "next/link";
import allData from "../../data/allData";
import useStyles from "./FooterStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footerBackground}>
        <Grid container className={classes.footer}>
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={2}>
                {/* first part */}
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <div className={classes.footeFirstpart}>
                    <div className="div">
                      <h1 className={classes.footefirstpTitle} >
                        ThechIthouse
                      </h1>
                      <div className="p">
                        <p className={classes.footefirstpDetails} >
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fugit rerum voluptatibus cum temporibus voluptas quae, reprehenderit expedita reiciendis qui!
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
                {/* second part */}
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <div className={classes.footeSecondpart}>
                    <h1 className={classes.footerTitle} >Quick Links</h1>
                    <ul>
                      <li>
                        <NextLink href="/" >
                          <a className={classes.footerLink} >
                            Home
                          </a>
                        </NextLink>
                      </li>
                      <li>
                        <NextLink href="/services" >
                          <a className={classes.footerLink} >
                            Main Services
                          </a>
                        </NextLink>
                      </li>
                      <li>
                        <NextLink href="/agency" >
                          <a className={classes.footerLink} >
                            Agency
                          </a>
                        </NextLink>
                      </li>
                      <li>
                        <NextLink href="/" >
                          <a className={classes.footerLink} >
                            About Us
                          </a>
                        </NextLink>
                      </li>
                      <li>
                        <NextLink href="/" >
                          <a className={classes.footerLink} >
                            Contact
                          </a>
                        </NextLink>
                      </li>
                    </ul>
                  </div>
                </Grid>
                {/* third part */}
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <div className={classes.footeSecondpart}>
                    <h1 className={classes.footerTitle} >Services</h1>
                    <ul>
                      <li>
                        <NextLink href="/" >
                          <a className={classes.footerLink} >
                            Web Design
                          </a>
                        </NextLink>
                      </li>
                      <li>
                        <NextLink href="/services" >
                          <a className={classes.footerLink} >
                            Web Development
                          </a>
                        </NextLink>
                      </li>
                      <li>
                        <NextLink href="/agency" >
                          <a className={classes.footerLink} >
                            Digital Marketing
                          </a>
                        </NextLink>
                      </li>
                      <li>
                        <NextLink href="/" >
                          <a className={classes.footerLink} >
                            Cloud Computing
                          </a>
                        </NextLink>
                      </li>
                    </ul>
                  </div>
                </Grid>
                {/* fouth part */}
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <div className={classes.footeSecondpart}>
                    <h1 className={classes.footerTitle} >Get In Touch</h1>
                    <ul>
                      <li>
                        <NextLink href="/" >
                          <a className={classes.footerContactlLink} >
                            Dhaka, Bangladesh.
                          </a>
                        </NextLink>
                      </li>
                      <li>
                        <NextLink href="/services" >
                          <a className={classes.footerContactlLink} >
                            info@techithouse.com
                          </a>
                        </NextLink>
                      </li>
                      <li className={classes.footerSociallLinks}>
                        {allData.socials.map(item => (
                          <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className={classes.footerSocialLink} >
                            <item.icon />
                          </a>
                        ))}
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
              <div className={classes.footerCopyrightDiv}>
                <p className={classes.footerCopyright} >
                  &copy; {new Date().getFullYear()} - <a href="">TectIThouse</a>. All Rights Reserved.
                </p>
              </div>
            </Container>
            {/* <div className={classes.footerCopyrightDiv}>
              <p className={classes.footerCopyright} >
                &copy; {new Date().getFullYear()} - <a href="">TectIThouse</a>. All Rights Reserved.
              </p>
            </div> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
