import styled from "styled-components";
import { Data } from "../molecules/table/Data"

export const StudyTable = (props) => {
  const {records,onClickDelete} = props;
  return(
    <SContainer>
    <STable>
      <thead>
        <tr>
          <th>学習内容</th>
          <th>学習時間</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <Data 
          key = {record.id}
          title={record.title}
          time = {record.time}
          id={record.id}
          onClickDelete = {onClickDelete}
          />
        ))}
      </tbody>
    </STable>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin: 40px auto;
`;

const STable = styled.table`
  width: 70%;
`;