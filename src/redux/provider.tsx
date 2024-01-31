"use client";

import { makeStore } from "./store";
import { Provider } from "react-redux";

import React from 'react'


interface Props {
    children: React.ReactNode
}

const CustomProvider = ({children}:Props) => {
  return (
      <Provider store={makeStore()} >
          {children}
    </Provider>
  )
}

export default CustomProvider