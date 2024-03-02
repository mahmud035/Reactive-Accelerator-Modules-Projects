import PostCard from './PostCard';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts?.length > 0 ? (
        posts
          .sort((a, b) => new Date(b.createAt) - new Date(a.createAt))
          .map((post) => <PostCard key={post?.id} post={post} />)
      ) : (
        <p className="text-2xl text-center">No Post Found!</p>
      )}
    </div>
  );
};

export default PostList;
