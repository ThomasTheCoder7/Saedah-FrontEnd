import { View, Text } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'

type props = {
  style?:object
  bold?:boolean
  children:string
}

const StyledText = ({style={},bold=false,children}:props) => {
  const {t, i18n} = useTranslation()
  const lang = i18n.language;
  return (
      <Text style={[style, {fontFamily:`${lang ==='en'?'Poppins':'Cairo'}-${bold?'SemiBold':'Regular'}`}]}>{children}</Text>
  )
}

export default StyledText