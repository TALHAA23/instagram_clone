import { Link } from "react-router-dom";
import PostGrid from "../../components/PostsGrid";
import { useAccountInfoAndUpdater } from "../../hooks/AccountProvider";

export default function ProfilePosts() {
  const { accountInfo } = useAccountInfoAndUpdater();
  if (!accountInfo) return;
  const { posts } = accountInfo.summary;

  return (
    <div className="relative">
      <PostGrid>
        {posts.map((post, index) => (
          <Link to="p/insta" key={index} state={post}>
            <img
              className="aspect-square object-contain"
              src={post.url}
              alt="img"
              loading="lazy"
            />
          </Link>
        ))}
      </PostGrid>
    </div>
  );
}
