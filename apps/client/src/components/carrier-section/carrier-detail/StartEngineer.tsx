import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

export const StartEngineer: React.FC = () => {
  return (
    <Card title="エンジニアとしてのキャリアをスタート！">
      <Paragraph>研究開発本部に所属しており、自社プロダクトの開発とユーザー行動の可視化に従事していました。主な業務は新機能の追加開発やプロダクトのリニューアル、デモ版の開発でした。</Paragraph>
      <Paragraph>技術面ではTypeScriptとAngularを使用し、ユーザー行動の可視化にはGoogleTagManagerを活用しました。<br/>また、自社プロダクトのマーケティング業務も担当し、紹介資料の作成やWEBサイトのフォーム設置、セミナーの企画・運営、メールマーケティングなどを行いました。</Paragraph>
      <Paragraph>業務実績としては、WEBサイトのフォーム設置により新規リード獲得チャネルを拡大し、GoogleTagManagerの導入でユーザー行動を可視化しました。</Paragraph>
    </Card>
  )
};