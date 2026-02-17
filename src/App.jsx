import './App.css'
import { useState ,useEffect} from 'react';
import { supabase } from './supabaseClient';
import { Title } from './components/atoms/title/Title'
import { StudyTable } from './components/organisms/StudyTable';
import { StudyTimeForm } from './components/organisms/StudyTimeForm'
import styled from 'styled-components';

function App() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Supabase からデータを取得する関数
  const fetchRecords = async () => {
    setIsLoading(true); // ①読み込み開始！
    const { data, error } = await supabase
      .from('study-record')
      .select('*');

    setIsLoading(false); // 読み込み終わり

    if (error) {
      console.error('取得エラー:', error.message);
    } else {
      console.log(data);
      setRecords(data);
    }
  };
  // 画面が表示されたときに実行
  useEffect(() => {
    fetchRecords();
  }, []);

  const onClickDelete = async (id) => {
    // 1. 確認ダイアログを表示し、結果を定数に入れる
  const isConfirmed = window.confirm("本当にこの記録を削除してもよろしいですか？");

  // 2. 「キャンセル」が押されたら、ここで処理を終了する
  if (!isConfirmed) return;
    const {error} = await supabase.from('study-record').delete().eq('id',id);

    if(error){
      alert("削除に失敗しました")
    }else{
      fetchRecords();
    }
  }


  return (
    <>
      <Title>学習時間管理</Title>
      <StudyTimeForm onsave={fetchRecords}/>
      {isLoading ? (<SLoading>Now Loading...</SLoading>) : <StudyTable records = {records} onClickDelete={onClickDelete}/>}
    </>
  )
}

export default App

const SLoading = styled.p`
  text-align: center;
  margin-top: 130px;
  font-weight: bold;
`