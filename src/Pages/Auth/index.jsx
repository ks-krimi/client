import { useState } from 'react'
import Authentification from '../../components/Auth'

function Auth() {
  const [isLoggin, setIsLoggin] = useState(true)
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '100vh'
      }}
    >
      <Authentification isLoggin={isLoggin} setIsLoggin={setIsLoggin} />
    </div>
  )
}

export default Auth
