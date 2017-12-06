import { NavBar, Icon } from 'antd-mobile';
import React from 'react';
import PropTypes from 'prop-types'
import styles from './HeaderLayout.less';

export default class HeaderLayout extends React.Component {

    static contextTypes = {
        history: PropTypes.object
    }

    onLeftClick() {
        const { history } = this.context
        history.goBack()
    }

    render() {
        const { title, hasBack, rightContent, mode, onLeftClick } = this.props
        return (
            <div>
                <NavBar
                    mode={mode || "dark"}
                    onLeftClick={onLeftClick || this.onLeftClick.bind(this)}
                    leftContent={hasBack? '返回': ''}
                    rightContent={rightContent}
                >
                    {title}
                </NavBar>
                {this.props.children? this.props.children: ''}
            </div>
        )
    }

}