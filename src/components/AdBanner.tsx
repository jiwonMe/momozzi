import React from 'react'
import styled from 'styled-components'
import AdImage from '../assets/ad image.png'

const AdBanner = () => {
  return (
    <Layout>
      <Image src={AdImage} alt="ad" />
    </Layout>
  )
}

export default AdBanner

const Layout = styled.div`
  align-self: stretch;
  height: 100px;
  background: #F9FAFB;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 320px;
`;