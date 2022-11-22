import {View, Image, BackHandler, Alert} from 'react-native';
import React, {useEffect} from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import {H1, P} from '../../components/Text/Text';
import t from '../../utils/translate';

const OnBoarding = ({navigation}) => {
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
    <MainContainer style={{alignItems: 'center'}}>
      <Ellipse />

      <View style={styles.header}>
        <Image
          source={require('../../assets/onboarding.png')}
          style={styles.headerImg}
        />
        <H1 mt={15}>{t('onBoarding.headingText')}</H1>
      </View>

      <P mb={135} center style={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, tempora.
        Esse natus suscipit cumque perspiciatis eos, aliquam quae ducimus iure
        quasi.
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
