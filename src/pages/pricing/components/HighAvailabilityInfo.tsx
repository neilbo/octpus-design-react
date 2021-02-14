import * as React from "react";
import Chip from '@material-ui/core/Chip';
import LockOpen from '@material-ui/icons/LockOpen';
import Lock from '@material-ui/icons/Lock';
import styles from './HighAvailability.module.scss';

const HighAvailabilityInfo = (props: any) => {
  const targetsAtLeast100: boolean = props.targets >= 100;
  const toggleLabel = () => {
    if (targetsAtLeast100) {
      return "Acheivement Unlocked! High availability feature included in plan!"
    } else {
      return "High availability feature included with 100 targets or more"
    }
  }

  const toggleIcon = () => {
    if (targetsAtLeast100) {
      return <LockOpen className={styles.icon} />
    } else {
      return <Lock className={styles.icon} />
    } 
  }

  const toggleColor = () => {
    return targetsAtLeast100 
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
