import { useQuery } from '@apollo/client'
import { LOAD_TECHNICIENS } from '../../GraphQL/Queries'
import Add from '../../components/Technicien/Add'
import TechnicienList from '../../components/Technicien/TechnicienList'
import useTitle from '../../hooks/useTitle'
import useAuth from '../../hooks/useAuth'
import Layout from '../../components/Layout'

function Technicien() {
  useTitle('Techniciens')
  useAuth()
  const { error, loading, data } = useQuery(LOAD_TECHNICIENS)

  return (
    <Layout>
      <div
        style={{
          paddingTop: 24,
          position: 'relative',
          height: 'inherit'
        }}
      >
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
            <TechnicienList techniciens={data.techniciens} />
          )}
          <Add />
        </div>
      </div>
    </Layout>
  )
}

export default Technicien