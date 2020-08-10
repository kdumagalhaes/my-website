import React from 'react'
import {MenuItemLi} from './MenuItemStyles'

const MenuItem = ({text, href, fontColor}) => {
    return (
        <MenuItemLi fontColor={fontColor}>
        <a href={href}>{text}</a>
        </MenuItemLi>
    )
}

export default MenuItem