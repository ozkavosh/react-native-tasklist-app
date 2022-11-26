import {
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MainContainer from '../../components/MainContainer/MainContainer';
import Ellipse from '../../components/Ellipse/Ellipse';
import {H1, P} from '../../components/Text/Text';
import Form from '../../components/Form/Form';
import useForm from '../../hooks/useForm';
import React, {useState} from 'react';
import Button from '../../components/StyledButton/StyledButton';
import t from '../../utils/translate';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import handleSubmit from '../../utils/handleTaskSubmit';
import ADD_TASK_FIELDS from './addTaskFields';
import styles from './styles';
import { useNavigationState } from '@react-navigation/native';

const AddTask = ({navigation}) => {
  const task = useNavigationState(state => state.routes.find(route => route.name === "AddTask").params?.task);
  const [formState, handleInput, validateFields, resetFields] =
    useForm(task ? { description: task.description } : ADD_TASK_FIELDS);
  const [completed, setCompleted] = useState(task ? task.completed : false);

  return (
    <MainContainer>
      <Ellipse />

      <H1 mt={325} mb={35}>
        {task ? "Editar tarea" : t('addTask.addTaskTitle')}
      </H1>
      <Form
        formState={formState}
        handleInput={handleInput}
        inputStyle={styles.input}
      />

      <TouchableWithoutFeedback onPress={() => setCompleted(prev => !prev)}>
        <View style={{flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center'}}>
          <BouncyCheckbox fillColor='#50C2C9' isChecked={completed} disableBuiltInState onPress={() => setCompleted(prev => !prev)}/>
          <P>{t('addTask.checkedText')}</P>
        </View>
      </TouchableWithoutFeedback>

      <Button
        style={{marginTop: '60%'}}
        onPress={() =>
          handleSubmit({
            formState,
            completed,
            validateFields,
            task: task && { _id: task._id, completed, description: formState.description },
            resetFields,
            goBack: navigation.goBack,
          })
        }
        title={task ? "Editar Tarea" : t('addTask.addTaskBtnTitle')}
      />
    </MainContainer>
  );
};

export default AddTask;