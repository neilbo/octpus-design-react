import React, { SetStateAction } from "react";
import "./App.scss";
import Cloud from "./pages/pricing/components/CloudPricing";
import Server from "./pages/pricing/components/ServerPricing";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import classes from "*.module.css";
import { Grid, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  app: {
    marginTop: 32,
    marginBottom: 16
  }
})

function App() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setSelectedTab(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `pricing-tab-${index}`,
      'aria-controls': `pricing-tabpanel-${index}`,
    };
  }

  return (
    <>
      <section className={classes.app}>
        <Grid container spacing={2}>
          <Grid item xs></Grid>
          <Grid item xs={12} sm={8}>
            <h1>Pricing</h1>
            <Tabs value={selectedTab} onChange={handleChange} aria-label="Pricing Tabs">
              <Tab label="Cloud" {...a11yProps(0)} />
              <Tab label="Server" {...a11yProps(1)} />
            </Tabs>
            {selectedTab === 0 && <Cloud />}
            {selectedTab === 1 && <Server />}
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </section>

    </>
  );
}

export default App;
