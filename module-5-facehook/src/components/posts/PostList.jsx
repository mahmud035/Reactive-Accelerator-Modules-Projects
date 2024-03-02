import PostCard from './PostCard';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts?.length > 0 ? (
        posts.map((post) => <PostCard key={post?.id} post={post} />)
      ) : (
        <p className="text-2xl text-center">No Posts Found!</p>
      )}
    </div>
  );
};

export default PostList;
