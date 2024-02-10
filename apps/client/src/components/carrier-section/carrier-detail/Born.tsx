import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

export const Born: React.FC = () => {
  return (
    <Card title="1995年生まれ、現在28歳">
      <Paragraph>栃木県出身の28歳。小学校から高校まで野球部に所属し、ショートのポジションでプレーしていました。現在の趣味は登山と筋トレです。月に2〜3回、山に出かけています。</Paragraph>
      <Paragraph>自然の中での活動は私にとってリフレッシュの場であり、特に北アプルスに挑戦したいと思っています。最近はゴルフも始めました。自然の中で行うアクティビティが好きです。</Paragraph>
      <Paragraph>私は常に新しいことに挑戦し、成長を続けることを大切にしています。自然とスポーツが私の生活の一部であり、人生を豊かにする要素として大切にしています。</Paragraph>
    </Card>
  )
};