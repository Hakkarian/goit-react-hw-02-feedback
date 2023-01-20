import PropTypes from 'prop-types';

const { FeedbackButtonCss } = require("../FeedbackOptions.styled");


const FeedbackItem = ({option, onLeaveFeedback}) => (
  <FeedbackButtonCss type="button" onClick={() => onLeaveFeedback({option})}>
    {option}
  </FeedbackButtonCss>
);

FeedbackItem.propTypes = {
    option: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackItem;