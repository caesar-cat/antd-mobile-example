import react from 'React'
import { Icon } from 'antd-mobile'
import styles from './index.less'
import HeaderLayout from '../../layouts/HeaderLayout'
import Chart from '../../components/Charts/index'
export default class Friend extends react.Component{
    render() {
        const rightContent = [
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
        ]
        return (
            <div>
                <HeaderLayout 
                    title="朋友"
                    rightContent={rightContent}
                    hasBack={false}
                />
                <Chart/>
            </div>
        )
    }

}