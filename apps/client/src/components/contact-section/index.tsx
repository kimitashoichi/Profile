import { useForm, Controller } from 'react-hook-form';
import { Button, Form, Input, Typography, Row, Col, Layout, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import useMediaQuery from 'use-media-antd-query';
import { useState } from 'react';

const { TextArea } = Input;
const { Title } = Typography;

interface FormValue {
  name: string;
  email: string;
  phone: number;
  company: string | undefined;
  message: string;
}

export const ContactComponent = () => {
  const colSize = useMediaQuery();
  const [resetForm, setResetForm] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const {
    control,
    handleSubmit,
  } = useForm<FormValue>();

  const successMessage = () => {
    messageApi.open({
      type: 'success',
      content: 'お問い合わせを送信しました',
    });
  };

  const errorMessage = () => {
    messageApi.open({
      type: 'error',
      content: 'お問い合わせを送信できませんでした。再度お試しください。',
    });
  };

  const buildSlackMessage = (data: FormValue) => {
    const company = data.company ?? '会社名なし';
    const email = data.email
    const message = data.message
    const name = data.name
    const phone = data.phone

    return `
会社名: ${company}\n
メール: ${email}\n
内容: ${message}\n
名前: ${name}\n
電話: ${phone}
    `;
  }

  const postMessage = async (data: FormValue) => {
    const message = buildSlackMessage(data);
    try {
      const response = await fetch('https://new-express-project-navy.vercel.app/sendToSlack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: message })
      });

      if (response.ok) {
        successMessage();
      } else {
        errorMessage();
        console.error('Slackへの通知に失敗しました');
      }
    } catch (error) {
      console.error('Slackへの通知中にエラーが発生しました:', error);
      errorMessage();
    }
  }

  const onSubmit = (data: FormValue) => {
    postMessage(data);
    setResetForm(true);
  };

  return (
    <Layout id='contact'>
      {contextHolder}
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
          <Col xs={20} lg={18} xl={18} offset={colSize === 'lg' || colSize === 'xl' ? 10 : 2}>
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
              rules={{ required: true }}
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

            <Row justify="start">
              <Col xl={20} lg={20} xs={12} offset={colSize === 'lg' || colSize === 'xl' ? 4 : 4}>
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
    </Layout>
  )
}
