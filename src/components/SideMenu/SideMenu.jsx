import {Text} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import useTranslate from '../../hooks/useTranslate';
import {useAuthContext} from '../../context/authContext';
import {useDispatch} from 'react-redux';
import {switchLocale} from '../../features/slices/localeSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SideMenu = props => {
  const dispatch = useDispatch();
  const t = useTranslate();
  const {auth, logout} = useAuthContext();

  const handleLanguageToggleBtn = () => {
    dispatch(switchLocale());
    props.navigation.toggleDrawer();
  };

  const handleLogoutBtn = () => {
    logout();
    props.navigation.toggleDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <Text
        style={{
          color: colors.primary,
          width: '90%',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 24,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 5,
          paddingBottom: 10,
          borderBottomColor: colors.tertiary,
          borderBottomWidth: 1
        }}>
        TODo
      </Text>
      <DrawerItem
        label={() => (
          <Text style={{color: colors.primary}}>
            {t('sideMenu.toggleLanguageLabel')}
          </Text>
        )}
        icon={() => (
          <MIcon name="google-translate" size={24} color={colors.primary} />
        )}
        onPress={handleLanguageToggleBtn}
      />
      {auth.token && (
        <DrawerItem
          label={() => (
            <Text style={{color: colors.primary}}>
              {t('sideMenu.logoutLabel')}
            </Text>
          )}
          icon={() => <Icon name="sign-out" size={24} color={colors.primary} />}
          onPress={handleLogoutBtn}
        />
      )}
    </DrawerContentScrollView>
  );
};

export default SideMenu;
