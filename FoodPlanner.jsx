const FoodPlanner = () => {
  let fpSun = ["fiSun1Breakfast", "fiSun2Lunch", "fiSun3ETea", "fiSun4Dinner"];
  let fpMon = ["fiMon1Breakfast", "fiMon2Lunch", "fiMon3ETea", "fiMon4Dinner"];
  let fpTue = ["fiTue1Breakfast", "fiTue2Lunch", "fiTue3ETea", "fiTue4Dinner"];
  let fpWed = ["Wed Breakfast Menu - Milk/Tea, Aloo Paratha", "fiWed2Lunch - Dal Makhni, Naan, Salad", "fiWed3ETea", "fiwed4Dinner"];
  let fpThurs = [
    "fiThurs1Breakfast",
    "fiThurs2Lunch",
    "fiThurs3ETea",
    "fiThurs4Dinner",
  ];
  let fpFri = ["fiFri1Breakfast", "fiFri2Lunch", "fiFri3ETea", "fiFri4Dinner"];
  let fpSat = ["fiSat1Breakfast", "fiSat2Lunch", "fiSat3ETea", "fiSat4Dinner"];

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

  if (curDay == 0)
    return (
      <>
        <div>Food Planner</div>
        <br />
        <div>Today's Date is '{curDate}'</div>
        <div>
          Today is <b style={{ color: "cyan" }}> {week[curDay]}</b>, Today i will
          eat these:
        </div>
        <ol>
          {fpSun.map((item) => (
            <li key={count++}>{item}</li>
          ))}
        </ol>
      </>
    );

  if (curDay == 1)
    return (
      <>
        <div>Food Planner</div>
        <br />
        <div>Today's Date is '{curDate}'</div>
        <div>
          Today is <b style={{ color: "purple" }}> {week[curDay]}</b>, Today i will
          eat these:
        </div>
        <ol>
          {fpMon.map((item) => (
            <li key={count++}>{item}</li>
          ))}
        </ol>
      </>
    );

  if (curDay == 2)
    return (
      <>
        <div>Food Planner</div>
        <br />
        <div>Today's Date is '{curDate}'</div>
        <div>
          Today is <b style={{ color: "red" }}> {week[curDay]}</b>, Today i will
          eat these:
        </div>
        <ol>
          {fpTue.map((item) => (
            <li key={count++}>{item}</li>
          ))}
        </ol>
      </>
    );

  if (curDay == 3)
    return (
      <>
        <div>Food Planner</div>
        <br />
        <div>Today's Date is '{curDate}'</div>
        <div>
          Today is <b style={{ color: "blue" }}> {week[curDay]}</b>, Today i will
          eat these:
        </div>
        <ol>
          {fpWed.map((item) => (
            <li key={count++}>{item}</li>
          ))}
        </ol>
      </>
    );

  if (curDay == 4)
    return (
      <>
        <div>Food Planner</div>
        <br />
        <div>Today's Date is '{curDate}'</div>
        <div>
          Today is <b style={{ color: "orange" }}> {week[curDay]}</b>, Today i will
          eat these:
        </div>
        <ol>
          {fpThurs.map((item) => (
            <li key={count++}>{item}</li>
          ))}
        </ol>
      </>
    );

  if (curDay == 5)
    return (
      <>
        <div>Food Planner</div>
        <br />
        <div>Today's Date is '{curDate}'</div>
        <div>
          Today is <b style={{ color: "yellow" }}> {week[curDay]}</b>, Today i will
          eat these:
        </div>
        <ol>
          {fpFri.map((item) => (
            <li key={count++}>{item}</li>
          ))}
        </ol>
      </>
    );

  if (curDay == 6)
    return (
      <>
        <div>Food Planner</div>
        <br />
        <div>Today's Date is '{curDate}'</div>
        <div>
          Today is <b style={{ color: "green" }}> {week[curDay]}</b>, Today i will
          eat these:
        </div>
        <ol>
          {fpSat.map((item) => (
            <li key={count++}>{item}</li>
          ))}
        </ol>
      </>
    );
};

export default FoodPlanner;
