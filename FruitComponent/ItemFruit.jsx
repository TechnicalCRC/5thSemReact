const ItemFruit = ({Item}) => {

  function handleOnClick(){
      alert(Item + " fruit addedd to Cart....")
  }

  return (
    <li className="list-group-item">{Item}
    
    <button className="btn btn-info" style={{width:'50px', float:'right'}} onClick={handleOnClick}>Buy</button>
    
    </li>
  )
}

export default ItemFruit