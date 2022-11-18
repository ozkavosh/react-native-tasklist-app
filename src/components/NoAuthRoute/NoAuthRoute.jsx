import {useAuthContext} from '../../context/authContext';
import Replace from '../Replace/Replace';

const NoAuthRoute = ({children, navigation}) => {
  const {auth} = useAuthContext();

  return !auth.token ? (
    children
  ) : (
    <Replace navigation={navigation} where="Home" />
  );
};

export default NoAuthRoute;
