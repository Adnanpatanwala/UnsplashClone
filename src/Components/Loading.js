import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return ( 
    <Wrapper>
      <h1 className='loading'>Loading...</h1>
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled.div`
 height: 100vh;
 .loading{ 
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
 }
`