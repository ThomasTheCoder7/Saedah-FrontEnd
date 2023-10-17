import { ReactNode } from "react";
import ImageField from "components/Fields/ImageField";
import React from "react";

export const getAppendImageFunction = (setImages: Function) => {
  return (imageUri: string) => {
    setImages((prev: string[]) => [...prev, imageUri]);
  };
};

export const getDeleteImageFunction = (setImages: Function) => {
  return (imageUri: string) => {
    setImages((prev: string[]) => {
      const updatedImages = prev.filter(
        (uri: string) => uri !== imageUri
      );
      return updatedImages;
    });
  };
};
