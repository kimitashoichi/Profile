import React from 'react'
import { Layout, Col, Row, Image, Typography } from 'antd'
import useMediaQuery from 'use-media-antd-query';


const { Content } = Layout;
const { Title, Paragraph } = Typography;

export const Top = () => {
  const colSize = useMediaQuery();

  return (
    <Layout style={{
      padding: (colSize === 'lg' || colSize === 'xl') ? '10%' : '24px',
      position: 'relative'
    }}>
      <Content>
        <Row
          align='middle' justify='center'>
          <Col xl={10} lg={10}>
            <Title level={1}>Welcome To My Profile Site!</Title>
            <Title level={3}>フルスタック技術で成長し続ける{colSize === 'lg' || colSize === 'xl' ? <br /> : null}自走型エンジニア</Title>
            <Paragraph>プログラミングスクールからエンジニアに転職し、現在は不動産マッチングプラットフォームのWEBアプリケーションをフルスタックに開発しています。フロントエンド、バックエンド、インフラまで幅広く対応し、常に新しい技術を学びながら成長し続けています。</Paragraph>
          </Col>
          <Col xl={8} lg={8} offset={colSize === 'lg' || colSize === 'xl' ? 1 : 0}>
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