import { Logo } from 'assets/icons'
import { Link } from 'react-router-dom'
import { SidebarHeaderContainer, SidebarHeaderLogoContainer } from './SidebarHeader.styled'

const SidebarHeader = () => {

    return (
        <SidebarHeaderContainer>
            <SidebarHeaderLogoContainer>
                <Link to={'/'}>
                    <Logo />
                </Link>
            </SidebarHeaderLogoContainer>
        </SidebarHeaderContainer>
    )
}

export default SidebarHeader