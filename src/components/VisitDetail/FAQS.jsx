import React from 'react'
import { Box, ComponentWrapper, H2, Left, Right } from '../../styles/DetailPage/FAQS'
import Faqs from '../Affiliates/Faqs'

export default function FAQS({theme}) {
  return (
    <>
    <ComponentWrapper theme={theme}>
      <Faqs theme={theme}/>
    </ComponentWrapper>
    </>
  )
}
