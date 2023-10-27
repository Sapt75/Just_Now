import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./tabs.min.css"

export default function LabTabs({ status, values }) {
  const [value, setValue] = React.useState('1');
  const [data, setData] = React.useState()
  const [itemm, setItem] = React.useState()

  async function getSpec() {

    if (status) {
      let data = await fetch(`/admin_varata/${values.brand}/${values.model_name}/${values.version_name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      let res = await data.json()


      sessionStorage.removeItem("specifications")

      let dat = {}


      await Promise.all(Object.keys(res.Specifications).map((itm) => {
        Object.keys(res.Specifications[itm]).map((item) => {
          dat[item] = res.Specifications[itm][item]
        })
      }))


      if (sessionStorage.getItem("specifications") == null) {
        sessionStorage.setItem("specifications", JSON.stringify(dat))
      }


      setItem(dat)
      setData(res)
    } else {
      let data = await fetch(`/features`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      let res = await data.json()


      sessionStorage.removeItem("specifications")

      let dat = {}


      await Promise.all(Object.keys(res.Specifications).map((itm) => {
        Object.keys(res.Specifications[itm]).map((item) => {
          dat[item] = ""
        })
      }))

      let ses = {
      }

      await Promise.all(Object.keys(res.Specifications).map((itm) => {
        ses[itm.replace(" ", "_").replace(" ", "_")] = {}
      }))


      await Promise.all(Object.keys(res.Specifications).map((itm) => {
        Object.keys(res.Specifications[itm]).map((item) => {
          ses[itm][item.replace(" ", "_").replace(" ", "_")] = "null"
        })
      }))


      if (sessionStorage.getItem("specifications") == null) {
        sessionStorage.setItem("specifications", JSON.stringify(ses))
      }


      setItem(dat)
      setData(res)
    }


  }

  const handleChange = async (event: React.SyntheticEvent, newValue: String) => {
    setValue(newValue);
  };


  async function handelInput(e) {

    setItem(() => {
      const entries = Object.entries(itemm).map(([key, value]) => key === e.target.name ? [key, e.target.value] : [key, value]);
      const result = Object.fromEntries(entries);
      return result
    })

    let data = JSON.parse(sessionStorage.getItem("specifications")) === null ? {} : JSON.parse(sessionStorage.getItem("specifications"))

    if(Object.keys(data).includes(e.target.name)){
      data[e.target.name] = e.target.value
    }



    sessionStorage.setItem("specifications", JSON.stringify(data))
  }


  React.useEffect(() => {
    getSpec()
  }, [])


  return (
    <Box className='my-[3rem]' sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <div id='lists'>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {data ? Object.keys(data.Specifications).map((item, index) => {
                return (<Tab label={_.startCase(item.replace("_", " "))} value={`${index + 1}`} />)
              }) : null}
            </TabList>
          </div>
        </Box>
        {data ? Object.keys(data.Specifications).map((item, index) => {
          return (<TabPanel value={`${index + 1}`}>
            <div className='w-100 border-2 border-black'>
              {Object.keys(data.Specifications[item]).map((itm, index) => {
                return (<div className={`mx-[4rem] ${index === Object.keys(data.Specifications[item]).length - 1 ? "mb-[3rem]" : null}`}>
                  <div className='mt-[4rem] flex space-x-20'>
                    <div className='w-1/2'>
                      <label className='text-lg'>{_.startCase(itm.replace("_", " "))}</label>
                    </div>
                    <input id={index + 1} value={itemm[itm]} onChange={handelInput} autocomplete="null" name={itm} className='px-[3rem] py-[0.8rem]' type="text" />
                  </div>
                </div>)
              })}
            </div>
          </TabPanel>)
        }) : null}

      </TabContext>
    </Box>
  );
}
