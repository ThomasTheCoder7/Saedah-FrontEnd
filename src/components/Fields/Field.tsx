import { View, Text, TextInput } from "react-native";
import React, { ReactNode } from "react";
import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";
import { useTheme } from "contexts/ThemeContexts";
import StyledText from "components/StyledText";
import { useTranslation } from "react-i18next";

type props = {
  label: string;
  children: ReactNode;
  labelStyles?: Object;
  disableStyles?: boolean;
};

export const FieldStyle = () => {
  const theme = useTheme();

  return;
};

const Field = ({
  label,
  children,
  disableStyles = false,
  labelStyles = {},
}: props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <View style={[{ gap: 10, padding: 0, }]}>
      <View style={labelStyles}>
        <StyledText
          style={[
            { color: theme.header, paddingLeft: 3, alignSelf: "flex-start" },
            
          ]}
          weight="SemiBold"
        >
          {t(label)}
        </StyledText>
      </View>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === TextInput) {
          // Apply styles to the TextInput components

          return React.cloneElement(child, {
            style: [
              !disableStyles
                ? {
                    padding: 15,
                    paddingHorizontal:20,
                    backgroundColor: theme.fieldBackground,
                    fontSize: htdp("3%"),
                    borderRadius: 10,
                    color: theme.header,
                  }
                : {},
              child.props.style,
            ],
            key: index,
          });
        } else {
          return child;
        }
      })}
    </View>
  );
};

export default Field;
