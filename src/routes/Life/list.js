import React from 'react';
import { Grid, Icon } from 'antd-mobile';
import { WingBlank } from 'antd-mobile';
import HeaderLayout from '../../layouts/HeaderLayout'

export default class LifeList extends React.Component{

    handleClick(el, index) {
        const { history } = this.props 
        history.push({
            pathname: `/life/detail/${el.id}`
        })
    }
    
    render() {
        const data = Array.from(new Array(9)).map((_val, i) => ({
            id: i,
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: `name${i}`
        }));
        const rightContent = [
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />
        ]
        return(
            <div>
                <HeaderLayout 
                    title="生活"
                    rightContent={rightContent}
                    hasBack={false}
                />
                <WingBlank>
                    <Grid data={data} activeStyle={false} onClick={this.handleClick.bind(this)}/>            
                </WingBlank>
            </div>
        )
    }
}