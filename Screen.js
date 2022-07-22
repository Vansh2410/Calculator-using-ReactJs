import { useContext } from "react"
import { CalcContent } from "../content/CalcContent"
import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContent);

  return (
    <Textfit className="screen" max={70}  mode="single">{calc.num ? calc.num : calc.res}</Textfit>
  )
}

export default Screen