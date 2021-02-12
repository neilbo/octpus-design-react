import * as React from "react";
import Chip from '@material-ui/core/Chip';
import MoneyOff from '@material-ui/icons/MoneyOff';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  highAvailability: {
    // TODO :: Clean up
    // backgroundColor: blue[100],
    // color: blue[900],
  }
})
const HighAvailabilityInfo = () => {
  const classes = useStyles();

    return (
        <Chip
        className={classes.highAvailability}
        icon={<MoneyOff className={classes.highAvailability} />}
        color="primary"
        label="High availability feature included in plan with more than 100
      deployment targets"
      />
    )
};

export default HighAvailabilityInfo;
