import React from 'react'
import {Container, Figure, H2, Left, Right, Text, Wrapper, Image } from '../../styles/Affiliates/Background.js'

export default function Exclusive({theme}) {
  return (
    <>
    <Container theme={theme}>
        <Wrapper theme={theme}>
            <Left theme={theme}>
                <H2 theme={theme}>Seize exclusive opportunities, while earning enticing commissions.</H2>
                <Text theme={theme}>Grow your brand with our affiliate program, tailored for individuals interested in promoting and selling captivating safaris. Join us as a PipitSafaris affiliate.</Text>
          
            </Left>
            <Right theme={theme}>
                <Figure theme={theme}>
                    <Image src='https://static.cloudsafaris.com/public/051b87ea-d698-4b0b-a392-4cee0cb398f9_PXL_20221013_032608434-min.jpg?action=get' alt='Safari Image' width={824} height={620} />
                </Figure>
            </Right>
        </Wrapper>
        <Wrapper style={{flexDirection:'row'}} theme={theme}>
            <Left style={{maxWidth:'840px'}} theme={theme}>
                <H2 theme={theme}>Our affiliate compensation is truly world-class</H2>
                <Text theme={theme}>Grow your brand with our affiliate program, tailored for individuals interested in promoting and selling captivating safaris. Join us as a PipitSafaris affiliate.</Text>
                
            </Left>
            <Right  style={{maxWidth:'280px'}} theme={theme}>
                <Figure theme={theme}>
                    <Image src='https://static.cloudsafaris.com/public/051b87ea-d698-4b0b-a392-4cee0cb398f9_PXL_20221013_032608434-min.jpg?action=get' alt='Safari Image' width={441} height={424} />
                </Figure>
            </Right>
        </Wrapper>
    </Container>
    </>
  )
}
