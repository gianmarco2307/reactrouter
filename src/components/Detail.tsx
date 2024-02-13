import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, DetailDiv, DetailId, HomeDiv as ButtonDiv } from "./styledComp";

function Home() {
  const [postDetail, setPostDetail] = useState<{
    id: string;
    title: string;
    body: string;
  } | null>({ id: "", title: "", body: "" });
  const { id } = useParams();
  let navigate = useNavigate();

  const getPostDetail = async () => {
    if (!!id) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setPostDetail(data);
    }
  };

  useEffect(() => {
    getPostDetail();
  }, [id]);

  function onClickBackToHome() {
    navigate("/reactrouter/");
  }

  if (!!postDetail) {
    return (
      <>
        <DetailDiv>
          <DetailId>Dettaglio post {postDetail.id}</DetailId>
          <h2>{postDetail.title}</h2>
          <div>{postDetail.body}</div>
        </DetailDiv>
        <ButtonDiv>
          <Button onClick={onClickBackToHome}>Torna alla home</Button>
        </ButtonDiv>
      </>
    );
  }

  return <></>;
}

export default Home;
