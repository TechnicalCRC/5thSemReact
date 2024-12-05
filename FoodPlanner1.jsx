const FoodPlanner1 = () => {
  let fp = [
    ["fiSun1Breakfast", "fiSun2Lunch", "fiSun3ETea", "fiSun4Dinner"],
    ["fiMon1Breakfast", "fiMon2Lunch", "fiMon3ETea", "fiMon4Dinner"],
    ["fiTue1Breakfast", "fiTue2Lunch", "fiTue3ETea", "fiTue4Dinner"],
    [
      "Wed Breakfast Menu - Milk/Tea, Aloo Paratha",
      "fiWed2Lunch - Dal Makhni, Naan, Salad",
      "fiWed3ETea",
      "fiwed4Dinner",
    ],
    ["fiThurs1Breakfast", "fiThurs2Lunch", "fiThurs3ETea", "fiThurs4Dinner"],
    ["fiFri1Breakfast", "fiFri2Lunch", "fiFri3ETea", "fiFri4Dinner"],
    ["fiSat1Breakfast", "fiSat2Lunch", "fiSat3ETea", "fiSat4Dinner"],
  ];

  let curDate =
    new Date().getDate() +
    " - " +
    (new Date().getMonth() + 1) +
    " - " +
    new Date().getFullYear();

  let curDay = new Date().getDay();

  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let count = 0;

    return (
      <>
        <div>Food Planner</div>
        <br />
        <div>Today's Date is '{curDate}'</div>
        <div>
          Today is <b style={{ color: "green" }}> {week[curDay]}</b>, Today i
          will eat these:
        </div>
        <ol>
          {fp[curDay].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </>
    );
};

export default FoodPlanner1;
