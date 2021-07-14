import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ThunderboltOutlined } from '@ant-design/icons'


import memoryUtils from '../../utils/memoryUtils'
import formateDate from '../../utils/dateUtils'
import menuList from '../../config/menuConfig'
import LinkButton from '../link-button'
import './index.css'

class Header extends Component {

    state = {
        currentTime: formateDate(Date.now()),
    }

    getTime = () => {
        // 每隔1s获取当前时间, 并更新状态数据currentTime
        this.intervalId = setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({ currentTime })
        }, 1000)
    }


    getTitle = () => {
        // 得到当前请求路径
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if (item.key === path) { // 如果当前item对象的key与path一样,item的title就是需要显示的title
                title = item.title
            } else if (item.children) {
                // 在所有子item中查找匹配的
                const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0)
                // 如果有值才说明有匹配的
                if (cItem) {
                    // 取出它的title
                    title = cItem.title
                }
            }
        })
        return title
    }

    componentDidMount() {
        // 获取当前的时间
        this.getTime()
    }

    render() {
        const { currentTime } = this.state
        const username = memoryUtils.user.username
        const title = this.getTitle()

        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎, {username}</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span> &nbsp;
                        <ThunderboltOutlined /> &nbsp;
                        <span>雷暴天气</span>
                    </div>
                </div>
            </div>
        )
    }
}






export default withRouter(Header)