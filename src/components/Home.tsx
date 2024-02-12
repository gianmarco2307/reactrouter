import { useContext, useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { authenticationContext } from "../authenticationProvider";
import { Button, HomeDiv, Li } from "./styledComp";

function Home() {
  const { setAuthenticated } = useContext(authenticationContext);
  const [posts, setPosts] = useState<Array<{
    id: string;
    title: string;
  }> | null>([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  function navigationTo(postId: string): string {
    const navigationTo: string = "/" + postId;
    return navigationTo;
  }

  return (
    <HomeDiv>
      <ul>
        {posts?.map((post) => {
          return (
            <ul>
              <Li>
                <NavLink to={navigationTo(post.id)} key={post.id} className="item">
                  <p>{post.title}</p>
                </NavLink>
              </Li>
            </ul>
          );
        })}
      </ul>
      <br></br>
      <Button onClick={() => setAuthenticated(false)}>Logout</Button>
    </HomeDiv>
  );
}

export default Home;
