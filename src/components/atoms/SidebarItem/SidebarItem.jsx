import { About } from 'assets/icons'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { BottomCurveContainer, SidebarItemContainer, TopCurveContainer } from './SidebarItem.styled'
const SidebarItem = ({ title, icon, path }) => {
    const url = useLocation()

    return (
        <SidebarItemContainer title={title} active={url.pathname === path}>
            <TopCurveContainer active={url.pathname === path} />
            <Link to={path}>
                <span>
                    {icon}
                </span>
            </Link>
            <BottomCurveContainer active={url.pathname === path} />
        </SidebarItemContainer>
    )
}

SidebarItem.defaultProps = {
    title: "Title",
    icon: About,
    path: '/'
}

SidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    path: PropTypes.string.isRequired
}

export default SidebarItem