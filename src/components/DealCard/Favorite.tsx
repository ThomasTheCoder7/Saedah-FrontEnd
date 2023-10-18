import { View, Text } from 'react-native'
import React from 'react'
import StyledBlurView from './StyledBlurView'
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'contexts/ThemeContexts';

const Favorite = () => {
    const theme = useTheme()
  return (
    <StyledBlurView style={{ flex: 0.15, justifyContent:'center', alignItems:'center' }}>
    {/* TOP RIGHT */}
    <AntDesign name="hearto" size={20} color={theme.header} />
  </StyledBlurView>
  )
}

export default Favorite