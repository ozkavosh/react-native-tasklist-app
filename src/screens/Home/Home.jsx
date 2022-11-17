import {View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import styles from './styles';
import Ellipse from '../../components/Ellipse/Ellipse';
import Clock from '../../components/Clock/Clock';
import {useAuthContext} from '../../context/authContext';
import {H1, P} from '../../components/Text/Text';
import Button from '../../components/StyledButton/StyledButton';
import axios from 'axios';
import t from '../../utils/translate';
import Checkbox from '../../components/Checkbox/Checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const {auth, logout} = useAuthContext();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      try {
        const request = await axios.get(
          'https://ozkavosh-todo-api.glitch.me/task',
          {headers: {Authorization: 'Bearer ' + auth.token}},
        );
        setTasks(request.data?.data || []);
      } catch (e) {
        console.log(e);
        setTasks([]);
      }
    });

    return () => unsubscribe;
  }, [navigation]);

  return (
    <MainContainer>
      <Ellipse light />

      <View style={styles.userStatusBar}>
        <View style={styles.userAvatar}>
          {false ? (
            <Image
              style={styles.avatarImg}
              source={{uri: null, width: 128, height: 128}}
            />
          ) : (
            <View style={styles.avatarPlaceHolder} />
          )}
        </View>

        <H1 mv={15} light>
          {t('home.welcomeMessage')} {auth?.user?.name}{' '}
        </H1>
      </View>

      <Clock />

      <P mv={15} bold>
        Task List
      </P>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          paddingHorizontal: 25,
          paddingVertical: 15,
          elevation: 6,
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 25,
          }}>
          <P bold>Daily Tasks</P>
          <Button
            style={{
              width: 32,
              height: 32,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title="+"
            onPress={() => navigation.navigate('AddTask')}
            // onPress={logout}
          />
        </View>
        <FlatList
          data={tasks}
          extraData={tasks}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 13,
              }}>
              <Checkbox style={{marginRight: 5}} />
              <P>{item.description}</P>
              <Icon style={{ marginLeft: 'auto'}} name="trash" size={20} color="#000"  />
            </View>
          )}
          style={{flex: 1, width: '100%'}}
        />
      </View>
    </MainContainer>
  );
};

export default Home;
