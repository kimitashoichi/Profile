import { CSSProperties } from 'react';
import { Layout, Progress, Typography, Col, Row } from 'antd';

const { Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const style: CSSProperties = { padding: '8px' };
const conicColors = { '0%': '#87d068', '50%': '#ffe58f', '100%': '#ffccc7' };
const items = [
  {
    name: 'JavaScript',
    percent: 50,
    strokeColor: { '0%': '#87d068', '50%': '#ffe58f', '100%': '#ffccc7' }
  },
  {
    name: 'JavaScript',
    percent: 50,
    strokeColor: { '0%': '#87d068', '50%': '#ffe58f', '100%': '#ffccc7' }
  },
  {
    name: 'JavaScript',
    percent: 50,
    strokeColor: { '0%': '#87d068', '50%': '#ffe58f', '100%': '#ffccc7' }
  },
  {
    name: 'JavaScript',
    percent: 50,
    strokeColor: { '0%': '#87d068', '50%': '#ffe58f', '100%': '#ffccc7' }
  },
  {
    name: 'JavaScript',
    percent: 50,
    strokeColor: { '0%': '#87d068', '50%': '#ffe58f', '100%': '#ffccc7' }
  },
  {
    name: 'JavaScript',
    percent: 50,
    strokeColor: { '0%': '#87d068', '50%': '#ffe58f', '100%': '#ffccc7' }
  }
]

export const SkillMapComponent = () => {
  return (
    <Layout>
      <Title>Skills</Title>
      <Content>
        <Row>
          {items.map((item) => {
            return (
              <Col span={8} style={style}>
                <Title level={3}>{item.name}</Title>
                <Progress
                  percent={item.percent}
                  status="active"
                  strokeColor={item.strokeColor}
                />
              </Col>
            )
          })}
        </Row>
      </Content>
    </Layout>
  )
}