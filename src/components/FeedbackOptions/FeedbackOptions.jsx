import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import FeedbackItem from './FeedbackItem';
import { FeedbackButtonCss, FeedbackUlCss } from './FeedbackOptions.styled'


const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <FeedbackUlCss>
      {options.map((option) => (
        <li key={nanoid()}>
          <FeedbackItem option={option} onLeaveFeedback={onLeaveFeedback} />
        </li>
      ))}
    </FeedbackUlCss>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf({
    option: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }),

};
export default FeedbackOptions;