function Character(props) {
  return (
    <div className="text-center p-5">
      <h2>{props.user.name}</h2>
      <img className="img-fluid rounded-pill" src={props.user.image}></img>
      <p>{props.user.origin.name}</p>
    </div>
  )
}

export default Character
