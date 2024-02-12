import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Typography } from 'antd';

const { Title } = Typography;

interface User {
  id: number;
  name: string;
  profile_image_url: string;
}

interface Article {
  id: number;
  title: string;
  body: string;
  user: User;
  tags: string[];
  created_at: string; // ISO 8601形式の文字列として定義されていますが、必要に応じてDate型に変換することもできます
  updated_at: string; // 同様にISO 8601形式の文字列です
  likes_count: number;
  comments_count: number;
  private: boolean;
  loading: boolean
}


const count = 3;
const mockQiitaData = {
  "items": [
    {
      "id": 1234567890,
      "title": "記事のタイトル1",
      "body": "記事の本文1",
      "user": {
        "id": 1234567890,
        "name": "ユーザー名1",
        "profile_image_url": "https://placehold.jp/150x150.png"
      },
      "tags": [
        "タグ1",
        "タグ2"
      ],
      "created_at": "2023-02-11T12:34:56.789Z",
      "updated_at": "2023-02-11T12:34:56.789Z",
      "likes_count": 10,
      "comments_count": 5,
      "private": false
    },
    {
      "id": 1234567891,
      "title": "記事のタイトル2",
      "body": "記事の本文2",
      "user": {
        "id": 1234567891,
        "name": "ユーザー名2",
        "profile_image_url": "https://placehold.jp/150x150.png"
      },
      "tags": [
        "タグ3",
        "タグ4"
      ],
      "created_at": "2023-02-11T12:35:00.000Z",
      "updated_at": "2023-02-11T12:35:00.000Z",
      "likes_count": 11,
      "comments_count": 6,
      "private": true
    },
    {
      "id": 1234567892,
      "title": "記事のタイトル3",
      "body": "記事の本文3",
      "user": {
        "id": 1234567892,
        "name": "ユーザー名3",
        "profile_image_url": "https://placehold.jp/150x150.png"
      },
      "tags": [
        "タグ5",
        "タグ6"
      ],
      "created_at": "2023-02-11T12:35:03.211Z",
      "updated_at": "2023-02-11T12:35:03.211Z",
      "likes_count": 12,
      "comments_count": 7,
      "private": false
    },
    {
      "id": 1234567893,
      "title": "記事のタイトル4",
      "body": "記事の本文4",
      "user": {
        "id": 1234567893,
        "name": "ユーザー名4",
        "profile_image_url": "https://placehold.jp/150x150.png"
      },
      "tags": [
        "タグ7",
        "タグ8"
      ],
      "created_at": "2023-02-11T12:35:06.422Z",
      "updated_at": "2023-02-11T12:35:06.422Z",
      "likes_count": 13,
      "comments_count": 8,
      "private": true
    }
  ]
}

const initArticle = {
  id: 0,
  title: "",
  body: "",
  user: {
    id: 0,
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

const getArticleSample = (): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const article = mockQiitaData;
      const response = new Response(JSON.stringify(article), {
        headers: {
          "Content-Type": "application/json"
        }
      });
      resolve(response)
    }, 1000)
  })
}

export const BlogComponent: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Article[]>([]);
  const [list, setList] = useState<Article[]>([]);

  // TODO: この辺りの処理はhookに切り出す
  useEffect(() => {
    getArticleSample()
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.items);
        setList(res.items);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat([...new Array(count)].map(() => (initArticle))),
    );
    getArticleSample()
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.items);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
  };

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
    <>
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
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.user.profile_image_url} />}
                // TODO: バックエンド実装後リンクを記事のものに変更する
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              {/* ここにタグを表示する */}
              {item.tags.map((tag) => {
                return <div>{tag}/</div>
              })}
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};