import { GridLayoutContainer } from "./GridLayout.styled"
import PropTypes from 'prop-types'
const GridLayout = ({ children, columns, rows, gap, height, overflow }) => {
    return (
        <GridLayoutContainer columns={columns} rows={rows} gap={gap} height={height} overflow={overflow}>
            {children}
        </GridLayoutContainer>
    )
}

GridLayout.propTypes = {
    columns: PropTypes.string,
    rows: PropTypes.string,
    gap: PropTypes.number,
    height: PropTypes.string,
    overflow: PropTypes.string
}

GridLayout.defaultProps = {
    columns: '1fr',
    rows: '1fr',
    gap: 0,
    height: '100%',
    overflow: 'auto'
}

export default GridLayout