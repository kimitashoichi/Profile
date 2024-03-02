const express = require("express");
const cors = require("cors");
const app = express();

// vercel devと本番で挙動が異なる
// SEE: https://zenn.dev/syon/articles/472b748fe3c12d

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.post('/sendToSlack', async (req, res) => {
  const { data } = req.body;
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || '';

  try {
    // Slackにメッセージを送信するためのfetchリクエストを作成
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: data }), // リクエストボディにデータを設定
    });

    if (response.ok) {
      // リクエストが成功した場合
      res.status(200).json({ success: true });
    } else {
      // リクエストが失敗した場合
      res.status(500).json({ success: false, error: 'Failed to send message to Slack' });
    }
  } catch (error) {
    // エラーが発生した場合
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3002, () => console.log("Server ready on port 3000."));

module.exports = app;