import * as React from "react";
import Chip from '@material-ui/core/Chip';
import MoneyOff from '@material-ui/icons/MoneyOff';
import styles from './HighAvailability.module.scss';

const HighAvailabilityInfo = () => {

    return (
        <Chip
        className={styles.highAvailability}
        icon={<MoneyOff className={styles.high_availability} />}
        color="primary"
        label="High availability feature included in plan with more than 100
      deployment targets"
      />
    )
};

export default HighAvailabilityInfo;
