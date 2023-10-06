import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import StyledText from 'components/StyledText'
import { useTheme } from 'contexts/ThemeContexts'
import { useTranslation } from 'react-i18next'
import { widthPercentageToDP as wtdp ,heightPercentageToDP as htdp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
type props = {
label:string;
}

const NextButton = ({label}:props) => {
  const theme = useTheme()
  const {t} = useTranslation()
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('Money')}}>
      <LinearGradient
        style={{ width:wtdp('80%'), borderRadius: 12 }}
        locations={[0.1, 0.9]}
        colors={[theme.bottomTabActiveIcon, theme.secondary]}
        start={{ x: 0, y: 0.6 }}
        end={{ x: 1, y: 0.8 }}
      >
        <View
          style={{
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <StyledText
            style={{ color: theme.header, fontSize: 18, letterSpacing: 1 }}
            weight="SemiBold"
          >
            {t(label)}
          </StyledText>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default NextButton