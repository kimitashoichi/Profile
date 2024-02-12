import { CSSProperties } from 'react';
import { Layout, Progress, Typography, Col, Row, Flex } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const style: CSSProperties = { padding: '8px' };
const conicColors = { '0%': '#87d068', '50%': '#ffe58f', '100%': '#ffccc7' };
const twoColors = { '0%': '#108ee9', '100%': '#87d068' };


const LANGUAGE_LIST = [
  {
    name: 'JavaScript',
    percent: 80,
    experience: 3,
    work: ['ふるさと納税ポータルサイトの開発', 'Google App Scriptを用いた社内システム開発']
  },
  {
    name: 'TypeScript',
    percent: 80,
    experience: 3,
    work: ['toB WEBアプリケーションのフロント(SPA)開発', 'toB WEBアプリケーションのAPI開発']
  },
  {
    name: 'Python',
    percent: 50,
    experience: 1,
    work: ['社内業務効率化のためのシステム開発']
  },
  {
    name: 'MySQL',
    percent: 50,
    experience: 1,
    work: ['toB WEBアプリケーションのバックエンド開発', '社内データの分析のための可視化']
  },
];

const TECHNOLOGY_LIST = [
  {
    name: 'React',
    percent: 70,
    experience: 1,
    work: ['toB WEBアプリケーションのフロント開発']
  },
  {
    name: 'Hono',
    percent: 70,
    experience: 1,
    work: ['toB WEBアプリケーションのAPI開発']
  },
  {
    name: 'Azure',
    percent: 50,
    experience: 1,
    work: ['toB WEBアプリケーションのインフラ構築']
  },
  {
    name: 'Pulumi',
    percent: 70,
    experience: 1,
    work: ['toB WEBアプリケーションのインフラ構築']
  },
  {
    name: 'Github Actions',
    percent: 60,
    experience: 1,
    work: ['デプロイの自動化', 'テストの自動化', 'インフラ反映の自動化']
  },
];

const circleStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
}

export const SkillMapComponent = () => {
  return (
    <Layout>
      <Title style={{ width: '90%', margin: '24px auto 0' }}>Skill Map</Title>
      <Content style={{ margin: '0 auto', width: '90%' }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {LANGUAGE_LIST.map((language) => {
            return (
              <Col span={8} style={style}>

                {/* TODO: スキル表示コンポーネントに切り出す */}
                <Flex>
                  <Progress
                    percent={language.percent}
                    status="active"
                    type="circle"
                    style={circleStyle}
                    strokeColor={conicColors}
                  />
                  <Flex vertical style={{ padding: 32 }}>
                    <Title level={3}>{language.name}</Title>
                    <Paragraph style={{ marginBottom: 0 }}>経験年数：{language.experience}年</Paragraph>
                    <ul style={{ padding: 0 }}>
                      {language.work?.map((value) => {
                        return (
                          <li>{value}</li>
                        )
                      })}
                    </ul>
                  </Flex>
                </Flex>

              </Col>
            )
          })}
        </Row>
      </Content>

      <Content style={{ margin: '0 auto', width: '90%' }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {TECHNOLOGY_LIST.map((item) => {
            return (
              <Col span={8} style={style}>

                {/* TODO: スキル表示コンポーネントに切り出す */}
                <Flex>
                  <Progress
                    percent={item.percent}
                    status="active"
                    type="circle"
                    style={circleStyle}
                    strokeColor={twoColors}
                  />
                  <Flex vertical style={{ padding: 32 }}>
                    <Title level={3}>{item.name}</Title>
                    <Paragraph style={{ marginBottom: 0 }}>経験年数：{item.experience}年</Paragraph>
                    <ul style={{ padding: 0 }}>
                      {item.work?.map((value) => {
                        return (
                          <li>{value}</li>
                        )
                      })}
                    </ul>
                  </Flex>
                </Flex>

              </Col>
            )
          })}
        </Row>
      </Content>
    </Layout>
  )
}