import { LogOut } from 'assets/icons'
import { SidebarHeader, SidebarItem } from 'components/atoms'
import { sidebarMenu } from 'routers/sidebarConfig'
import { NavigationContainer, SidebarContainer } from './Sidebar.styled'

const Sidebar = () => {

    return (
        <SidebarContainer>
            <SidebarHeader />
            <NavigationContainer>
                <ul>
                    {sidebarMenu?.map(item => (
                        <SidebarItem key={item.id} title={item.name} icon={item.icon} path={item.path} />
                    ))}
                    <SidebarItem title={'Logout'} icon={<LogOut />} path="/#" />
                </ul>
            </NavigationContainer>
        </SidebarContainer>
    )
}

export default Sidebar