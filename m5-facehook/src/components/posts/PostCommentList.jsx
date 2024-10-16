const PostCommentList = ({ comments }) => {
  return (
    <div className="pl-2 space-y-4 divide-y divide-lighterDark lg:pl-3">
      {/* single comment  */}
      {comments?.length > 0 ? (
        <>
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center gap-3 pt-4">
              <img
                className="rounded-full max-w-6 max-h-6"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                  comment?.author?.avatar
                }`}
                alt="avatar"
              />
              <div>
                <div className="flex gap-1 text-xs lg:text-sm">
                  <span>{comment?.author?.name}: </span>
                  <span>{comment?.comment}</span>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <p>No Comments Found!</p>
        </>
      )}
    </div>
  );
};

export default PostCommentList;
