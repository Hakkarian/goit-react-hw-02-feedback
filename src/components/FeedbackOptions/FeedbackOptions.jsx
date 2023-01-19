import PropTypes from 'prop-types';
import { FeedbackButtonCss, FeedbackUlCss } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <FeedbackUlCss>
      <li>
        <FeedbackButtonCss
          type="button"
          onClick={() => onLeaveFeedback(options[0])}
        >
          Good
        </FeedbackButtonCss>
      </li>
      <li>
        <FeedbackButtonCss
          type="button"
          onClick={() => onLeaveFeedback(options[1])}
        >
          Neutral
        </FeedbackButtonCss>
      </li>
      <li>
        <FeedbackButtonCss
          type="button"
          onClick={() => onLeaveFeedback(options[2])}
        >
          Bad
        </FeedbackButtonCss>
      </li>
    </FeedbackUlCss>
  </>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
}
export default FeedbackOptions;