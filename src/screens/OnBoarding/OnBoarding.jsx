import {View, Image} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/StyledButton/StyledButton';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import {H1, P} from '../../components/Text/Text';

const OnBoarding = ({navigation}) => {
  return (
    <MainContainer style={{alignItems: 'center'}}>
      <Ellipse />

      <View style={styles.header}>
        <Image
          source={require('../../assets/onboarding.png')}
          style={styles.headerImg}
        />
        <H1 mt={15}>Get things done with TODo!</H1>
      </View>

      <P mb={135} center style={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, tempora.
        Esse natus suscipit cumque perspiciatis eos, aliquam quae ducimus iure
        quasi.
      </P>

      <Button
        title="Get Started"
        onPress={() => navigation.navigate('SignUp')}
        style={styles.button}
      />
    </MainContainer>
  );
};

export default OnBoarding;
