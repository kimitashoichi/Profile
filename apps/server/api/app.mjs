import fetch from 'node-fetch';
import express, { json } from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(json());

app.post('/sendToSlack', async (req, res) => {
  try {
    const webhookUrl = 'https://hooks.slack.com/services/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'; // SlackのIncoming Webhook URLに置き換える
    const message = req.body.text;

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: message })
    });

    if (response.ok) {
      res.send('Slackに通知が送信されました');
    } else {
      res.status(500).send('Slackへの通知に失敗しました');
    }
  } catch (error) {
    console.error('Slackへの通知中にエラーが発生しました:', error);
    res.status(500).send('Slackへの通知中にエラーが発生しました');
  }
});

app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました`);
});
