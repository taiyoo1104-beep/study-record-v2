import styled from "styled-components"
import { useStudyForm } from "../../organisms/StudyTimeForm";

export const InputBox = (props) => {
  const { type, placeholder, name } = props;
  const { title, setTitle, time, setTime } = useStudyForm();

  // nameが "title" なら title 用のセットを使う
  const value = (name === "title") ? title : time;
  const onChange = (e) => (name === "title") ? setTitle(e.target.value) : setTime(e.target.value);
  return(
    <SInput type={type} placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

const SInput = styled.input`
  border-radius: 10px;
  padding: 8px 16px;
  margin-left: 10px;
  outline: none;
  border: solid #ddd 1px;
`;