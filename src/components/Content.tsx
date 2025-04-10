
const Content = (props:{text:string}) => {
  return (
    <div className="h-80 w-72 rounded-xl bg-amber-300">
        <div>{props.text}</div>
    </div>
  )
}

export default Content