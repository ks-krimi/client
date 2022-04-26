import React from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_USERS } from '../../GraphQL/Queries'
import useTitle from '../../hooks/useTitle'
import useAuth from '../../hooks/useAuth'
import Layout from '../../components/Layout'
import Table from '../../components/Table'

function Users() {
  useTitle('Listes des utilisateurs')
  useAuth()
  const { error, loading, data } = useQuery(LOAD_USERS)

  const rows = data?.users

  const columns = [
    { field: 'nom', headerName: 'Nom', width: 250 },
    { field: 'prenom', headerName: 'Prénom', width: 250 },
    { field: 'fonction', headerName: 'Fonction', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 }
  ]

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
            <div style={{ height: 350, width: '100%' }}>
              <Table columns={columns} rows={rows} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Users