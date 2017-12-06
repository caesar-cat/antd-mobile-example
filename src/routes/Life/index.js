import react from 'React'
import { Icon } from 'antd-mobile'
import PropTypes from 'prop-types';
import { Link, Route, Redirect, Switch } from 'dva/router';
import styles from './index.less'
import HeaderLayout from '../../layouts/HeaderLayout'
export default class Life extends react.Component{
    static contextTypes = {
        getRouteData: PropTypes.func
    }

    getMenuData (data) {
        const parentPath = this.props.match.path
        return data.map(item => {
            item.path = `${parentPath}/${item.path}`
            return item
        })
    }
    render() {
        const lifeNavData = this.context.getRouteData('BasicLayout').find(item => item.key === 'life')
        const menuData = this.getMenuData(lifeNavData.children)
        return (
            <Switch>
                {
                    menuData.map(item =>
                        (
                            <Route
                                key={item.path}
                                path={item.path}
                                exact={true}
                                component={item.component}
                            />
                        )
                    )
                }
            </Switch>            
        )
    }

}