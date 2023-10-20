import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";

export const onScroll = (
  event: any,
  index: number,
  setIndex: (index: number) => void
) => {
  const { x } = event.nativeEvent.contentOffset;
  const screenWidth = wtdp("94%");

  // Calculate the index based on the scroll position
  const newIndex = Math.round(x / screenWidth);

  if (newIndex !== index) {
    setIndex(newIndex);
  }
};
