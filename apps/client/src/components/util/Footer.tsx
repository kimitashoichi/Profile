import { Layout } from 'antd';

const { Footer } = Layout;

export const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: 'left' }}>
      ©{new Date().getFullYear()} Created by Shoichi Kimita
    </Footer>
  )
}