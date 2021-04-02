import styled from 'styled-components'

export const CapaStyles = styled.div`
    background-color: #131418;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    font-family: 'Manrope', sans-serif;

    @media (min-width: 1000px) {
        padding-left: 30px;
    }

    @media (min-width: 1270px) {
        padding-left: 60px;
    }

    @media (min-width: 1900px) {
        padding-left: 80px;
    }

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 10vh;
    padding: 10px;

    @media (min-width: 1200px) {
        height: 15vh;
    }
    
    @media (min-width: 1900px) {
        height: 16vh;
    }
`

export const TextoPrincipal = styled.div`
    color: white;
    display: flex;
    font-size: 2rem;
    padding-left: 10px;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 500;

    @media (min-width: 1000px) {
        width: 55%;
        font-size: 2rem;
    }

    @media (min-width: 1200px) {
        width: 45%;
        font-size: 2.5rem;
    }

    @media (min-width: 1900px) {
        width: 35%;
        font-size: 3rem;
    }

`

export const SubTexto = styled.div`
    font-size: 1rem;
    display: flex;
    padding-top: 20px;

    font-weight: 400;

    background-color: transparent;
    width: 80%;

    @media (min-width: 1000px) {
        width: 70% !important;
    }

    @media (min-width: 1200px) {
        width: 60%;
        font-size: 1rem;
    }

    @media (min-width: 1900px) {
        width: 50%;
        font-size: 1rem;
    }

`

export const ButtonStyle = styled.button`
  background-color: white;
  color: black;
  font-size: 15px;
  padding: 15px 10px;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  border: none;

  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 28vh;

  @media (min-width: 1000px) {
      width: 25%;
  }

  @media (min-width: 1280px) {
      width: 20%;
  }

  @media (min-width: 1900px) {
        width: 15%;
    }

`;