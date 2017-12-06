import react from 'React'
import { Icon } from 'antd-mobile'
import styles from './index.less'
import HeaderLayout from '../../layouts/HeaderLayout'
export default class Koubei extends react.Component{
    constructor(props) {
        super(props)
        this.state = {
            ifHide: false
        }
    }
    render() {
        const rightContent = [
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
        ]
        return (
            <div>
                <HeaderLayout 
                    title="口碑"
                    rightContent={rightContent}
                    hasBack={false}
                    ifHide={this.state.ifHide}
                />
                <p>Koubei</p>
            </div>                
        )
    }

}