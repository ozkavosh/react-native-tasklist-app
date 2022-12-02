import {TouchableWithoutFeedback, View, Image} from 'react-native';
import MainContainer from '../../components/MainContainer/MainContainer';
import Ellipse from '../../components/Ellipse/Ellipse';
import {H1, P} from '../../components/Text/Text';
import Form from '../../components/Form/Form';
import useForm from '../../hooks/useForm';
import React, {useState} from 'react';
import Button from '../../components/StyledButton/StyledButton';
import useTranslate from '../../hooks/useTranslate';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import handleSubmit from '../../utils/handleTaskSubmit';
import ADD_TASK_FIELDS from './addTaskFields';
import styles from './styles';
import {useNavigationState} from '@react-navigation/native';
import colors from '../../utils/colors';

const AddTask = ({navigation}) => {
  const t = useTranslate();
  const task = useNavigationState(
    state => state.routes.find(route => route.name === 'AddTask').params?.task,
  );
  const [formState, handleInput, validateFields, resetFields] = useForm(
    task ? {description: task.description} : ADD_TASK_FIELDS,
  );
  const [completed, setCompleted] = useState(task ? task.completed : false);

  return (
    <MainContainer>
      <Ellipse light />

      <Image
        source={require('../../assets/add-task.png')}
        style={{width: 320, height: 240, marginTop: '35%'}}
      />

      <H1 mt={15} mb={30}>
        {task ? t('addTask.editTaskTitle') : t('addTask.addTaskTitle')}
      </H1>
      <Form
        formState={formState}
        handleInput={handleInput}
        inputStyle={styles.input}
        formStyle={styles.inputGroup}
      />

      <TouchableWithoutFeedback onPress={() => setCompleted(prev => !prev)}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            alignItems: 'center',
          }}>
          <BouncyCheckbox
            fillColor={colors.primary}
            isChecked={completed}
            disableBuiltInState
            onPress={() => setCompleted(prev => !prev)}
          />
          <P>{t('addTask.checkedText')}</P>
        </View>
      </TouchableWithoutFeedback>

      <Button
        style={{marginTop: '40%'}}
        onPress={() =>
          handleSubmit({
            formState,
            completed,
            validateFields,
            task: task && {
              _id: task._id,
              completed,
              description: formState.description,
            },
            resetFields,
            goBack: navigation.goBack,
          })
        }
        title={
          task ? t('addTask.editTaskBtnTitle') : t('addTask.addTaskBtnTitle')
        }
      />
    </MainContainer>
  );
};

export default AddTask;
