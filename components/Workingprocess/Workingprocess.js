import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import StepConnector from '@material-ui/core/StepConnector';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import themes from "../../theme/themes";





function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [ classes.active ]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    fontFamily: themes.rubik,
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <BrushOutlinedIcon />,
    3: <DeveloperModeOutlinedIcon />,
    4: <CheckCircleIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [ classes.active ]: active,
        [ classes.completed ]: completed,
      })}
    >
      {icons[ String(props.icon) ]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#fafafa',
    textAlign: 'center',
    paddingBottom: '1.5rem',
  },
  workpt: {
    fontFamily: themes.rubik,
    color: themes.info,
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '.2rem',
  },
  workpst: {
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
  workpd: {
    fontFamily: themes.rubik,
    color: themes.info,
    fontSize: '1rem',
    fontWeight: 400,
    [ theme.breakpoints.up("sm") ]: {
      padding: '0% 25%',
    },
  },
  bgNew: {
    background: '#fafafa',
    width: '100%',
    fontFamily: themes.mont,
    margin: '0px auto',
    fontWeight: 600,
    fontSize: '.9rem',
  },
  button: {
    marginRight: theme.spacing(1),
    background: themes.error,
    color: '#ffffff',
    '&:hover': {
      background: themes.error,
    },
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontFamily: themes.mont,
    color: themes.error,
    fontWeight: 600,
  },
}));

function getSteps() {
  return [ 'Proper Planing', 'Proper Design', 'Start Project', 'Finshed & test' ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Befor Start Project we plan it...';
    case 1:
      return 'Start Our Project By proper Design';
    case 2:
      return 'We start Our Project';
    case 3:
      return 'Finished project, test & Deleviry';
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [ activeStep, setActiveStep ] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <div className="div">
        <h1 className={classes.workpt} >
          work flow
        </h1 >
        <h2 className={classes.workpst} >
          Our Working Process
        </h2>
        <p className={classes.workpd} >
          Best results are an outcome of a disciplined working process. While we customize our plans and their implementation according to your needs, we have fixed steps to approach a new job. These steps have been shown to boost our performance at work to meet your expectations every time.
        </p>
      </div>
      <Stepper className={classes.bgNew} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <Typography className={classes.bgNew} >
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
