import styled from "styled-components";

export const Title = (props) => {
  const { children } = props;
  return(
    <STitle>
      <h1>{children}</h1>
    </STitle>     
  )
}

const STitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bce2e8;
`
