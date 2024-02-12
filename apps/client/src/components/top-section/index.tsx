import React from 'react'
import { Layout, Col, Row, Image, Typography } from 'antd'

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export const Top = () => {

  return (
    <Layout style={{
      padding: '10%',
      position: 'relative'
    }}>
      <Content>
        <Row
          align='middle' justify='center'>
          <Col span={10}>
            <Title level={1}>Welcome To My Profile Site!</Title>
            <Title level={3}>フルスタック技術で成長し続ける<br />自走型エンジニア</Title>
            <Paragraph>プログラミングスクールからエンジニアに転職し、現在は不動産マッチングプラットフォームのWEBアプリケーションをフルスタックに開発しています。フロントエンド、バックエンド、インフラまで幅広く対応し、常に新しい技術を学びながら成長し続けています。</Paragraph>
          </Col>
          <Col span={8} offset={1}>
            <Image
              src='/profile.png'
              preview={false}
              style={{ borderRadius: '32px' }}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}