import * as React from "react";
import Chip from '@material-ui/core/Chip';
import LockOpen from '@material-ui/icons/LockOpen';

const HighAvailabilityInfo = () => {
    return (
        <Chip
        className="high-availability"
        icon={<LockOpen />}
        label="High availability feature included in plan with more than 100
      deployment targets"
      />
    )
};

export default HighAvailabilityInfo;
