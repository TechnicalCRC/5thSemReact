export default function ItemFruit({Item}) {
  let handleOnClick=()=>{
     alert(Item + " Fruit Added to Cart.....");
  }

  return (
    <li className="list-group-item">{Item}
    <button className="btn btn-info" style={{float:'right'}} onClick={handleOnClick}>Buy</button>
    </li>
  )
}
