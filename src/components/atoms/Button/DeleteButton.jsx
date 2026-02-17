import styled from "styled-components"
import { Basebutton } from "./Basebutton";

export const DeleteButton = (props) => {
  const { children ,onClick} = props;
  return(
    <SButton onClick={onClick}>{children}</SButton>
  )
}

const SButton = styled(Basebutton)`
  background-color: red;
`;