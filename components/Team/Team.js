import { Grid } from "@material-ui/core";
import allData from "../../data/allData";
import themes from "../../theme/themes";
import Image from "next/image";
// import Card from '@material-ui/core/Card';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  teamRoot: {
    width: '100',
    textAlign: 'center',
  },
  teamTitle: {
    fontFamily: themes.rubik,
    color: themes.heading,
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
    padding: '0px 0px 15px 0px',
    // border: '1px solid rgba(232,232,232,0.6) ',
    // boxShadow: '37px 42px 65px - 20px rgb(18 69 63 / 5 %)',
    minWidth: '17rem',
    [ theme.breakpoints.up("md") ]: {
      margin: '5% 5%',

    },
    '&:hover': {
      cursor: 'pointer',
      "& $teamName": {
        color: themes.danger,
        transition: 'all .6s',
      }
    }
  },
  teamImageMain: {
    textAlign: 'center',
  },
  teamImage: {
    borderRadius: '10px',
    textAlign: 'center',
  },
  teamSocial: {
    // border: '1px solid red',
    fontSize: '1rem',
    color: themes.error,
    fontFamily: themes.source,
    display: 'flex',
    justifyContent: ' center',
    justifyItems: 'center',
    width: '50%',
    margin: '0px auto',
    paddingTop: '5px',


  },
  teamSocialLink: {
    display: 'block',
    fontSize: '1rem',
    color: themes.error,
    fontFamily: themes.source,
    margin: '0px 5px',
    textAlign: 'center',
    borderRadius: '50%',
    '&:hover': {
      cursor: 'pointer',
      color: themes.warning,
    }

  },
  teamName: {
    display: 'block',
    fontSize: '1.5rem',
    margin: '0px 0px',
    color: themes.error,
    fontFamily: themes.source,
    textAlign: 'center',
    padding: '5px 0px',
    fontWeight: 700,
  },
  teamPosition: {
    display: 'block',
    fontSize: '1rem',
    margin: '0px 0px',
    color: themes.info,
    fontFamily: themes.rubik,
    textAlign: 'center',

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
          <Grid container spacing={3} className={classes.teamCenter}  >
            {allData.teams.map(item => (
              <Grid key={item.name} item xs={12} sm={6} md={4} lg={3} xl={3} className={classes.teamCenter}  >
                <div className={classes.teamMain}>
                  <div className={classes.teamImageMain}>
                    <Image
                      src={item.image} alt={item.name} width={300} height={300}
                      className={classes.teamImage}
                    />
                  </div>
                  <div className="name">
                    <h1 className={classes.teamName} > {item.name} </h1>
                  </div>
                  <div className="position">
                    <p className={classes.teamPosition} >{item.position}</p>
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
