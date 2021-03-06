import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd';





import './index.less'
import logo from '../../assets/images/logo.png'
import menuList from '../../config/menuConfig';



const { SubMenu } = Menu;


class LeftNav extends Component {

    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList)
    }

    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    getMenuNodes = (menuList) => {

        const path = this.props.location.pathname

        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                if (item.children.find(cItem => path.indexOf(cItem.key) === 0)) {
                    this.openKey = item.key
                }
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <span>{item.title}</span>
                            </span>
                        }
                        icon={item.icon}
                    >
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    render() {

        const selectKey = this.props.location.pathname
        const openKey = this.openKey

        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt="logo" />
                    <h1>尚硅谷后台</h1>
                </Link>

                <div >

                    <Menu
                        defaultSelectedKeys={[selectKey]}
                        defaultOpenKeys={[openKey]}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        {this.menuNodes}

                    </Menu>
                </div>
            </div >
        )
    }
}


export default withRouter(LeftNav)