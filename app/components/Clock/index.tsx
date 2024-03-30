import React from "react";

const Clock: React.FC = () => {
  const [date, setDate] = React.useState(new Date());

  /**
   * Date Card
   */
  function tick() {
    setDate(new Date());
  }

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [date]);

  return (
    <>
      <div className="">
        <div className="hora">
          {`${date.toLocaleTimeString("en-US", {
            hour12: false,
          })}`}
        </div>
      </div>
      <div className="">
        {" "}
        <div className="data">{`${
          date.toLocaleDateString("pt-BR") + " UTC"
        }`}</div>
      </div>
    </>
  );
};

export default Clock;
