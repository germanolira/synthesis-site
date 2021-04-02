import styled from 'styled-components'

export const CapaStyles = styled.div`
    background-color: #131418;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 40vh;
    padding: 10px;
    font-family: 'Manrope', sans-serif;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 10vh;
    padding: 10px;
`

export const TextoPrincipal = styled.div`
    color: white;
    display: flex;
    font-size: 2rem;
    padding-left: 10px;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 600;
`

export const SubTexto = styled.div`
    font-size: 1rem;
    display: flex;
    padding-top: 20px;

    font-weight: 400;

    background-color: transparent;
    width: 80%;
`

export const ButtonStyle = styled.button`
  background-color: white;
  color: black;
  font-size: 15px;
  padding: 15px;
  margin-left: 10px;
  margin-top: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 50%;
`;