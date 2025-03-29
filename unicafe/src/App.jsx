
import { useState } from "react";

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return <div>No feedback given</div>;
  }

  const total = good + bad + neutral;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? "0%" : `${(good / total) * 100} %`;
  return (
    
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
    
  );
};

const Display = (props) => {
  return <h1>{props.text}</h1>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

// const DisplayButtons = (props) => {
//   return (
//     <p>
//       {props.text} {props.count}
//     </p>
//   );
// };

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [averageTotal, setAverage] = useState(0);

  const handleGoodClick = () => {
    const updateGood = good + 1;
    setGood(updateGood);
    // setTotal(updateGood + bad + neutral);
    // setAverage(averageTotal + 1);
  };

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
    // setTotal(updateNeutral + good + bad);
  };

  const handleBadClick = () => {
    const updateBad = bad + 1;
    setBad(updateBad);
    // setTotal(updateBad + neutral + good);
    // setAverage(averageTotal - 1);
  };

  return (
    <div>
      <Display text="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Display text="show statistics" />
      {/* <DisplayButtons text="good" count={good} />
      <DisplayButtons text="neutral" count={neutral} />
      <DisplayButtons text="bad" count={bad} />
      <p>all {total}</p>
      <p>average {averageTotal / total}</p>
      <p>positive {(good / total) * 100} %</p> */}
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;