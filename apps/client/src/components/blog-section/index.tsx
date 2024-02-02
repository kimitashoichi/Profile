import React from "react";
import { Layout, Button, Card, Flex, Typography, Col, Row } from 'antd';

const cardStyle: React.CSSProperties = {
  width: 620,
};

const imgStyle: React.CSSProperties = {
  display: 'block',
  width: 273,
};


// TODO: 記事情報はQiita APIから取得する
// Zennに移行できるかもテストする
// TODO: それに伴うHooksも作成する
export const BlogComponent = () => {
  return (
    <Layout>
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }}>
          <Card hoverable style={cardStyle} bodyStyle={{ padding: 0, overflow: 'hidden' }}>
            <Flex justify="space-between">
              <img
                alt="avatar"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style={imgStyle}
              />
              <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
                <Typography.Title level={3}>
                  “antd is an enterprise-class UI design language and React UI library.”
                </Typography.Title>
                <Button type="primary" href="https://ant.design" target="_blank">
                  Get Started
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }}>
          <Card hoverable style={cardStyle} bodyStyle={{ padding: 0, overflow: 'hidden' }}>
            <Flex justify="space-between">
              <img
                alt="avatar"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style={imgStyle}
              />
              <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
                <Typography.Title level={3}>
                  “antd is an enterprise-class UI design language and React UI library.”
                </Typography.Title>
                <Button type="primary" href="https://ant.design" target="_blank">
                  Get Started
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}