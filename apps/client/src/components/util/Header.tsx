import React from 'react'
import { Layout } from 'antd';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { CodeOutlined, DesktopOutlined, ReadOutlined, AlertOutlined, MailOutlined } from '@ant-design/icons';


const { Header } = Layout;
const items: MenuProps['items'] = [
  {
    label: 'Career',
    key: 'career',
    icon: <AlertOutlined />,
  },
  {
    label: 'Skills',
    key: 'skills',
    icon: <CodeOutlined />,
  },
  {
    label: 'Achievements',
    key: 'achievements',
    icon: <DesktopOutlined />,
  },
  {
    label: 'Blogs',
    key: 'blogs',
    icon: <ReadOutlined />,
  },
  {
    label: 'Contact',
    key: 'contact',
    icon: <MailOutlined />,
  },
];



export const HeaderComponent = () => {
  return (
    <Header style={{ backgroundColor: 'white' }}>
      <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <div>
          Shoichi Kimita
        </div>
        <Menu mode="horizontal" items={items} />
      </div>
    </Header>
  )
}