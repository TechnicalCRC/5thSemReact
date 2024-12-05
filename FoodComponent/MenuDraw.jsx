import ItemData from "./ItemData";

export default function MenuDraw(props) {

  let {weekData, currentDay, foodMenu} = props
  return (
    <>
      <div className="m-3 fs-2">
        Today is <b style={{ color: "green" }}> {weekData[currentDay]}</b>, Today i will
        eat these:
      </div>
      <ol className="list-group mx-2 bg-secondary">
        {foodMenu[currentDay].map((item) => (
          <ItemData key={item} Item={item}></ItemData>
        ))}
      </ol>
    </>
  );
}
