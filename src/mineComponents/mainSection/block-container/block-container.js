import './block-container.css'
export function BlockContainer(props){
  return(
    <div className={`block`} id={props.className}>
      <h3>{props.heading}</h3>
      <span>{props.children}</span>
    </div>
  )
}
