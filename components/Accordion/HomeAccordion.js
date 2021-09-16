
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from "@material-ui/core";
import themes from "../../theme/themes";
import allData from '../../data/allData';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '0px auto',
  },
  mainAccordion:{
    margin:'3px 0px',
  },
  mainAccordionSumm:{
    boxShadow: 'none',
    backgroundColor: 'rgba(0, 0, 0, .03)',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));





export default function HomeAccordion() {
  const classes = useStyles();
  const [ expanded, setExpanded ] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={10} lg={8} xl={8} className={classes.root} >
        {allData.homeaccordions.map(item => (
          <div key={item.id} className={classes.accordionMain}>
            <Accordion className={classes.mainAccordion} TransitionProps={{ unmountOnExit: true }}  expanded={expanded === item.id} onChange={handleChange(item.id)} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={item.id}
                id={item.id}
                className={classes.mainAccordionSumm}
              >
                <Typography className={classes.heading}>{item.h1}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {item.h2}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}
