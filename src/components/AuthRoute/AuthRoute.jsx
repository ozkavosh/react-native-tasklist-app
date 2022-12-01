import {useAuthContext} from '../../context/authContext';
import Replace from '../Replace/Replace';

const AuthRoute = ({children, navigation}) => {
  const {auth} = useAuthContext();

  return auth.user?.name ? (
    children
  ) : (
    <Replace navigation={navigation} where="SignIn" />
  );
};

export default AuthRoute;
