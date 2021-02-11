import React, { SetStateAction } from "react";
import "./App.scss";
import Cloud from "./pages/pricing/components/CloudPricing";
import Server from "./pages/pricing/components/ServerPricing";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function App() {
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
      <section className="app-container">
        <h1>Pricing Page</h1>
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
