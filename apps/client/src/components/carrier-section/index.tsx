import React, { useState } from "react";
import { Layout, Steps, Typography, Row, Col, Modal } from "antd";
import { AlertOutlined, LaptopOutlined, RocketOutlined, FireOutlined, SyncOutlined } from '@ant-design/icons';
import { Born } from './carrier-detail/Born';

const { Step } = Steps;

// modal

const { Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const ITEMS = [
  {
    title: '1995年',
    description: '誕生',
    icon: <AlertOutlined />,
  },
  {
    title: '2018年',
    description: '新卒で入った会社を辞めてプログラミングスクールへ通う。',
    icon: <LaptopOutlined />
  },
  {
    title: '2018年',
    description: '不動産テック企業でフロントエンドエンジニアとしてエンジニアのキャリアをスタート',
    icon: <RocketOutlined />
  },
  {
    title: '2020年',
    description: 'ふるさと納税ポータルサイトを開発している企業へ転職',
    icon: <SyncOutlined />
  },
  {
    title: '2024年',
    description: '不動産テック企業へ転職、フルスタックに開発業務へ従事',
    icon: <FireOutlined />
  },
]


const Step1Content = () => (
  <div>
    Step 1 Content
  </div>
);

const Step2Content = () => (
  <div>
    Step 2 Content
  </div>
);

const Step3Content = () => (
  <div>
    Step 3 Content
  </div>
);


export const CarrierSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value: number) => {
    // 引数はステップアイテム配列のindex番号だけを受け取ることができる
    console.log('onChange:', value);
    setCurrent(value);
  };


  const renderStepContent = () => {
    switch (current) {
      case 0:
        return <Born />;
      case 1:
        return <Step2Content />;
      case 2:
        return <Step3Content />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Content>
        <Row justify='center'>
          <Col span={10} offset={1}>
            <Title>Carrier</Title>
            <Steps
              onChange={onChange}
              responsive
              current={current}
              direction="vertical"
              items={ITEMS}
            />
          </Col>
          <Col span={10} offset={1}>
            <Title>Details</Title>
            {renderStepContent()}
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}