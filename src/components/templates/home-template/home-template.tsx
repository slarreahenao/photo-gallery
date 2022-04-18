import React from 'react'
import Header from '../../organisms/header/header'
import Gallery from '../../organisms/gallery/gallery'
import Footer from '../../organisms/footer/footer'
import HomeTemplateProps from '../../../interfaces/home/home-props'

const HomeTemplate = (props: HomeTemplateProps) => {
  const { title } = props
  return (
    <>
      <Header title={title} />
      <Gallery />
      <Footer />
    </>
  )
}

export default HomeTemplate
