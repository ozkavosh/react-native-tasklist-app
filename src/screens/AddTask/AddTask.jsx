import {TouchableWithoutFeedback, View} from 'react-native';
import MainContainer from '../../components/MainContainer/MainContainer';
import Ellipse from '../../components/Ellipse/Ellipse';
import {H1, P} from '../../components/Text/Text';
import Form from '../../components/Form/Form';
import useForm from '../../hooks/useForm';
import React, {useState} from 'react';
import Button from '../../components/StyledButton/StyledButton';
import t from '../../utils/translate';
import {useAuthContext} from '../../context/authContext';
import CheckBox from '../../components/Checkbox/Checkbox';
import handleSubmit from '../../utils/handleTaskSubmit';
import ADD_TASK_FIELDS from './addTaskFields';
import styles from './styles';

const AddTask = () => {
  const [formState, handleInput, validateFields, resetFields] =
    useForm(ADD_TASK_FIELDS);
  const {auth} = useAuthContext();
  const [checked, setChecked] = useState(false);

  return (
    <MainContainer>
      <Ellipse />

      <H1 mt={325} mb={15}>
        {t('addTask.addTaskTitle')}
      </H1>
      <Form
        formState={formState}
        handleInput={handleInput}
        inputStyle={styles.input}
      />

      <TouchableWithoutFeedback onPress={() => setChecked(prev => !prev)}>
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <CheckBox checked={checked} style={{marginRight: 5}} />
          <P>
            {t('addTask.checkedText')}
          </P>
        </View>
      </TouchableWithoutFeedback>

      <Button
        style={{marginTop: 'auto'}}
        onPress={() =>
          handleSubmit({
            formState,
            token: auth.token,
            validateFields,
            resetFields,
          })
        }
        title={t('addTask.addTaskBtnTitle')}
      />
    </MainContainer>
  );
};

export default AddTask;
