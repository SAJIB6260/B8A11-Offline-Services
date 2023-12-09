import PropTypes from 'prop-types';

const MainLayout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MainLayout;

MainLayout.propTypes = {
    children : PropTypes.node
}