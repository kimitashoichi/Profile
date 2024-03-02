import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Form, Input, Typography, Row, Col, Layout } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import useMediaQuery from 'use-media-antd-query';
import axios from 'axios';



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
  const [data, setData] = useState();
  const {
    control,
    handleSubmit
  } = useForm();

  const postMessage = async (data: any) => {
    fetch('https://profile-api-83e3f.firebaseapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: data.email })
    })
      .then(response => {
        if (response.ok) {
          console.log('Slackに通知が送信されました');
        } else {
          console.error('Slackへの通知に失敗しました');
        }
      })
      .catch(error => {
        console.error('Slackへの通知中にエラーが発生しました:', error);
      });
  }

  const postContact = async (data: any) => {
    try {
      const webhookUrl = 'https://hooks.slack.com/services/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';

      await axios.post(webhookUrl, {
        text: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        }
      });

      console.log('Slack通知が送信されました');
    } catch (error) {
      console.error('Slack通知の送信中にエラーが発生しました:', error);
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
    postContact(data);
    postMessage(data);
  };

  return (
    <Layout id='contact'>
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
