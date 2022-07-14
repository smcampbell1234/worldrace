import React, { useContext, useEffect, useState } from 'react'

const UserContext = React.createContext();

export const UserProvider = ({children}) => {

  const [myUser,setMyUser] = useState(null);

  useEffect(() => {
    //check local storage for user
    let user = localStorage.getItem('user')
    if (!!user) {
      // to ensure login persists on refresh
      let obj = JSON.parse(user)
      setMyUser(obj)
    } else {
      setMyUser(null)
    }
  },[])

  return (
    <UserContext.Provider value={{myUser,setMyUser}}>
      {children}
    </UserContext.Provider>
  )
}
export const useUserContext = () => {
  return useContext(UserContext)
}