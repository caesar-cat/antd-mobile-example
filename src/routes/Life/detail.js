import React from 'react'
import { Icon } from 'antd-mobile'
import HeaderLayout from '../../layouts/HeaderLayout'

export default class Detail extends React.Component{
    render() {
        const { id } = this.props.match.params
        const rightContent = [
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />
        ]
        return (
            <div>
                <HeaderLayout 
                    mode="light"
                    title="详情"
                    rightContent={rightContent}
                    hasBack={true}
                    ifHide={false}
                />
                <div>详情编号:{id}</div>
            </div>
            
        )
    }
}