
import { Grid, Container } from "@material-ui/core";
import useStyles from "./FooterStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className="div">
        <Grid container className={classes.hero}>
          <Grid item xs={12}>
            <Container>

              <Grid container spacing={2}>
                {/* first part */}
                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                  <div className="first">
                    <div className="div">
                      <h1>
                        ThechIthouse
                      </h1>
                      <div className="p">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fugit rerum voluptatibus cum temporibus voluptas quae, reprehenderit expedita reiciendis qui!
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
                {/* second part */}
                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                  
                </Grid>
                {/* third part */}
                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}></Grid>
                {/* fouth part */}
                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}></Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
