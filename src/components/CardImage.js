import React from "react";
import styled from 'styled-components';

const Image = styled.img`
  max-width:  100%;
`


const CardImage = ( {src, alt} ) => {
  return(
    <Image src={src} alt={alt} />
  )
}

export default CardImage;