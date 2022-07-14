import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const AuthWrapper = ({children}) => {
  const {isLoading, error} = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return (<div>Oops... {error.message}</div>)
  }
  return (
    <React.Fragment>{children}</React.Fragment>
  )
}
export default AuthWrapper;