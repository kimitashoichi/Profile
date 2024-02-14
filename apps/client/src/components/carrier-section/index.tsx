import React, { useState } from "react";
import { Layout, Steps, Typography, Row, Col } from "antd";
import { AlertOutlined, LaptopOutlined, RocketOutlined, FireOutlined, SyncOutlined } from '@ant-design/icons';
import { Born } from './carrier-detail/Born';
import { School } from './carrier-detail/School';
import { StartEngineer } from './carrier-detail/StartEngineer';
import { HometownTax } from './carrier-detail/HometownTax';
import { Now } from './carrier-detail/Now';
import useMediaQuery from 'use-media-antd-query';

const { Content } = Layout;
const { Title } = Typography;

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
    title: '2023年',
    description: '不動産テック企業へ転職、フルスタックに開発業務へ従事',
    icon: <FireOutlined />
  },
]

export const CarrierSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  // "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  const colSize = useMediaQuery();
  const onChange = (value: number) => {
    setCurrent(value);
  };

  const renderStepContent = () => {
    switch (current) {
      case 0:
        return <Born />;
      case 1:
        return <School />;
      case 2:
        return <StartEngineer />;
      case 3:
        return <HometownTax />;
      case 4:
        return <Now />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Content>
        <Row justify='center'>
          <Col lg={8} xl={8} xs={20} offset={colSize === 'lg' || colSize === 'xl' ? 2 : 0}>
            <Title>Carrier</Title>
            <Steps
              onChange={onChange}
              responsive
              current={current}
              direction="vertical"
              items={ITEMS}
            />
          </Col>
          <Col lg={8} xl={8} xs={20} offset={colSize === 'lg' || colSize === 'xl' ? 2 : 0}>
            <Title>Details</Title>
            {renderStepContent()}
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}