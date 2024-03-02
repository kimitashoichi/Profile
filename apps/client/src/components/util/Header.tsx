import { useState } from 'react'
import { Layout, MenuProps, Menu, Drawer, Button, Space } from 'antd';
import { CodeOutlined, ReadOutlined, AlertOutlined, MailOutlined, MenuOutlined, MenuUnfoldOutlined, TwitterOutlined, GithubOutlined } from '@ant-design/icons';
import useMediaQuery from 'use-media-antd-query';
import { scroller } from 'react-scroll';


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
  // NOTE: 成果物ができあがれば追加するセクション
  // {
  //   label: 'Achievements',
  //   key: 'achievements',
  //   icon: <DesktopOutlined />,
  // },
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
  const [drawerVisible, setDrawerVisible] = useState(false);
  // "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  const colSize = useMediaQuery();

  const handleClick = (e: any) => {
    const itemId = e.key;
    if (itemId) {
      scrollTo(itemId);
      toggleDrawer();
    }
  };

  const scrollTo = (itemId: string) => {
    scroller.scrollTo(itemId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -46
    });
  }

  const handleOpenWindow = (url: string) => {
    window.open(url, '_blank');
  }

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        backgroundColor: 'white'
      }}
    >
      {colSize !== 'xs' ?
        <>
          <div
            style={{
              position: 'absolute',
              top: 0
            }}
          >
            <Space>
              Shoichi Kimita
              <Button
                shape="circle"
                icon={<TwitterOutlined />}
                onClick={() => handleOpenWindow('https://twitter.com/kimi_koma1111')}
              />
              <Button
                shape='circle'
                icon={<GithubOutlined />}
                onClick={() => handleOpenWindow('https://github.com/kimitashoichi')}
              />
            </Space>
          </div>
          <Menu
            mode="horizontal"
            items={items}
            overflowedIndicator={<MenuOutlined />}
            style={{
              justifyContent: 'end',
              flex: "auto"
            }}
            onClick={handleClick}
          />
        </>
        :
        <>
          <Button
            onClick={toggleDrawer}
            shape="round"
            icon={<MenuUnfoldOutlined />}
            style={{
              position: 'absolute',
              top: 15,
              left: 15
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 16
            }}
          >
            <Space>
              Shoichi Kimita
              <Button
                shape="circle"
                icon={<TwitterOutlined />}
                onClick={() => handleOpenWindow('https://twitter.com/kimi_koma1111')}
              />
              <Button
                shape='circle'
                icon={<GithubOutlined />}
                onClick={() => handleOpenWindow('https://github.com/kimitashoichi')}
              />
            </Space>
          </div>
          <Drawer
            title="Menu"
            placement="left"
            onClose={toggleDrawer}
            open={drawerVisible}
          >
            <Menu mode="vertical" items={items} onClick={handleClick} />
          </Drawer>
        </>
      }
    </Header>
  )
}