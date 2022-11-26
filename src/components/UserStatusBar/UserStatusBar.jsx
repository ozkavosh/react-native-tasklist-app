import React from 'react';
import {H1} from '../Text/Text';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Image, TouchableOpacity} from 'react-native';
import {useAuthContext} from '../../context/authContext';
import t from '../../utils/translate';
import styles from './styles';

const UserStatusBar = () => {
  const {auth, logout} = useAuthContext();

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
        <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
          <Icon name="logout" size={16} />
        </TouchableOpacity>
      </View>

      <H1 mv={15} light>
        {t('home.welcomeMessage')} {auth?.user?.name}{' '}
      </H1>
    </View>
  );
};

export default UserStatusBar;
