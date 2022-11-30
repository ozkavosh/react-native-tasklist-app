import {View, Modal} from 'react-native';
import {H1, P} from '../Text/Text';
import Button from '../StyledButton/StyledButton';
import handleDelete from '../../utils/handleTaskDelete';
import useTranslate from '../../hooks/useTranslate';
import React from 'react';
import styles from './styles';

const DeleteTaskModal = ({visibleModal, setVisibleModal, task}) => {
  const t = useTranslate();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
      visible={visibleModal}
      onRequestClose={() => {
        setVisibleModal(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <H1>{t('home.taskDeletionConfirmMessage')}</H1>
          <P mv={15} style={{fontSize: 18}}>
            {task?.description}
          </P>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={() => handleDelete({task, setVisibleModal})}
              title={t('home.taskDeletionConfirmBtn')}
            />
            <Button
              style={styles.button}
              onPress={() => setVisibleModal(false)}
              title={t('home.taskDeletionCancelBtn')}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteTaskModal;
