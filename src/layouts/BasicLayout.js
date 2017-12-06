import React from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import { Link, Route, Redirect, Switch } from 'dva/router';
import styles from './BasicLayout.less';

export default class BasicLayout extends React.Component {

    static childContextTypes =  {
        getRouteData: PropTypes.func,
        history: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.menus = props.navData.reduce((arr, current) => arr.concat(current.children), []);
        this.state = {
          selectedTab: this.getCurrentMenuSelectedKeys(props),
        };
    }

    getChildContext() {
        return {
            getRouteData: this.props.getRouteData,
            history: this.props.history
        }
    }

    handlePress(item) {
        const { history } = this.props
        this.setState({
            selectedTab: item.key,
        });
        history.push({
            pathname: `/${item.path}`
        })
    }

    //根据路由地址返回匹配当前激活的菜单
    getCurrentMenuSelectedKeys(props) {
        const { location: { pathname } } = props || this.props;
        const keys = pathname.split('/').slice(1);
        if (keys.length === 1 && keys[0] === '') {
            return this.menus[0].key;
        }
        return keys[0];
    }

    renderTabBar() {
        const { location, navData, getRouteData } = this.props
        const firstMenuData = navData.reduce((arr, current) => arr.concat(current.children), []);
        const menu = firstMenuData.map(item => {
            return(
                <TabBar.Item
                    title={item.name}
                    key={item.key}
                    icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.default_icon}) center center /  21px 21px no-repeat` }}
                    />
                    }
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.selected_icon}) center center /  21px 21px no-repeat` }}
                    />
                    }
                    selected={this.state.selectedTab === item.key}
                    badge={Math.round(Math.random()*9+1)}
                    onPress={this.handlePress.bind(this, item)}
                >
                    <Switch>
                        {
                            getRouteData('BasicLayout').map(item =>
                                (
                                    <Route
                                        exact={item.exact}
                                        key={item.path}
                                        path={item.path}
                                        component={item.component}
                                    />
                                )
                            )
                        }
                        <Redirect exact from="/" to="/life" />
                    </Switch>
              </TabBar.Item>
            )
        })
        return menu
    }



    render() {
        const { location, history, navData } = this.props
        return (
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
            >
                {this.renderTabBar()}
            </TabBar>
        );
      }
}