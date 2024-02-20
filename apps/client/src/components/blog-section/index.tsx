import React, { useEffect, useState } from 'react';
import { Avatar, Button, Layout, List, Skeleton, Typography } from 'antd';
import { qiitaItemsResponse } from '../../schema/index';
import axios, { AxiosResponse } from 'axios';

const { Title } = Typography;
const count = 3;

const initArticle = {
  id: "",
  title: "",
  body: "",
  url: "",
  user: {
    id: "",
    name: "",
    profile_image_url: ""
  },
  tags: [],
  created_at: "",
  updated_at: "",
  likes_count: 0,
  comments_count: 0,
  private: false,
  loading: false
}

// TOKEN: 51701cc44eb209a093ba218ebc86af0d63c1803e
// sample: curl -H 'Authorization: Bearer 51701cc44eb209a093ba218ebc86af0d63c1803e' 'https://qiita.com/api/v2/authenticated_user/items'

export const BlogComponent: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState<qiitaItemsResponse[]>([]);
  const [list, setList] = useState<qiitaItemsResponse[]>([]);

  // TODO: この辺りの処理はhookに切り出す
  const getQiitaArticles = async () => {
    try {
      // API を呼び出してデータを取得
      const count = item.length;
      const response: AxiosResponse<qiitaItemsResponse[]> = await axios.get(
        `https://qiita.com/api/v2/authenticated_user/items?per_page=${count + 3}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 51701cc44eb209a093ba218ebc86af0d63c1803e'
        }
      });
      const data = response.data;
      console.log('data', data)
      setItem(data);
      setList(data);
      setInitLoading(false);
      return data;
    } catch (e) {
      console.error('記事取得失敗', e);
    }
  }

  useEffect(() => {
    getQiitaArticles();
  }, []);

  const onLoadMore = async () => {
    setLoading(true);
    const qiitaArticlesItems = await getQiitaArticles();
    console.log('onLoadMore', qiitaArticlesItems);
    setList(
      item.concat([...new Array(count)].map(() => (initArticle))),
    );
    getQiitaArticles()
      .then((res) => {
        if (res === undefined) return;
        setItem(res);
        setList(res);
        setLoading(false);
        window.dispatchEvent(new Event('resize'));
      });
  };

  // TODO: 記事の最大数を取得した後は表示しないように変更する
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <Layout id='blogs'>
      <Title style={{ width: '70%', margin: '1em auto' }}>Blogs</Title>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        style={{ width: '70%', margin: '0 auto' }}
        renderItem={(item) => (
          <List.Item>
            <Skeleton
              avatar
              title={false}
              loading={false}
              active
              >
              <List.Item.Meta
                avatar={<Avatar src={item.user.profile_image_url} />}
                // TODO: バックエンド実装後リンクを記事のものに変更する
                title={<a href={item.url} target='_blank' rel="noreferrer">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              {/* ここにタグを表示する */}
              {item.tags.map((tag) => {
                return <div>{tag.name}/</div>
              })}
              </Skeleton>
          </List.Item>
        )}
      />
    </Layout>
  );
};
