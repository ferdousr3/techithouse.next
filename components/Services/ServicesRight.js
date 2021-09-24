import themes from "../../theme/themes";
import { makeStyles } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  serviceEliment: {
    display: 'flex',
  },
  serviceElimentIcon: {
    // color: '#5747e4',
    // background: '#5747e4',
    // color: '#fff',
    // background: 'linear-gradient( #6254e7 , #9289f1 )',
    marginTop: '15px',
    marginRight: '6px',
    // borderRadius: '80%',
    fontSize: '1.3rem',
    color: '#fff',
    background: 'linear-gradient( #6254e7 , #9289f1 )',
    borderRadius: '50%',
    fontWeight: 700,
    padding: '4px',
  },
  serviceElimentDetails: {
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

        <CheckIcon className={classes.serviceElimentIcon} />

        <p className={classes.serviceElimentDetails} >
          {title}
        </p>
      </div>
    </>
  );
};

export default ServicesRight;
