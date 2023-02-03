import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import FeedbackItem from './FeedbackItem';
import { FeedbackButtonCss, FeedbackUlCss } from './FeedbackOptions.styled'


const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <FeedbackUlCss>
      {options.map((option) => (
        <li key={option.toString()}>
          <FeedbackItem option={option} onLeaveFeedback={onLeaveFeedback} />
        </li>
      ))}
    </FeedbackUlCss>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

};
export default FeedbackOptions;
