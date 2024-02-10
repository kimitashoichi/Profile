import React from 'react'
import { Layout, Col, Row } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'
import { useSpring, animated } from '@react-spring/web'

const { Content } = Layout;

export const Top = () => {
  const props = useSpring({
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
    config: { tension: 300, friction: 20 },
    loop: true,
  })

  return (
    <Layout style={{
      padding: '10%',
      position: 'relative'
    }}>
      <Content>
        <Row>
          <Col span={14}>
            <div style={{
              margin: '0 20%'
            }}>
              <h1>Sampleサイトタイトル</h1>
              <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
            </div>
          </Col>
          <Col span={10}>
            <img src='/logo192.png' />
          </Col>
        </Row>
        <ArrowDownOutlined
          style={{
            position: 'absolute',
            bottom: 24,
            right: '50%'
          }}
        />
        <animated.div style={props}>
          <div style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}>
            Bouncing Content
          </div>
        </animated.div>
      </Content>
    </Layout>
  )
}