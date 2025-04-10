import { ReactElement } from "react"

interface SideBar{
    text:string,
    icon:ReactElement
}

const SideBar = (props:SideBar) => {
  return (
    <button className="flex gap-2 w-full px-4 py-2 cursor-pointer   items-center   text-slate-500">{props.icon?<div className="mr-4">{props.icon}</div>:null}{props.text}</button>
  )
}

export default SideBar