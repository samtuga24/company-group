import React, { createContext, useState } from 'react'
const NavContext = createContext();
export function NavProvider({ children }){
    const [menu, setMenu] = useState(false);
  return (
    <>
    <NavContext.Provider value={{ menu, setMenu }}>
        {children}
    </NavContext.Provider>
</>
  )
}
export default NavContext;