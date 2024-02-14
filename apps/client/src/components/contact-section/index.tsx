import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Form, Input, Typography, Row, Col } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import useMediaQuery from 'use-media-antd-query';


// TODO: React Hook　Formでフォーム作成
// sendgridを利用して自分のGメールに転送するAPIを作成

const { TextArea } = Input;
const { Title } = Typography;

interface FormValue {
  name: string;
  email: string;
  phone: number;
  company: string;
  message: string;
}


export const ContactComponent = () => {
  const colSize = useMediaQuery();
  const {
    control,
    handleSubmit
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <Form
        onFinish={handleSubmit(onSubmit)}
        layout="vertical"
        wrapperCol={{ span: 12 }}
        style={{ padding: '50px 0' }}
      >
        <Row
          justify={{ xs: 'start', lg: 'center', xl: 'center' }}
          align='middle'
        >
          <Col xs={20} lg={18} xl={18} offset={colSize === 'lg' || colSize === 'xl' ? 8 : 2}>
            <Title>Contact</Title>
            {/* 必須：名前 */}
            <Controller
              control={control}
              name='name'
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  label='お名前'
                  name={field.name}
                  validateStatus={error ? 'error' : 'success'}
                  help={error?.message}
                  rules={[{ required: true, message: '名前は必須です' }]}
                >
                  <Input
                    {...field}
                  />
                </Form.Item>
              )}
            />

            {/* 任意：会社名 */}
            <Controller
              control={control}
              name='company'
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  label='会社名'
                  name={field.name}
                  validateStatus={error ? 'error' : 'success'}
                >
                  <Input
                    {...field}
                  />
                </Form.Item>
              )}
            />

            {/* 必須：メールアドレス */}
            <Controller
              control={control}
              name='email'
              rules={{
                required: true,

              }}
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  label='メールアドレス'
                  name={field.name}
                  validateStatus={error ? 'error' : 'success'}
                  help={error?.message}
                  rules={[{ required: true, message: 'メールアドレスは必須です' }]}
                >
                  <Input
                    {...field}
                  />
                </Form.Item>
              )}
            />

            {/* 任意：電話番号 */}
            <Controller
              control={control}
              name='phone'
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  label='電話番号'
                  name={field.name}
                  validateStatus={error ? 'error' : 'success'}
                >
                  <Input
                    {...field}
                  />
                </Form.Item>
              )}
            />

            {/* 必須：お問い合わせ内容 */}
            <Controller
              control={control}
              name='message'
              render={({ field, fieldState: { error } }) => (
                <Form.Item
                  label='お問い合わせ内容'
                  name={field.name}
                  validateStatus={error ? 'error' : 'success'}
                  help={error?.message}
                  rules={[{ required: true, message: 'お問い合わせ内容は必須です' }]}
                >
                  <TextArea
                    {...field}
                  />
                </Form.Item>
              )}
            />

            <Row justify="center">
              <Col xl={18} lg={18} xs={12} offset={colSize === 'lg' || colSize === 'xl' ? 6 : 4}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    shape="round"
                    size='large'
                    icon={<SendOutlined />}
                  >
                    送信
                  </Button>
                </Form.Item>
              </Col>
            </Row>

          </Col>
        </Row>
      </Form>
    </>
  )
}