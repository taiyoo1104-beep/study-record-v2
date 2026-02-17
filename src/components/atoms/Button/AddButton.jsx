import styled from "styled-components"
import { Basebutton } from "./Basebutton"
import { useStudyForm } from "../../organisms/StudyTimeForm";

export const AddButton = ({children}) => {
  const { onclickAdd } = useStudyForm();
  return(
<SButton onClick={onclickAdd}>{children}</SButton>
  )
}

const SButton = styled(Basebutton)`
  background-color: #659AD2;
`;