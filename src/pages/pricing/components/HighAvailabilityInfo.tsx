import * as React from "react";
import Chip from '@material-ui/core/Chip';
import LockOpen from '@material-ui/icons/LockOpen';
import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";


const useStyles = makeStyles({
  highAvailability: {
    backgroundColor: blue[100],
    color: blue[900],
  }
})
const HighAvailabilityInfo = () => {
  const classes = useStyles();

    return (
        <Chip
        className={classes.highAvailability}
        icon={<LockOpen className={classes.highAvailability} />}
        label="High availability feature included in plan with more than 100
      deployment targets"
      />
    )
};

export default HighAvailabilityInfo;
