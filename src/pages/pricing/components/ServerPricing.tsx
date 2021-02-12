import * as React from "react";
import { useState } from "react";
// import classNames from "classnames";
// import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Grid, Input, Slider, Typography } from "@material-ui/core";
import { formatCcy, handleInvalidValue } from "../../../utils";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import HighAvailabilityInfo from "./HighAvailabilityInfo";
import styles from "./Pricing.module.scss";

// TODO :: not used but for reference
// const useStyles = makeStyles((theme) => ({
//   pricing: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary
//   }
// }));

const FREE_TARGETS = 10;
const COST_PER_TARGET = 10;
const HIGH_AVAILABILITY_TARGETS = 100;
const UNLIMITED_TARGETS = 2001;
const UNLIMITED_PRICE = "$192,000.00";

const isChargedTargets = (valueTargets: number | string): boolean => {
  return valueTargets > FREE_TARGETS;
};

const ServerPricing = () => {
  // Styling
  // const classes = useStyles();

  // Deployment Targets
  const [valueTargets, setValueTargets] = useState(FREE_TARGETS);

  const handleSliderChange = (event: any, newValue: any) => {
    setValueTargets(newValue);
    setLastTargetsSliderVal(valueTargets);
  };

  const handleBlur = () => {
    if (valueTargets < 0) {
      setValueTargets(0);
    } else if (valueTargets > 10000) {
      setValueTargets(10000);
    }
  };

  // Single spot where targets slider value to be set by the user
  const updateUserTargets = (valueTargets: number) => {
    setValidTargets(valueTargets); // update display value
    setLastTargetsSliderVal(valueTargets); // remember user's last value

    // reset checkbox if targets slider value is not eligible to HA
    if (valueTargets < HIGH_AVAILABILITY_TARGETS) {
      setHaCheckboxVal(false);
    }
  };
  const setValidTargets = (num: number) => {
    let vaildVal = handleInvalidValue(num);
    setValueTargets(vaildVal);
  };

  // High Availablity
  const [LastTargetsSliderVal, setLastTargetsSliderVal] = useState(
    FREE_TARGETS
  );
  const [haCheckboxVal, setHaCheckboxVal] = useState(false);
  const isEligibleHA = valueTargets >= HIGH_AVAILABILITY_TARGETS;
  const renderHaChecked = haCheckboxVal || isEligibleHA;
  const highAvailabilityCheck = (e: { target: { checked: any } }) => {
    // Updating checkbox state
    const newHaCheckboxVal = e.target.checked;
    setHaCheckboxVal(newHaCheckboxVal);
    // [ ] => [x]
    if (newHaCheckboxVal) {
      // Set high availablility value
      if (valueTargets < HIGH_AVAILABILITY_TARGETS) {
        setValueTargets(HIGH_AVAILABILITY_TARGETS);
      }
    } else {
      // [x] => [ ]
      // Reset to user's last input value
      setValueTargets(LastTargetsSliderVal);
    }
  };

  // Unlimited Targets
  const [
    unlimitedTargetsCheckboxVal,
    setUnlimitedTargetsCheckboxVal,
  ] = useState(false);
  const isEligibleUnlimited = valueTargets >= UNLIMITED_TARGETS;
  const renderUnlimitedTargetsChecked =
    unlimitedTargetsCheckboxVal || isEligibleUnlimited;
  const unlimitedTargetsCheck = (e: { target: { checked: any } }) => {
    // Updating checkbox state
    const newUnlimitedTargetsCheckboxVal = e.target.checked;
    setUnlimitedTargetsCheckboxVal(newUnlimitedTargetsCheckboxVal);
    // [ ] => [x]
    if (newUnlimitedTargetsCheckboxVal) {
      // Set unlimited target value
      if (valueTargets < UNLIMITED_TARGETS) {
        setValueTargets(UNLIMITED_TARGETS);
      }
    } else {
      // [x] => [ ]
      // Reset to user's last input value
      setValueTargets(LastTargetsSliderVal);
    }
  };

  // Calculations
  const calcChargedTargets = (valueTargets: any) => {
    if (isChargedTargets(valueTargets)) {
      return valueTargets - FREE_TARGETS;
    } else {
      return 0;
    }
  };

  const targetsPrice = calcChargedTargets(valueTargets) * COST_PER_TARGET;
  const totalPrice = targetsPrice;

  return (
    <>
      <Box className={styles.pricing}>
        <Grid container spacing={2} className={styles.high_availbility_container}>
          <Grid item>
            <HighAvailabilityInfo />
          </Grid>
        </Grid>
        <div></div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={styles.controls_container}>
            <Grid container spacing={2}>
              <Grid item xs={12} className={styles.slider_info}>
                <Typography>
                  For{" "}
                  {renderUnlimitedTargetsChecked
                    ? ` unlimited deployment targets`
                    : " up to " + valueTargets + " deployment targets "}
                </Typography>
              </Grid>
              {renderUnlimitedTargetsChecked ? null : (
                <>
                  <Grid container spacing={2}>
                    <Grid item xs className={styles.slider}>
                      <Slider
                        value={valueTargets}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        min={10}
                        max={2000}
                      />
                    </Grid>
                    <Grid item xs={2} className={styles.input}>
                      <Input
                        className={styles.input}
                        value={valueTargets}
                        margin="dense"
                        onChange={(e) =>
                          updateUserTargets(parseInt(e.target.value, 10))
                        }
                        onBlur={handleBlur}
                        inputProps={{
                          step: 10,
                          min: 10,
                          max: 2000,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      />
                    </Grid>
                  </Grid>
                </>
              )}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={renderUnlimitedTargetsChecked}
                    onChange={unlimitedTargetsCheck}
                    name="unlimitedTargets"
                  />
                }
                label="Unlimited Targets"
              />
            </Grid>
          </Grid>
          <Grid xs={12} sm={6} className={styles.total_price}>
            {/* Total */}
            <Card className={styles.card}>
              <p className={styles.amount} >
                {renderUnlimitedTargetsChecked
                  ? UNLIMITED_PRICE
                  : formatCcy(totalPrice)}
                <sup>*</sup>
              </p>
              <p className={styles.description}>Estimated Monthly Cost</p>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ServerPricing;
