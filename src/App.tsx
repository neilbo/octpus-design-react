import React, { SetStateAction } from "react";
import "./App.scss";
import Cloud from "./pages/pricing/components/CloudPricing";
import Server from "./pages/pricing/components/ServerPricing";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import classes from "*.module.css";
import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  app: {
    // backgroundColor:  grey[100],
    marginLeft: 48,
    marginRight: 48,
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
        <h1>Pricing</h1>
        <Tabs value={selectedTab} onChange={handleChange} aria-label="Pricing Tabs">
          <Tab label="Cloud" {...a11yProps(0)} />
          <Tab label="Server" {...a11yProps(1)} />
        </Tabs>
    </section>
    {selectedTab === 0 && <Cloud />}
    {selectedTab === 1 && <Server />}
    </>
  );
}

export default App;
