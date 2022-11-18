import {useAuthContext} from '../../context/authContext';
import Replace from '../Replace/Replace';

const AuthRoute = ({children, navigation}) => {
  const {auth} = useAuthContext();

  return auth.token ? (
    children
  ) : (
    <Replace navigation={navigation} where="SignIn" />
  );
};

export default AuthRoute;
