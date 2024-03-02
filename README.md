# フロントエンドデプロイ
1. `apps/client`へ移動
2. `npm run build`を実行
3. `/`へ移動
4. `cp -r apps/client/build/ docs/`を実行
5. pushして`main`ブランチへマージ

# サーバーデプロイ
1. `new-express-project`へ移動
2. `vercel`を実行
