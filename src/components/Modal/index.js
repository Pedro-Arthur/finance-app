import React from 'react';
import {
  ModalTitle,
  ModalSubtitle,
  ModalView,
  Buttons,
  ModalButtonOk,
  ModalButtonCancel,
  ButtonText,
  Row,
  ModalTitleError,
  ModalButtonError,
  ErrorIcon,
  HeaderBox,
  ContrastText,
  ErrorText,
  ErrorBox
} from './styles';

import Modal from 'react-native-modal';

const ModalComponent = props => {

  let m1 = parseFloat(props.value);
  let m2 = m1.toFixed(2);
  let m3 = m2.replace('.', ',');
  let m4 = m3.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  return (
    <Modal isVisible={props.visible}>

      {props.modal1 && (
        <ModalView>
          <ModalTitle>Confirmando os dados...</ModalTitle>
          <HeaderBox>
            <ContrastText>Valor: </ContrastText>
            <ErrorText>R$ {m4}</ErrorText>
          </HeaderBox>
          <ErrorBox>
            <ContrastText>Tipo: </ContrastText>
            <ErrorText>{props.type}</ErrorText>
          </ErrorBox>
          <Buttons>
            <ModalButtonCancel activeOpacity={0.7} onPress={props.actionButtonCancel}>
              <ButtonText>Cancelar</ButtonText>
            </ModalButtonCancel>
            <ModalButtonOk activeOpacity={0.7} onPress={props.actionButtonOk}>
              <ButtonText>Ok</ButtonText>
            </ModalButtonOk>
          </Buttons>
        </ModalView>
      )}

      {props.modal2 && (
        <ModalView>
          <Row>
            <ErrorIcon name='alert-circle' />
            <ModalTitleError>Ops!</ModalTitleError>
          </Row>
          <ModalSubtitle>Preencha os campos corretamente.</ModalSubtitle>
          <Buttons>
            <ModalButtonError activeOpacity={0.7} onPress={props.actionButtonOk} >
              <ButtonText>Ok</ButtonText>
            </ModalButtonError>
          </Buttons>
        </ModalView>
      )}

      {props.modal3 && (
        <ModalView>
          <Row>
            <ErrorIcon name='alert-circle' />
            <ModalTitleError>Ops!</ModalTitleError>
          </Row>
          <ErrorBox>
            <ContrastText>Erro: </ContrastText>
            <ErrorText>{props.error}</ErrorText>
          </ErrorBox>
          <Buttons>
            <ModalButtonError activeOpacity={0.7} onPress={props.actionButtonOk} >
              <ButtonText>Ok</ButtonText>
            </ModalButtonError>
          </Buttons>
        </ModalView>
      )}

      {props.modal4 && (
        <ModalView>
          <Row>
            <ErrorIcon name='alert-circle' />
            <ModalTitleError>Ops!</ModalTitleError>
          </Row>
          <ModalSubtitle>Você não pode excluir um registro antigo.</ModalSubtitle>
          <Buttons>
            <ModalButtonError activeOpacity={0.7} onPress={props.actionButtonOk} >
              <ButtonText>Ok</ButtonText>
            </ModalButtonError>
          </Buttons>
        </ModalView>
      )}

      {props.modal5 && (
        <ModalView>
          <Row>
            <ErrorIcon name='alert-circle' />
            <ModalTitleError>Atenção!</ModalTitleError>
          </Row>
          <ModalSubtitle>Você deseja realmente excluir?</ModalSubtitle>
          <Buttons>
            <ModalButtonCancel activeOpacity={0.7} onPress={props.actionButtonCancel}>
              <ButtonText>Cancelar</ButtonText>
            </ModalButtonCancel>
            <ModalButtonOk activeOpacity={0.7} onPress={props.actionButtonOk}>
              <ButtonText>Ok</ButtonText>
            </ModalButtonOk>
          </Buttons>
        </ModalView>
      )}

    </Modal>
  )
}

export default ModalComponent;