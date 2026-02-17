import { createContext,useContext,useState } from "react";

const StudyFormContext = createContext();

export const StudyFormProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const value = {
    title,
    setTitle,
    time,
    setTime
  };

  return (
    <StudyFormContext.Provider value={value}>
      {children}
    </StudyFormContext.Provider>
  );
};

// 3. 使うためのカスタムフック
export const useStudyForm = () => useContext(StudyFormContext);