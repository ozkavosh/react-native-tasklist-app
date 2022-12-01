import React from 'react';
import {API_BASE_URL} from '@env';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {getUser, postAvatar} from '../../utils/api';
import { useAuthContext } from '../../context/authContext';
import showMessage from '../../utils/showMessage';
import log from '../../utils/log';

const UserStatusBar = () => {
  const navigation = useNavigation();
  const { auth, setUser } = useAuthContext();

  const handleImagePick = async () => {
    try {
      const result = await launchImageLibrary({maxWidth: 250, maxHeight: 250});
      const formData = new FormData();
      formData.append('avatar', { uri: result.assets[0].uri, name: result.assets[0].fileName, type: result.assets[0].type});
      await postAvatar(formData);
      const request = await getUser();
      setUser(request.data);
      showMessage({title: 'Éxito', message: 'Avatar actualizado correctamente', type: 'success'});
    } catch (e) {
      log.warn(e);
      showMessage({title: 'Error', message: e.message, type: 'error'});
    }
  };

  return (
    <View style={styles.userStatusBar}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.menuBtn}>
        <Icon name="menu" size={28} color={colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.userAvatar} onPress={handleImagePick}>
        {auth?.user?.avatar ? (
          <Image
            source={{
              uri: API_BASE_URL + auth?.user?.avatar
            }}
            style={styles.avatarImg}
          />
        ) : (
          <View style={styles.avatarPlaceHolder} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default UserStatusBar;
