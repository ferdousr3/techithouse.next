
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from "@material-ui/core";
import themes from "../../theme/themes";
import Image from "next/image";
import allData from '../../data/allData';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  accordionMainTitle: {
    marginBottom: '20px',
    [ theme.breakpoints.up("md") ]: {
      marginLeft: '40px',
    },
    [ theme.breakpoints.up("sm") ]: {
      marginLeft: '40px',
    },
  },
  accordionTitle: {
    fontFamily: themes.rubik,
    color: themes.heading,
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '.2rem',
  },

  accordionSubTitle: {
    fontFamily: themes.source,
    color: themes.error,
    lineHeight: '2.9rem',
    fontSize: '2.7rem',
    fontWeight: 700,
    margin: '10px 0px',
    textAling: 'center',
  },
  root: {
    width: '100%',
    margin: '0px auto',
  },

  mainAccordion: {
    minHeight: '2rem',
    // background: 'rgba(0,0,0,0)!important',
    boxShadow: 'none',
    borderBottom: '1px solid rgba(129,118,237,0.3)',
    borderRadius: '0px !important',
    width: '100%',
  },
  mainAccordionSumm: {
    boxShadow: 'none',
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    padding: '0px 4px !important',
  },
  headingMain: {
    display: 'flex',
  },
  acordionQuestion: {
    // background: '#f0ac0e',
    // color: '#ffffff',
    // padding: ' 2px 4px',
    // fontSize: '2rem',
    // fontFamily: themes.rubik,
    fontWeight: 700,
    // marginLeft: '-10px',

  },
  acordionQ: {
    background: '#f0ac0e',
    color: '#ffffff',
    padding: '2px 10px',
    fontSize: '1.2rem',
    fontFamily: themes.rubik,
    fontWeight: 500,
    margin: '0px 0px',
    borderRadius: '4px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 500,
    fontFamily: themes.rubik,
    color: '#3b3663',
    lineHeight: '15px',
    fontSize: '.9rem',
    marginLeft: '10px',

  },
  acordionA: {
    background: '#6254e7',
    color: '#ffffff',
    padding: '2px 10px',
    fontSize: '1.2rem',
    fontFamily: themes.rubik,
    fontWeight: 500,
    margin: '0px 0px',
    borderRadius: '4px',
    marginTop: '15px',
  },
  details: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 400,
    fontFamily: themes.rubik,
    color: themes.info,
    marginLeft: '10px',
    

  },

  expendIconColor: {
    color: '#6254e7',
  },

}));





export default function HomeAccordion() {
  const classes = useStyles();
  const [ expanded, setExpanded ] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container spacing={2} >
      <Grid item xs={12} sm={12} md={12} lg={11} xl={11} className={classes.accordionMainTitle}  >
        <h1 className={classes.accordionTitle}  >
          Faq
        </h1>
        <h2 className={classes.accordionSubTitle}  >
          Your All Question Here
        </h2>
      </Grid>
      <Grid item xs={12} sm={11} md={11} lg={11} xl={11} className={classes.root} >
        <Grid container spacing={2} >
          <Grid item xs={12} sm={11} md={10} lg={6} xl={6} className={classes.root}  >
            {allData.homeaccordions.map(item => (
              <div key={item.id} className={classes.accordionMain}>
                <Accordion className={classes.mainAccordion} TransitionProps={{ unmountOnExit: true }} expanded={expanded === item.id} onChange={handleChange(item.id)} >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.expendIconColor} />}
                    aria-controls={item.id}
                    id={item.id}
                    className={classes.mainAccordionSumm}
                  >
                    <div
                      className={classes.headingMain}>
                      <div className={classes.acordionQuestion}>
                        <h1 className={classes.acordionQ} >Q</h1>
                      </div>
                      <h1 className={classes.heading} >
                        {item.h1}
                      </h1>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className={classes.headingMain}>
                      <div className={classes.acordionQuestion}>
                        <p className={classes.acordionA} >A</p>
                      </div>
                      <p className={classes.details} >
                        {item.h2}
                      </p>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </Grid>
          <Grid item xs={12} sm={11} md={10} lg={6} xl={6} className={classes.root} >
            {allData.aboutaccordions.map(item => (
              <div key={item.id} className={classes.accordionMain}>
                <Accordion className={classes.mainAccordion} TransitionProps={{ unmountOnExit: true }} expanded={expanded === item.id} onChange={handleChange(item.id)} >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.expendIconColor} />}
                    aria-controls={item.id}
                    id={item.id}
                    className={classes.mainAccordionSumm}
                  >
                    <div
                      className={classes.headingMain}>
                      <div className={classes.acordionQuestion}>
                        <h1 className={classes.acordionQ} >Q</h1>
                      </div>
                      <h1 className={classes.heading} >
                        {item.h1}
                      </h1>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className={classes.headingMain}>
                      <div className={classes.acordionQuestion}>
                        <p className={classes.acordionA} >A</p>
                      </div>
                      <p className={classes.details} >
                        {item.h2}
                      </p>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
