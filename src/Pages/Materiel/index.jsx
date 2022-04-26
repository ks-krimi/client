import { useQuery } from '@apollo/client'
import useTitle from '../../hooks/useTitle'
import { LOAD_MATERIELS } from '../../GraphQL/Queries'
import Add from '../../components/Materiel/Add'
import MaterielList from '../../components/Materiel/MaterielList'
import { Tab, Tabs } from '@material-ui/core'
import TabPanel from '../../components/TabPanel'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Layout from '../../components/Layout'

function Materiel() {
  useTitle('Materiels')
  useAuth()
  const { error, loading, data } = useQuery(LOAD_MATERIELS)
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  /*   if (!data) return <p>no data!</p>; */

  return (
    <Layout>
      <div
        style={{
          paddingTop: 24,
          position: 'relative',
          height: 'inherit'
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{
            position: 'sticky',
            top: 12,
            zIndex: 1,
            backgroundColor: '#f1f1f1'
          }}
        >
          <Tab label="Materiel Libre" />
          <Tab label="Materiel Occuper" />
          <Tab label="Materiel en panne" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div
            style={{
              display: 'flex',
              gap: 8,
              padding: '24px 0',
              flexWrap: 'wrap'
            }}
          >
            {loading ? (
              <p>loading...</p>
            ) : error ? (
              <p>An error occured</p>
            ) : (
              <>
                <MaterielList materiels={data.materiels} />
                <Add />
              </>
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div
            style={{
              display: 'flex',
              gap: 8,
              padding: '24px 0',
              flexWrap: 'wrap'
            }}
          >
            {loading ? (
              <p>loading...</p>
            ) : error ? (
              <p>An error occured</p>
            ) : (
              <>
                <MaterielList materiels={data.materiels} isLibre={false} />
              </>
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div
            style={{
              display: 'flex',
              gap: 8,
              padding: '24px 0',
              flexWrap: 'wrap'
            }}
          >
            {loading ? (
              <p>loading...</p>
            ) : error ? (
              <p>An error occured</p>
            ) : (
              <>
                <MaterielList materiels={data.materiels} isEnPanne={true} />
              </>
            )}
          </div>
        </TabPanel>
      </div>
    </Layout>
  )
}

export default Materiel
