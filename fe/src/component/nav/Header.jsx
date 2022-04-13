import React,{useState} from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState('');
  const handleClick = ()=>{

  }
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="mail" icon={<MailOutlined />} className="">
          Home
        </Menu.Item>
      </Menu>
  )
}
export default Header
