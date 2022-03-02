import styled from 'styled-components'
import { colors, rounded } from 'utils/styles/base'

export const SidebarHeaderContainer = styled.header`
     background-color: ${colors.background_dark_secondary};
        height: 10rem;
        padding-top: 24px;
        display: flex;
        justify-content: center;
`

export const SidebarHeaderLogoContainer = styled.span`
     display: flex;
            align-self: baseline;
            background-color: ${colors.primary_accent};
            padding: 8px;
            border-radius: ${rounded.rounded_sm};
    `