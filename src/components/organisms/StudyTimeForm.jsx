import styled from "styled-components"
import { createContext,useContext,useState } from "react"
import { AddButton } from "../atoms/Button/AddButton"
import { LabelWithBox } from "../molecules/LabelWithBox"
import { supabase } from "../../supabaseClient"

// 1. 同じファイル内でContextを作成
const StudyFormContext = createContext();
export const useStudyForm = () => useContext(StudyFormContext);

export const StudyTimeForm = (props) => {
  const {onsave} = props;
  const [title,setTitle] = useState("");
  const [time,setTime] = useState("");

  const onclickAdd = async () => {
    if(title === "" || time === "") return alert("入力してください");

    const {error} = await supabase.from('study-record').insert([{title,time:Number(time)}]);

    if(error){
      alert("登録処理に失敗しました")
    }else{
      setTitle("");
      setTime("");
      onsave();
    }
  }
      // 配信するデータ
    const value = { title, setTitle, time, setTime, onclickAdd };

  return (
    <StudyFormContext.Provider value={value}>
    <SContainer>
    <LabelWithBox placeholder="学習内容を入力" name="title">学習内容</LabelWithBox>
    <LabelWithBox placeholder="学習時間を入力" type="number"  name="time">学習時間</LabelWithBox>
    <AddButton onClick={onclickAdd}>新規登録</AddButton>
    </SContainer>
    </StudyFormContext.Provider>
  )
}

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 50%;
  margin: 40px auto;

`;