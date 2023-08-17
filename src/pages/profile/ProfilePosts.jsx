import PostGrid from "../../components/PostsGrid";
import { useAccountInfoAndUpdater } from "../../hooks/AccountProvider";

export default function ProfilePosts() {
  const { accountInfo } = useAccountInfoAndUpdater();
  const { posts } = accountInfo.summary;

  return (
    <div className="relative">
      <PostGrid>
        {posts.map((post) => (
          <div className=" aspect-square border border-pink-950">{post}</div>
        ))}
      </PostGrid>
    </div>
  );
}
