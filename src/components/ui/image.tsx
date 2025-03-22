"use client";

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { forwardRef } from 'react';

export interface ImageProps extends Omit<NextImageProps, 'crossOrigin'> {
  withoutCrossOrigin?: boolean;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(({ withoutCrossOrigin, ...props }, ref) => {
  return <NextImage {...props} ref={ref} />;
});

Image.displayName = 'Image';

export { Image };
