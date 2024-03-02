import { useForm } from 'react-hook-form';
import { actions } from '../../actions';
import addPhotoIcon from '../../assets/icons/addPhoto.svg';
import useAxios from '../../hooks/useAxios';
import useGetUser from '../../hooks/useGetUser';
import usePost from '../../hooks/usePost';
import Field from '../ui/Field';

const PostEntry = () => {
  const user = useGetUser();
  const { dispatch, setShowPostEntry } = usePost();
  const { api } = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      content: '',
    },
  });

  const onSubmit = async (formData) => {
    // set loading to true
    dispatch({ type: actions.post.DATA_FETCHING });

    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts`,
        { formData }
        //! In this case formData must be wrapped inside an object
      );

      if (response.status === 200) {
        // set newly created post to state
        dispatch({ type: actions.post.DATA_CREATED, data: response.data });
        setShowPostEntry(false);
      }
    } catch (error) {
      // set error message to state
      dispatch({
        type: actions.post.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className="relative card">
      <h6 className="mb-3 text-lg font-bold text-center lg:text-xl">
        Create Post
      </h6>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between gap-2 mb-3 lg:mb-6 lg:gap-4">
          <div className="flex items-center gap-3">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
              alt="avatar"
            />
            <div>
              <h6 className="text-lg lg:text-xl">
                {user?.firstName} {user?.lastName}
              </h6>

              <span className="text-sm text-gray-400 lg:text-base">Public</span>
            </div>
          </div>

          <label
            className="btn-primary cursor-pointer !text-gray-100"
            htmlFor="photo"
          >
            <img src={addPhotoIcon} alt="Add Photo" />
            Add Photo
          </label>
          <input type="file" name="photo" id="photo" className="hidden" />
        </div>

        {/* Post Text Input  */}
        <Field label="" error={errors.content}>
          <textarea
            {...register('content', {
              required: 'Adding some text is mandatory!',
            })}
            name="content"
            id="content"
            placeholder="Share your thoughts..."
            className="h-[120px] w-full bg-transparent focus:outline-none lg:h-[160px]"
          />
        </Field>

        <div className="border-t border-[#3F3F3F] pt-4 lg:pt-6">
          <button
            type="submit"
            className="font-bold transition-all auth-input bg-lwsGreen text-deepDark hover:opacity-90"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostEntry;
