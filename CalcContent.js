import { createContext, useState } from "react"

export const CalcContent = createContext()
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  });

  const providerValue = {
    calc, setCalc
  }

  return (
    <CalcContent.Provider value={providerValue}>
      {children}
    </CalcContent.Provider>
  )
}

export default CalcProvider