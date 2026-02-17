import styled from "styled-components"
import { InputBox } from "../atoms/input/InputBox";

export const LabelWithBox = (props) => {
  const {children,placeholder,type='text',name} = props;
  return (
    <SLabel>{children}
    <InputBox type={type} placeholder={placeholder} name={name}/>
    </SLabel>
  )
}

const SLabel = styled.label`
  font-weight: bold;
`;