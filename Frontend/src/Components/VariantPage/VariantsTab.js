import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function VariantsTab(props) {

  const [read, setRead] = useState()



  return (
    <Tabs>
      <TabList>
        <Tab onClick={() => {
          props.finalversion(props.version)
        }}>View All</Tab>
        <Tab onClick={() => {
          props.finalversion(props.version.filter((item) => {
            if (item.transmission_type == "Manual") {
              return item
            }
          }))
        }}>Manual</Tab>
        <Tab onClick={() => {
          props.finalversion(props.version.filter((item) => {
            if (item.transmission_type == "Automatic") {
              return item
            }
          }))
        }}>Automatic</Tab>
      </TabList>

    </Tabs>
  )
}

export default VariantsTab