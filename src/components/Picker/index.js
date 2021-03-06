import React, { useState } from 'react';
import {
  PickerView,
  PickerValue,
  PickerIcon,
  PickerButton,
  PickerModal,
  PickerOption,
  PickerOptionValue,
  PickerOptionCancel,
  PickerLine
} from './styles';

import Modal from 'react-native-modal';

export default function Picker({ onChange, type }) {

  const [showPickerModal, setShowPickerModal] = useState(false);

  function itemSelected(selectedType) {
    if (selectedType === 'Receita') {
      onChange('receita');
      setShowPickerModal(false);
    }
    else {
      onChange('despesa');
      setShowPickerModal(false);
    }
  }

  return (
    <>
      <PickerView>
        <PickerValue>{type === 'receita' ? 'Receita' : 'Despesa'}</PickerValue>
        <PickerButton activeOpacity={0.7} onPress={() => setShowPickerModal(true)}>
          <PickerIcon name='arrow-drop-down' />
        </PickerButton>
      </PickerView>

      <Modal isVisible={showPickerModal}>
        <PickerModal>
          <PickerOption activeOpacity={0.7} onPress={() => itemSelected('Receita')}>
            <PickerOptionValue>Receita</PickerOptionValue>
          </PickerOption>
          <PickerLine />
          <PickerOption activeOpacity={0.7} onPress={() => itemSelected('Despesa')}>
            <PickerOptionValue>Despesa</PickerOptionValue>
          </PickerOption>
          <PickerLine />
          <PickerOption activeOpacity={0.7} onPress={() => setShowPickerModal(false)}>
            <PickerOptionCancel>Cancelar</PickerOptionCancel>
          </PickerOption>
        </PickerModal>
      </Modal>
    </>
  );
}