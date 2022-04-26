import {
  Drawer as MDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { Computer, Group, List as ListIcon, HowToReg } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

function Drawer({ open, setOpen }) {
  const history = useHistory()

  return (
    <MDrawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <div style={{ width: 250 }}>
        <List>
          {[
            { name: 'Materiels', path: '/' },
            { name: 'Type de materiel', path: 'detail' },
            { name: 'Utilisateurs', path: 'user' },
            { name: 'Techniciens', path: 'technicien' }
          ].map((array, index) => (
            <ListItem
              button
              key={array.name}
              onClick={() => {
                history.push(array.path)
                setOpen(false)
              }}
            >
              <ListItemIcon>
                {index === 0 && <Computer />}
                {index === 1 && <ListIcon />}
                {index === 2 && <Group />}
                {index === 3 && <HowToReg />}
              </ListItemIcon>
              <ListItemText primary={array.name} />
            </ListItem>
          ))}
        </List>
      </div>
    </MDrawer>
  )
}

export default Drawer
