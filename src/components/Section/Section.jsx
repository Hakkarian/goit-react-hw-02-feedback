import PropTypes from 'prop-types';
import { SectionCss } from './Section.styled';

const Section = ({title, children}) => <SectionCss>
    <h2>{title}</h2>
    {children}
</SectionCss>

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
}

export default Section;