import React from 'react';
import { IState } from '../Interface/IStates';

 export type ITheme = {
  children: React.ReactNode;
}

const Context = React.createContext({} as IState);

export default Context;
