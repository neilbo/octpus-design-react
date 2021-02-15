import * as React from "react";
import Chip from '@material-ui/core/Chip';
import LockOpen from '@material-ui/icons/LockOpen';
import Lock from '@material-ui/icons/Lock';
import { css } from '@emotion/css';

const HighAvailabilityInfo = (props: any) => {
  const isHighAvailabilityEnabled: boolean = props.targets >= 100;

  const toggleLabel = () => {
    return isHighAvailabilityEnabled
      ? "Acheivement Unlocked! High availability feature included in plan!"
      : "High availability feature included with 100 targets or more"
  }

  const toggleIcon = () => {
    return isHighAvailabilityEnabled
      ? <LockOpen />
      : <Lock />
  }

  const toggleColor = () => {
    return isHighAvailabilityEnabled
      ? "secondary"
      : "primary"
  }

  return (
    <Chip
      className={css`
      padding: 24px 16px;
      color: white;
      `}
      icon={toggleIcon()}
      color={toggleColor()}
      label={toggleLabel()}

    />
  )
};

export default HighAvailabilityInfo;
