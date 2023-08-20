import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const ProfilePage = () => {
  const { user } = useSelector((state) => state.userReducer);
  if (!user) {
    return <Navigate to="/" />;
    // return
  }
  return <div>Profile Page</div>;
};
