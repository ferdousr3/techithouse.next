import themes from "../../theme/themes";
import { makeStyles } from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  serviceEliment: {
    display: 'flex',
  },
  serviceElimentIcon: {
    color: '#121331',
    // background: '#08A88A',
    marginTop: '15px',
    marginRight: '6px',
    borderRadius: '80%',
  },
  serviceElimentDetails:{
    fontFamily: themes.source,
    color: themes.error,
    fontWeight: 700,
    fontSize: '1rem',
  },

}));


const ServicesRight = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.serviceEliment}>
        <span>
          <CheckCircleOutlineIcon className={classes.serviceElimentIcon} />
        </span>
        <p className={classes.serviceElimentDetails} >
          {title}
        </p>
      </div>
    </>
  );
};

export default ServicesRight;
