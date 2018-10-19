import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <Background>
    <HeaderFlex>
      <h1>Grace Hopper</h1>
      <h2>
        Hi there. I'm a software developer. I build full stack 
        web applications with Node.js and React.
      </h2>
    </HeaderFlex>
  </Background>
)

export default Header

const Background = styled.div`
  background: linear-gradient(to left, #0F2027, #203A43, #2C5364);
  width: 100%;
  height: 90vh;
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const HeaderFlex = styled.div`
  display: flex;
  width: 80vw;
  height: 90vh;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 6rem 0;

  h1 {
    margin-left: 1rem;
    color: #fff;
    font-size: 3rem;
  }
  h2 {
    margin: 0 1rem;
    color: white;
    font-weight: 100;
    max-width: 500px;
    font-size: 32px;
    line-height: 2.5rem;
  }
  @media (max-width: 1100px) {
    h2 {
      font-size: 24px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 0 3rem 0;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 6rem;

    h1,
    h2 {
      margin-top: 2rem;
    }
  }
  @media (max-width: 550px) {
    padding-top: 6rem;

    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.25rem;
      line-height: 2rem;
    }
  }
`;


