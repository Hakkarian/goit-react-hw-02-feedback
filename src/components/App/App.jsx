import { nanoid } from "nanoid";
import FeedbackOptions from "components/FeedbackOptions";
import Section from "components/Section";
import Statistics from "components/Statistics";
import Notification from "components/Statistics/Notification";

const { Component, useState, useRef } = require("react");


const App = () => {

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const leaveFeedback = name => {
    const value = name.option;

    console.log(name.option)

    setState(prevState => ({...state, [value]: prevState[value] + 1}))

  }

  const countTotalFeedback = () => {
    const total = state.good + state.neutral + state.bad;
    console.log(state.neutral)
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (!total) return 0;

    const result = ((state.good / total) * 100).toFixed(0);
    return result;
  }

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          {" "}
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />{" "}
        </Section>
      ) : (
        <Notification title="There is no feedback" />
      )}
    </>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   id = nanoid();
//   leaveFeedback = (propName) => {
//     const value = propName.option;
//     console.log(propName)
//       this.setState((prevState) => ({ [value]: prevState[value] + 1}))
//   }
    
//     countTotalFeedback = () => {
//         const total = this.state.good + this.state.neutral + this.state.bad
//         return total;
//     }

//     countPositiveFeedbackPercentage = propName => {
//         const total = this.countTotalFeedback();

//         if (!total) return 0;

//         const value = this.state.good;
//         const expression = ((value / total) * 100).toFixed(0);

//         return expression;

//     };
//     ifExists = propName => this.state[propName] > 0 

//   render() {
//         const total = this.countTotalFeedback();
//         const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <>
//         <Section title="Please leave a feedback">
//           <FeedbackOptions id={this.id} options={Object.keys(this.state)} onLeaveFeedback={this.leaveFeedback} />
//         </Section>
//                 {total > 0 ? <Section title="Statistics"> <Statistics
//                     good={this.state.good}
//                     neutral={this.state.neutral}
//                     bad={this.state.bad}
//                     total={total}
//                     positivePercentage={positivePercentage}
//                 /> </Section> : <Notification title="There is no feedback" />}
//       </>
//     );
//   }
// }

export default App;
