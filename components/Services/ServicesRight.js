import themes from "../../theme/themes";
import { makeStyles } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  serviceEliment: {
    display: 'flex',
  },
  serviceElimentIcon: {
    color: '#5747e4',
    // background: '#5747e4',
    marginTop: '15px',
    marginRight: '6px',
    borderRadius: '80%',
  },
  serviceElimentDetails:{
    fontFamily: themes.rubik,
    color: '#030C26',
    fontSize: '1rem',
    fontWeight: 600,
    
  },

}));


const ServicesRight = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.serviceEliment}>
        <span>
          <CheckCircleIcon className={classes.serviceElimentIcon} />
        </span>
        <p className={classes.serviceElimentDetails} >
          {title}
        </p>
      </div>
    </>
  );
};

export default ServicesRight;
