import { IconButton } from '@material-ui/core'
import { Check } from '@material-ui/icons'
import { useMutation } from '@apollo/client'
import { RENDRE_LIBRE_MATERIEL } from '../../GraphQL/Mutations'
import { LOAD_MATERIELS } from '../../GraphQL/Queries'
import React from 'react'

function RendreEnMarche({ materiel, ...props }) {
  const [updateMateriel, { loading, error }] = useMutation(
    RENDRE_LIBRE_MATERIEL
  )

  if (error) return <p>Error occured</p>

  return (
    <React.Fragment>
      {loading ? (
        <span style={props.style}>loading...</span>
      ) : (
        <IconButton
          style={props.style}
          onClick={() =>
            updateMateriel({
              variables: {
                id: materiel.id,
                updateMaterielFields: {
                  status: 'en marche',
                  technicienId: null
                }
              },
              refetchQueries: [{ query: LOAD_MATERIELS }]
            })
          }
        >
          <Check />
        </IconButton>
      )}
    </React.Fragment>
  )
}

export default RendreEnMarche
