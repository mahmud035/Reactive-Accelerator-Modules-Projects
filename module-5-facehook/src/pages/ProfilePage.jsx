import { useEffect } from 'react';
import { actions } from '../actions';
import MyPosts from '../components/profile/MyPosts';
import ProfileInfo from '../components/profile/ProfileInfo';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';
import useProfile from '../hooks/useProfile';

const ProfilePage = () => {
  const { state, dispatch } = useProfile();
  const { loading, error } = state || {};
  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    // set loading to true
    dispatch({ type: actions.profile.DATA_FETCHING });

    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );

        // set user data and user's posts data to state
        if (response.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        // set error message to state
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchProfile();
  }, [auth?.user?.id]);

  //* Decide what to render on UI
  if (loading) return <div>Fetching your profile data...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <ProfileInfo />
      <MyPosts />
    </>
  );
};

export default ProfilePage;
