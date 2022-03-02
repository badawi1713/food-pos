import styled from 'styled-components'
import { colors, rounded } from 'utils/styles/base'

export const SidebarContainer = styled.aside`
width: 11rem;
height: 100%;
overflow: hidden;
background-color: ${colors.background_dark_secondary};
border-top-right-radius: ${rounded.rounded_md};
border-bottom-right-radius: ${rounded.rounded_md};
`

export const NavigationContainer = styled.nav`
    &::-webkit-scrollbar {
    display: none;
    }
     -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: auto;
    background-color: ${colors.background_dark_secondary};
    height: calc(100% - 10rem);
    padding: 16px 0;
    border-left: 12px solid ${colors.background_dark_secondary};
`