import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

export const HometownTax: React.FC = () => {
  return (
    <Card title="エンジニアとして初の転職" bordered={false}>
      <Paragraph>開発部に所属し、フロントエンド開発を担当していました。主な使用技術はJavaScript、HTML、SCSSです。業務内容は新機能の追加開発、バグ修正、リファクタリングなどでした。</Paragraph>
      <Paragraph>業務実績としては、新規機能の追加実装を主導しました。また、JavaScriptファイルのドキュメント化を行い、コードの知識を共有化する取り組みを行いました。</Paragraph>
      <Paragraph>さらに、バックエンドとのデータのやり取りをドキュメント化し、APIでない場合のデータ確認にかかるコミュニケーションコストを削減するために定義所を作成しました。これにより、開発の効率向上に貢献しました。</Paragraph>
    </Card>
  )
};