import PropTypes from 'prop-types';
import classes from './Button.module.scss';

const Button = ({ children, variant, clicked, fullWidth }) => {
    if (variant === 'add') return <button onClick={clicked} className={classes['button-add']} />

    return (
        <button
            onClick={clicked}
            className={classes['default-button']}
            style={fullWidth ? {width: '100%'} : null}
        >
            {children}
        </button>
    );
};

export default Button;

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['default', 'add']),
    clicked: PropTypes.func,
    fullWidth: PropTypes.bool
};

Button.defaultProps = {
    children: '',
    variant: 'default',
    clicked: null,
    foolWidth: false
};