import {
  widthPercentageToDP as wtdp,
  heightPercentageToDP as htdp,
} from "react-native-responsive-screen";

export const onScroll = (
  event: any,
  index: number,
  setIndex: (index: number) => void,
  vertical:boolean=false
) => {
  if(vertical) {onVerticalScroll(event,index,setIndex); return;}
  const { x } = event.nativeEvent.contentOffset;
  const screenWidth = wtdp("94%");

  // Calculate the index based on the scroll position
  const newIndex = Math.round(x / screenWidth);

  if (newIndex !== index) {
    setIndex(newIndex);
  }
};

const onVerticalScroll = (event:any, index:number, setIndex:Function)=>{
  const {y} = event.nativeEvent.contentOffset;
  const screenHeight = htdp('75%')
    // Calculate the index based on the scroll position
    const newIndex = Math.round(y / screenHeight);
    console.log(newIndex)
    if (newIndex !== index) {
      setIndex(newIndex);
    }
}