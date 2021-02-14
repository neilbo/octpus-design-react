import * as React from "react";
import Chip from '@material-ui/core/Chip';
import LockOpen from '@material-ui/icons/LockOpen';
import Lock from '@material-ui/icons/Lock';
import styles from './HighAvailability.module.scss';

const HighAvailabilityInfo = (props: any) => {
  const isHighAvailabilityEnabled: boolean = props.targets >= 100;
  
  const toggleLabel = () => {
    return isHighAvailabilityEnabled
       ? "Acheivement Unlocked! High availability feature included in plan!"
       : "High availability feature included with 100 targets or more"
  }

  const toggleIcon = () => {
    return isHighAvailabilityEnabled
      ? <LockOpen className={styles.icon} />
      : <Lock className={styles.icon} />
  }

  const toggleColor = () => {
    return isHighAvailabilityEnabled
      ? "secondary"
      : "primary"
  }

  return (
    <Chip
      className={styles.ha_chip}
      icon={toggleIcon()}
      color={toggleColor()}
      label={toggleLabel()}
    />
  )

};

export default HighAvailabilityInfo;
