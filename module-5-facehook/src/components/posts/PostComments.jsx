import { useState } from 'react';
import useAvatar from '../../hooks/useAvatar';
import PostCommentList from './PostCommentList';

const PostComments = ({ post }) => {
  const [showComments, setShowComments] = useState(true);
  const { avatarURL } = useAvatar(post);
  const { comments } = post || {};

  return (
    <div>
      {/* comment input box  */}
      <div className="gap-2 mb-3 flex-center lg:gap-4">
        <img
          className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
          src={avatarURL}
          alt="avatar"
        />

        <div className="flex-1">
          <input
            type="text"
            className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
            name="post"
            id="post"
            placeholder="What's on your mind?"
          />
        </div>
      </div>
      {/* comment filter button  */}
      <div className="mt-4">
        <button
          onClick={() =>
            setShowComments((prevShowComments) => !prevShowComments)
          }
          className="text-gray-300 max-md:text-sm"
        >
          All Comment ▾
        </button>
      </div>

      {/* comments  */}
      {showComments && <PostCommentList comments={comments} />}
    </div>
  );
};

export default PostComments;
