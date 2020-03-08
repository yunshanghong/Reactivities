import React from 'react';
import { ICar } from './Demo';

interface IProps {
  car: ICar
}

const CarItems: React.FC<IProps> = (props: any) => {
  return (
    <div>
      <h1>{props.car.color}</h1>
    </div>
  );
}

export default CarItems;
