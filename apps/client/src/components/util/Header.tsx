import { useState } from 'react'
import { Layout } from 'antd';
import { MenuProps, Menu, Drawer, Button } from 'antd';
import { CodeOutlined, ReadOutlined, AlertOutlined, MailOutlined, MenuOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
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
  console.log(colSize)

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
          >Shoichi Kimita</div>
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
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 16
            }}
          >Shoichi Kimita</div>
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