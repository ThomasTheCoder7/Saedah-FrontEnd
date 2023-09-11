import { View, Text } from 'react-native'
import  ThemeProvider  from './ThemeContexts'
import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const Providers = ({children}:Props) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default Providers