import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiFetch = () => {
  //JSON Placeholderの/postsのデータを格納するpostsというStateを定義し、postsを更新するsetPostsというメソッドを定義します。初期値は空のリストにしておきます。
  const [posts, setPosts] = useState([]);

  //useEffectでブラウザ起動時にAPIが1度だけ叩くように定義していきます。
  useEffect(() => {
    //axios.get('')の文字列の部分に、APIを叩くURLを記述します。
    //そして、Getメソッドでアクセスし、返り値を.themのresという変数に代入し、アロー関数(=>)で処理を記載します。
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      //setPostsを用いて、postsという変数にAPIで収集したデータを格納します。この場合、res.dataとすることで、JSONオブジェクトを取得することができます。
      setPosts(res.data);
    });
    //ブラウザ起動時に1度だけAPIを呼び出すので、useEffectの第２引数に[]という風に空のリストを記述します。
  }, []);

  return (
    <div>
      <ul className="list-group list-group-flush">
        {posts.map((post) => (
          <li className="list-group-item fs-5" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiFetch;
