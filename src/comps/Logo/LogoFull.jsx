import React from 'react'
import Logo from "../../assets/logo.png"

export const LogoFull = (props) => {
  return (
    <div>
        <img src={Logo} alt="Logo Cheebo" {...props} />
    </div>
  )
}
