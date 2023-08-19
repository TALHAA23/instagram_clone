import PostGrid from "../../components/PostsGrid";
import { useAccountInfoAndUpdater } from "../../hooks/AccountProvider";

export default function ProfilePosts() {
  const { accountInfo } = useAccountInfoAndUpdater();
  const { posts } = accountInfo.summary;

  return (
    <div className="relative">
      <PostGrid>
        {posts.map((post) => (
          <div className=" aspect-square border border-pink-950">
            {console.log(post)}
            <img
              className=" object-contain aspect-square"
              src={post}
              alt="img"
            />
          </div>
        ))}
      </PostGrid>
    </div>
  );
}
