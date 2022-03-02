import styled from 'styled-components'
import { colors, rounded } from 'utils/styles/base'

export const SidebarItemContainer = styled.li`
position: relative;
    a {
        display: block;
        padding: 16px 24px 16px 16px;
        font-size: 14px;
        color: ${props => props.active ? colors.white : colors.primary};
        margin-bottom: 25px;
        text-align: center;
        border-top-left-radius: ${props => props.active ? rounded.rounded_md : 0};
        border-bottom-left-radius: ${props => props.active ? rounded.rounded_md : 0};
        background-color: ${props => props.active ? colors.background_dark_primary : 'inherit'};

        span {
                display: ${props => props.active ? 'flex' : 'block'};
                align-self: baseline;
                background-color: ${props => props.active ? colors.primary : 'inherit'};
                justify-content: center;
                width: ${props => props.active ? '100%' : 'inherit'};
                padding:${props => props.active ? '16px' : 'inherit'};
                border-radius: ${props => props.active ? rounded.rounded_sm : 0};
            }
    }

    &:last-child {
    & a {
        margin-top: 46px;
        margin-bottom: 0px;
    }
}
`

export const TopCurveContainer = styled.span`
${props => props.active && `
    position: absolute;
    left: 0;
    width: 100%;
    height: 20px;
    background: ${colors.background_dark_primary};
    top: -20px;
    &:before {
        border-bottom-right-radius: ${rounded.rounded_md};
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${colors.background_dark_secondary};
    }
    `
}
`

export const BottomCurveContainer = styled.span`
    ${props => props.active && `
    position: absolute;
    left: 0;
    width: 100%;
    height: 20px;
    background: ${colors.background_dark_primary};
    bottom: -20px;
    &:before {
        border-top-right-radius: ${rounded.rounded_md};
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${colors.background_dark_secondary};
    }
    `
}
    
    `