import React, { useState } from "react";
import { Layout, Steps, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const ITEMS = [
  {
    title: '1995年',
    description: '誕生',
  },
  {
    title: '2018年',
    description: '新卒で入った会社を辞めてプログラミングスクールへ通う。同年、不動産テック企業でフロントエンドエンジニアとしてエンジニアのキャリアをスタート',
  },
  {
    title: '2020年',
    description: 'ふるさと納税ポータルサイトを開発している企業へ転職',
  },
  {
    title: '2024年',
    description: '不動産テック企業へ転職、フルスタックに開発業務へ従事',
  },
]


// TODO: 各ステップのクリックでモーダルが開き詳細情報が閲覧できるようにする
// => 詳細情報はその会社で何をおこなっていたか
// => 職務経歴書の内容でOKだと思う
export const CarrierSection = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  return (
    <Layout>
      <Content>
        <Title>Carrier</Title>
        <Steps
          onChange={onChange}
          responsive
          progressDot
          current={current}
          direction="vertical"
          items={ITEMS}
        />
      </Content>
    </Layout>
  )
}