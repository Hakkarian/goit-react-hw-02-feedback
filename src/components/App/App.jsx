import FeedbackOptions from "components/FeedbackOptions";
import Section from "components/Section";
import Statistics from "components/Statistics";

const { Component } = require("react");


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
    leaveFeedback = (propName) => {
        console.log(this);
      this.setState((prevState) => ({ [propName]: prevState[propName] + 1 }));
  }
    
    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad
        return total;
    }

    countPositiveFeedbackPercentage = propName => {
        const total = this.countTotalFeedback();

        if (!total) return 0;

        const value = this.state.good;
        const expression = ((value / total) * 100).toFixed(0);

        return expression;

    };
    ifExists = propName => this.state[propName] > 0 

    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.leaveFeedback} />
        </Section>
                {total > 0 && <Section title="Statistics"> <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={total}
                    positivePercentage={positivePercentage}
                /> </Section>}
      </>
    );
  }
}

export default App;