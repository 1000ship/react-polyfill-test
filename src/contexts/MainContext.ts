import React from 'react';

export interface IMainContext {
  name: string;
  age: number;
}

export const defaultValue: IMainContext = {
  name: '',
  age: 0,
};

export default React.createContext<IMainContext>(defaultValue);
