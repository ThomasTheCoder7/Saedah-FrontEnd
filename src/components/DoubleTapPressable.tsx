import React, { ReactNode, useRef } from "react";
import { Pressable, Text, View } from "react-native";

interface DoubleTapPressableProps {
  onSingleTap?: () => void;
  onDoubleTap: () => void;
  children: ReactNode;
  ignore?:boolean
}

const DoubleTapPressable: React.FC<DoubleTapPressableProps> = ({
  onSingleTap=()=>{},
  onDoubleTap,
  children,
  ignore=false
}) => {
  const lastPress = useRef<number>(0);
  let doublePressTimeout: NodeJS.Timeout | null = null;

  const handlePress = () => {
    const currentTime = new Date().getTime();
    const delta = currentTime - lastPress.current;

    if (delta < 300) {
      // Double tap detected
      if (doublePressTimeout) {
        clearTimeout(doublePressTimeout);
      }
      onDoubleTap();
    } else {
      // Single tap detected
      doublePressTimeout = setTimeout(() => {
        onSingleTap();
      }, 300);
    }

    lastPress.current = currentTime;
  };

  return <Pressable onPress={handlePress} pointerEvents={ignore?'none':'auto'}>{children}</Pressable>;
};

export default DoubleTapPressable;
