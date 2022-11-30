import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Image, TouchableOpacity} from 'react-native';
import {useAuthContext} from '../../context/authContext';
import styles from './styles';
import colors from '../../utils/colors';
import { switchLocale } from '../../features/slices/localeSlice';
import { useDispatch } from 'react-redux';

const UserStatusBar = () => {
  const {logout} = useAuthContext();
  const dispatch = useDispatch();

  return (
    <View style={styles.userStatusBar}>
      <View style={styles.userAvatar}>
        {true ? (
          <Image
            source={{
              uri: 'https://static.wikia.nocookie.net/omori/images/c/ce/Omori_Portrait.png',
            }}
            style={styles.avatarImg}
          />
        ) : (
          <View style={styles.avatarPlaceHolder} />
        )}
        <TouchableOpacity onPress={() => dispatch(switchLocale())} style={styles.logoutBtn}>
          <Icon name="logout" size={16} color={colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserStatusBar;
