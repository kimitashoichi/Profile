import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

export const Now: React.FC = () => {
  return (
    <Card title="フルスタックな技術に挑戦" bordered={false}>
      <Paragraph>現在、不動産業界に革新を起こすスタートアップで活動しています。主に利用している言語はフロントエンドからバックエンドまで、すべてTypeScriptです。</Paragraph>
      <Paragraph>技術スタックは、フロントエンドがVite、React、Ant Designを使用しています。バックエンドはHonoとPrismaを採用し、インフラはPulumiとAzureを利用しています。データベースはPlanetScaleを使用しています。</Paragraph>
      <Paragraph>この技術スタックに触れながら、エンジニアとして刺激的な環境で日々努力しています。また、仕様策定や顧客との直接的なコミュニケーションなど、開発業務にとどまらない幅広い業務にも携わっています。</Paragraph>
    </Card>
  )
};

