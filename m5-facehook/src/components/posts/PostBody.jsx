const PostBody = ({ poster, content }) => {
  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      {/* If Post has Image, Render this block  */}
      {poster && (
        <div className="flex items-center justify-center overflow-hidden">
          <img
            className="max-w-full pb-2"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`}
            alt="poster"
          />
        </div>
      )}
      <p>{content ?? 'No Content Available'}</p>
    </div>
  );
};

export default PostBody;
