import { Link } from "react-router-dom";
import PostGrid from "../../components/PostsGrid";
import { useAccountInfoAndUpdater } from "../../hooks/AccountProvider";

export default function ProfilePosts() {
  const { accountInfo } = useAccountInfoAndUpdater();
  const { posts } = accountInfo.summary;

  return (
    <div className="relative">
      <PostGrid>
        {posts.map((post) => (
          <Link to="p/insta" state={post}>
            <div className=" aspect-square border border-pink-950">
              <img
                className=" object-contain aspect-square"
                src={post.url}
                alt="img"
              />
            </div>
          </Link>
        ))}
      </PostGrid>
    </div>
  );
}
