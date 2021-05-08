import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Container, CancelButton, CancelText } from './styles';

import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../styles/colors';

export default function DatePicker({ date, onClose, onChange }) {

  const [dateNow, setDateNow] = useState(new Date(date));
  const [mode, setMode] = useState('date');

  return (
    <Container>
      {Platform.OS === 'ios' && (
        <CancelButton activeOpacity={0.7} onPress={onClose}>
          <CancelText>Fechar</CancelText>
        </CancelButton>
      )}
      <DateTimePicker
        value={dateNow}
        mode={mode}
        display='default'
        onChange={(e, d) => {
          const currentDate = d || dateNow;
          setDateNow(currentDate);
          onChange(currentDate);
        }}
        style={{ backgroundColor: colors.one }}
      />
    </Container>
  );
}