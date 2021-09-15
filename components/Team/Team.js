import { Grid } from "@material-ui/core";
import allData from "../../data/allData";
import themes from "../../theme/themes";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  teamRoot: {
    width: '100',
    textAlign: 'center',
  },
  teamTitle: {
    fontFamily: themes.rubik,
    color: themes.info,
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '.2rem',
  },
  teamsubT: {
    fontFamily: themes.source,
    color: themes.error,
    lineHeight: '2.9rem',
    fontSize: '2.7rem',
    fontWeight: 700,
    paddingTop: '5px',
    paddingBottom: '5px',
    margin: '10px 0px',
    // [ theme.breakpoints.up("sm") ]: {
    //   paddingRight: '30px',
    // },
  },
  teamD: {
    fontFamily: themes.rubik,
    color: themes.info,
    fontSize: '1rem',
    fontWeight: 400,
    [ theme.breakpoints.up("sm") ]: {
      padding: '0% 25%',
    },
  },
  teamCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid red',
  },
  teamMarginTop: {
    marginTop: '15px',
  },
  teamMain: {
    marginTop: '15px',
    [ theme.breakpoints.up("md") ]: {
      margin: '5% 5%',
    },
  },
  teamImage: {
    borderRadius: '10px',
  },
  teamSocial:{
    fontSize: '1rem',
    margin: '0px 0px',
    color: themes.error,
    fontFamily: themes.source,
    display: 'flex',
    alignItems: 'center',
  },
  teamSocialLink:{
    display: 'block',
    fontSize: '1rem',
    margin: '0px 0px',
    color: themes.error,
    fontFamily: themes.source,
    alignItems: 'center',
  },
  teamName:{
    display: 'block',
    fontSize: '1rem',
    margin: '0px 0px',
    color: themes.error,
    fontFamily: themes.source,
    textAlign: 'center'
  },
  teamPosition:{
    display: 'block',
    fontSize: '1rem',
    margin: '0px 0px',
    color: themes.info,
    fontFamily: themes.rubik,
    textAlign: 'center'
  },
}));



const Team = () => {

  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.teamCenter}  >
        <Grid item xs={12}>
          <div className={classes.teamRoot}>
            <h1 className={classes.teamTitle} >
              {allData.teamTitle}
            </h1 >
            <h2 className={classes.teamsubT} >
              {allData.teamStitle}
            </h2>
            <p className={classes.teamD} >
              {allData.teamDetails}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={11} xl={11} className={classes.teamMarginTop} >
          <Grid container spacing={2} className={classes.teamCenter}  >
            {allData.teams.map(item => (
              <Grid key={item.name} item xs={12} sm={4} md={4} lg={3} xl={3} className={classes.teamCenter}  >
                <div className={classes.teamMain}>
                  <div className="image">
                    <Image
                      src={item.image} alt={item.name} width={540} height={600}
                      className={classes.teamImage}
                    />
                  </div>
                  <div className={classes.teamSocial}>
                    {item.links.map((link, index) => {
                      return (
                        <a
                          key={index}
                          href={link.link}
                          target="_blank"
                          rel="noreferrer"
                          className={classes.teamSocialLink}
                        >
                          {link.icon}
                        </a>
                      );
                    })}
                  </div>
                  <div className="name">
                    <h1 className={classes.teamName} > {item.name} </h1>
                  </div>
                  <div className="position">
                    <p className={classes.teamPosition} >{item.position}</p>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Team;
