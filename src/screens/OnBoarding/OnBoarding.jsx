import {View, Image, BackHandler, Alert} from 'react-native';
import React, {useEffect} from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import {H1, P} from '../../components/Text/Text';
import useTranslate from '../../hooks/useTranslate';

const OnBoarding = ({navigation}) => {
  const t = useTranslate();

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        t('onBoarding.closingAlertTitle'),
        t('onBoarding.closingAlertMessage'),
        [
          {
            text: t('onBoarding.closingAlertCancelBtn'),
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: t('onBoarding.closingAlertConfirmBtn'),
            onPress: () => BackHandler.exitApp(),
          },
        ],
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <MainContainer>
      <Ellipse light />

      <View style={styles.header}>
        <Image
          source={require('../../assets/onboarding.png')}
          style={styles.headerImg}
        />
        <H1 mt={15}>{t('onBoarding.headingText')}</H1>
      </View>

      <P mb={135} fs={16} center>
        {t('onBoarding.descriptionText')}
      </P>

      <Button
        title={t('onBoarding.getStartedBtnTitle')}
        onPress={() => navigation.navigate('SignUp')}
        style={styles.button}
      />
    </MainContainer>
  );
};

export default OnBoarding;
