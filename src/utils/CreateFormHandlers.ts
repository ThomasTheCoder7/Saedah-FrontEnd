import { Image } from "./Forms/CreateDeal";
import * as FileSystem from 'expo-file-system';
export const getAppendImageFunction = (setImages: Function) => {
  return (image: Image) => {
    setImages((prev: Image[]) => [...prev, image]);
  };
};

export const getDeleteImageFunction = (setImages: Function) => {
  return (image: Image) => {
    setImages((prev: Image[]) => {
      const updatedImages = prev.filter(
        (currentImage: Image) => currentImage.uri !== image.uri
      );
      return updatedImages;
    });
  };
};



