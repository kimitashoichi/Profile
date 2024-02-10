import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

export const School: React.FC = () => {
  return (
    <Card title="エンジニアを目指して勉強の日々">
      <Paragraph>営業職で仕事をしてきましたが、エンジニアへの転身を志すことに決めました。なぜなら、あるものを売るだけでなく、その作り手になりたいと強く感じるようになったからです。</Paragraph>
      <Paragraph>もともと何かを作るのが好きで、営業職でのIT企業との会話を通じても、自分が提供する価値をより直接的に生み出したいと思うようになりました。</Paragraph>
      <Paragraph>キャリアチェンジするなら行動は早い方が良いと考え、約10ヶ月で新卒で入社した会社を辞め、プログラミングスクールに通いました。そこでは毎日が新たな発見と学びに満ち溢れ自分にとってエンジニアへの転身を決めたことは間違いのない選択だったと思えた期間でした。</Paragraph>
    </Card>
  )
};