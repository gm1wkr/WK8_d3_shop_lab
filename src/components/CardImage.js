import React from "react";
import styled from 'styled-components';

const Image = styled.img`
  max-width:  88%;
  border: 4px solid rgba(0,0,0, 0.6)
`


const CardImage = ( {src, alt} ) => {
  return(
    <Image src={src} alt={alt} />
  )
}

export default CardImage;