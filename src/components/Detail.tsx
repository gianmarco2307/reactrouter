import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailDiv, DetailId } from "./styledComp";

function Home() {
  const [postDetail, setPostDetail] = useState<{
    id: string;
    title: string;
    body: string
  } | null>({id: "", title:"", body:""});
  const { id } = useParams();

  const getPostDetail = async () => {
    if (!!id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPostDetail(data);
    }
  };

  useEffect(() => {
    getPostDetail();
  }, [id]);

  if(!!postDetail) {
      return (
        <DetailDiv>
            <DetailId>Dettaglio post {postDetail.id}</DetailId>
            <h2>{postDetail.title}</h2>
            <div>{postDetail.body}</div>
        </DetailDiv>
      )
  }

  return <></>;
}

export default Home;
