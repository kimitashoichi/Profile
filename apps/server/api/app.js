// Express.jsアプリケーションを作成する
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 3001; // ポート番号の指定

app.use(cors());
app.use(express.json());

// GETリクエストに対するルートハンドラー
app.get("/", (req, res) => {
  res.send("Hello from Express.js API!");
});

app.post('/sendToSlack', async (req, res) => {
  const { data } = req.body;

  try {
    // Slackにメッセージを送信するためのfetchリクエストを作成
    const response = await fetch('https://hooks.slack.com/services/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', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: data }), // リクエストボディにデータを設定
    })

    console.log(data)

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

// ポートをリッスンする
app.listen(port, () => {
  console.log(`Express.js API is listening at http://localhost:${port}`);
});
