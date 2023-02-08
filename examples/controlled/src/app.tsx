import React from 'react';
import '@lemoncode/react-image-focal-point/style.css';
import { ImageFocalPoint, FocalPoint } from '@lemoncode/react-image-focal-point';
import { Playground } from './playground';

const IMAGE_URL = 'landscape.jpg';

export const App = () => {
  const [focalPoint, setFocalPoint] = React.useState<FocalPoint>({ x: 5, y: 10 });
  return (
    <Playground src={IMAGE_URL} focalPoint={focalPoint}>
      <ImageFocalPoint src={IMAGE_URL} focalPoint={focalPoint} onChange={setFocalPoint} />
    </Playground>
  );
};
