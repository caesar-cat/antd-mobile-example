import react from 'React'
import { Icon } from 'antd-mobile'
import styles from './index.less'
import HeaderLayout from '../../layouts/HeaderLayout'
export default class My extends react.Component{
    render() {
        return (
            <div>
                <HeaderLayout 
                    title="我的"
                    hasBack={false}
                />
                <p>My</p>
            </div>
        )
    }

}