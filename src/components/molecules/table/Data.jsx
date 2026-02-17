import styled from "styled-components";
import { DeleteButton } from "../../atoms/Button/DeleteButton";

export const Data = (props) => {
  const {title,time,onClickDelete,id} = props;
  return (
    <STr>
      <STd>{title}</STd>
      <STd>{time}時間</STd>
      <SDeleteTd><DeleteButton onClick={() => onClickDelete(id)}>削除</DeleteButton></SDeleteTd>
    </STr>
  )
}

const STr = styled.tr`
  padding: 20px;
  text-align: center;
`
const STd = styled.td`
    text-align: center;
    padding: 20px;
    border-top: solid 2px silver;
`

const SDeleteTd = styled.td`
    text-align: center;
    padding: 20px;
    border-top: solid 2px silver;
    width: 20%;
`