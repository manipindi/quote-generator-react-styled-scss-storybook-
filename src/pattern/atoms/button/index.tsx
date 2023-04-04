import React from 'react'
import './button.scss'

export const Button = ({children, ...rest}:any) => {
  return (
    <button className='button' {...rest}>{children}</button>
  )
}
