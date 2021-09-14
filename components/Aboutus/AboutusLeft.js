import themes from "../../theme/themes";
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  aboutusEliment: {
    marginTop: '20px',
    marginBottom: '10px',
  },
  aboutusElimentTitle: {
    color: '#EF234E',
    fontSize: '3.8rem',
    margin: '0px 0px ',
    fontFamily: themes.source,
    fontWeight: 700,
    
  },
  aboutusElimentDetails: {
    fontFamily: themes.rubik,
    color: '#030C26',
    fontSize: '1rem',
    fontWeight: 500,
    margin: '0px 0px ',
  },

}));


const AboutusLeft = ({ title, details }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.aboutusEliment}>
        <h1 className={classes.aboutusElimentTitle} >
          { title }
        </h1>
        <p className={classes.aboutusElimentDetails} >
          {details}
        </p>
      </div>
    </>
  );
};

export default AboutusLeft;
