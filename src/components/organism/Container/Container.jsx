import PropTypes from 'prop-types'
import { ContainerBox } from './Container.styled'
const Container = ({ children, padding, paddingTop, paddingBottom, paddingRight, paddingLeft, variant, margin, marginBottom, marginLeft, marginRight, marginTop }) => {
    return (
        <ContainerBox variant={variant} padding={padding} paddingTop={paddingTop} paddingBottom={paddingBottom} paddingRight={paddingRight} paddingLeft={paddingLeft}
            margin={margin} marginBottom={marginBottom} marginTop={marginTop} marginLeft={marginLeft} marginRight={marginRight}
        >
            {children}
        </ContainerBox>
    )
}

Container.propTypes = {
    children: PropTypes.node,
    padding: PropTypes.number,
    paddingTop: PropTypes.number, paddingBottom: PropTypes.number,
    paddingRight: PropTypes.number, paddingLeft: PropTypes.number, variant: PropTypes.string,
    margin: PropTypes.number,
    marginTop: PropTypes.number, marginBottom: PropTypes.number,
    marginRight: PropTypes.number, marginLeft: PropTypes.number, 
}

Container.defaultProps = {
    children: <></>,
    padding: 0,
    paddingTop: 0, paddingBottom: 0,
    paddingRight: 0, paddingLeft: 0,
    margin: 0,
    marginTop: 0, marginBottom: 0,
    marginRight: 0, marginLeft: 0,
    variant: 'default'
}

export default Container