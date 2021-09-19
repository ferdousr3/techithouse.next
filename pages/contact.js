import { Grid, Container } from "@material-ui/core";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle/PageTitle";
import TextField from '@material-ui/core/TextField';
import useStyles from "../theme/contact";
import { withStyles } from '@material-ui/core/styles';
import themes from "../theme/themes";


const CssTextField = withStyles({
  root: {
    width: '100%',
    '& label.Mui-focused': {
      color: '#696687',
      fontFamily: themes.rubik,
      fontSize: '1.2rem',
      fontWeight: 400,
    },
    '& .MuiInputBase-root': {
      color: '#696687',
      fontFamily: themes.rubik,
      fontSize: '1rem',
      fontWeight: 400,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(98,84,231, 0.3)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(98,84,231, 0.3)',
      },
    },
  },
})(TextField);




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
              <div className={classes.contactRoot}>
                <h1 className={classes.contactbTitle} >
                  business
                </h1>
                <h2 className={classes.contactbsubT} >
                  Find the Perfect Solution for Your Business
                </h2>
                <p className={classes.contactbD} >
                  We get to know every client we work with to create a custom design according to their requirement. That is why we are different, and that&apos;s how we have gained success. Our services include.
                </p>
              </div>

            </Container>
          </Grid>
        </Grid>
        {/* Cantact main*/}
        <Grid container className={classes.contactMain} >
          <Grid item xs={12}>
            <Container>
              <Grid container >
                {/* contact details */}
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className={classes.contactMainAling} >
                  <div className="div">
                    <div  >
                      <h1 className={classes.contactDetailsTitle} >
                        get in touch
                      </h1>
                      <h2 className={classes.contactDetailsSubTitle} >
                        Contact Us
                      </h2>
                      <p className={classes.contactDetailsP} >
                        We have worlds-class, flexible support via live chat, email and hone. I guarantee that you’ll be able to have any issue resolved within 24 hours.
                      </p>
                    </div>
                    <div className="phone">
                      <h1 className={classes.contactDetailsPhone} >phone:</h1>
                      <p className={classes.contactDetailsPD} >+880 01710 014145</p>
                    </div>
                    <div className={classes.contactEmail}>
                      <h1 className={classes.contactDetailsPhone} >Send Mail:</h1>
                      <p className={classes.contactDetailsPD} >contact@techithouse.com</p>
                    </div>
                    <div className="Addres">
                      <h1 className={classes.contactDetailsPhone} >Address:</h1>
                      <p className={classes.contactDetailsPD} >Dhaka, Bangladesh.</p>
                    </div>
                  </div>
                </Grid>
                {/* contact from */}
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}
                  className={classes.contatFromMain}
                >
                  <div className={classes.fromMain}>
                    <h1 className={classes.fromDetailsSubTitle} >
                      Drop Us a Line
                    </h1>
                    <p className={classes.fromDetailsP} >
                      Programs provi patient peace mind when option.
                    </p>

                    <Grid container spacing={2} >
                      <Grid className={classes.fromMainFild}
                        item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <CssTextField
                          id="standard-textarea"
                          label="Name"
                          placeholder="Your Name"
                          multiline
                          className={classes.fromFild}
                        />
                      </Grid>
                      <Grid className={classes.fromMainFild}
                        item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <CssTextField
                          id="standard-textarea"
                          label="Email"
                          placeholder="Your Email"
                          multiline
                        />
                      </Grid>
                      <Grid className={classes.fromMainFild}
                        item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <CssTextField
                          id="standard-textarea"
                          label="Number"
                          placeholder="Your Phone Number"
                          multiline
                        />
                      </Grid>
                      <Grid className={classes.fromMainFild}
                        item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <CssTextField
                          id="standard-textarea"
                          label="Addres"
                          placeholder="Your addres"
                          multiline
                        />
                      </Grid>
                      <Grid className={classes.fromMainFild}
                        item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <CssTextField
                          id="standard-textarea"
                          label="Message"
                          placeholder="Write Your Message"
                          rows={3}
                          multiline
                        />
                      </Grid>
                      <button className={classes.contactFromBtn} >
                        Send Message
                      </button>
                    </Grid>
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

export default contact;