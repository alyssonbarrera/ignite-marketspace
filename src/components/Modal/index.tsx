import Checkbox from 'expo-checkbox'
import BottomSheet from '@gorhom/bottom-sheet'
import React, { useCallback, useMemo, useRef, useState } from 'react'

import theme from '@theme/index'
import {
  Switch,
  SwitchContainer,
  SwitchTitle,
  Condition,
  ConditionContainer,
  ConditionTitle,
  Content,
  Icon,
  IconContainer,
  Option,
  OptionText,
  Title,
  PaymentsContainer,
  PaymentTitle,
  PaymentsContent,
  PaymentOption,
  PaymentOptionContainer,
  Footer,
} from './styles'
import { Button } from '@components/Button'
import { useFilter } from '@hooks/useFilter'

type FormDataProps = {
  isNew: boolean | undefined
  acceptTrade: boolean
  paymentMethods: Array<'boleto' | 'pix' | 'cash' | 'card' | 'deposit'>
}

export function Modal() {
  const { handleFilter, isModalOpen, handleModal } = useFilter()

  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['72%'], [])
  const handleCloseModal = useCallback(() => {
    handleModal(false)
  }, [])

  const [condition, setCondition] = useState<'new' | 'used' | null>(null)
  const [exchange, setExchange] = useState<boolean>(false)
  const [boleto, setBoleto] = useState<boolean>(false)
  const [pix, setPix] = useState<boolean>(false)
  const [cash, setCash] = useState<boolean>(false)
  const [card, setCard] = useState<boolean>(false)
  const [deposit, setDeposit] = useState<boolean>(false)

  const handleResetFilters = useCallback(() => {
    setCondition(null)
    setExchange(false)
    setBoleto(false)
    setPix(false)
    setCash(false)
    setCard(false)
    setDeposit(false)
  }, [])

  function handleFilterSubmit() {
    const formData: FormDataProps = {
      isNew:
        condition === 'new' ? true : condition === 'used' ? false : undefined,
      acceptTrade: exchange,
      paymentMethods: [
        boleto && 'boleto',
        pix && 'pix',
        cash && 'cash',
        card && 'card',
        deposit && 'deposit',
      ].filter((item): item is 'boleto' | 'pix' | 'cash' | 'card' | 'deposit' =>
        Boolean(item),
      ),
    }

    handleFilter(formData)
    bottomSheetRef.current?.close()
    handleResetFilters()
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={isModalOpen ? 0 : -1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={handleCloseModal}
      handleIndicatorStyle={{
        backgroundColor: theme.COLORS.GRAY_400,
        width: 56,
        opacity: 0.3,
      }}
    >
      <Content>
        <Title>Filtrar anúncios</Title>
        <ConditionContainer>
          <ConditionTitle>Condição</ConditionTitle>
          <Condition>
            <Option
              variant={condition === 'new' ? 'selected' : 'unselected'}
              onPress={() =>
                setCondition((prevState) =>
                  prevState === 'new' ? null : 'new',
                )
              }
            >
              <OptionText
                variant={condition === 'new' ? 'selected' : 'unselected'}
              >
                Novo
              </OptionText>
              {condition === 'new' && (
                <IconContainer>
                  <Icon />
                </IconContainer>
              )}
            </Option>
            <Option
              variant={condition === 'used' ? 'selected' : 'unselected'}
              onPress={() =>
                setCondition((prevState) =>
                  prevState === 'used' ? null : 'used',
                )
              }
            >
              <OptionText
                variant={condition === 'used' ? 'selected' : 'unselected'}
              >
                Usado
              </OptionText>
              {condition === 'used' && (
                <IconContainer>
                  <Icon />
                </IconContainer>
              )}
            </Option>
          </Condition>
        </ConditionContainer>

        <SwitchContainer>
          <SwitchTitle>Aceita troca?</SwitchTitle>
          <Switch
            value={exchange}
            onValueChange={() => setExchange((prevState) => !prevState)}
            trackColor={{
              false: theme.COLORS.GRAY_500,
              true: theme.COLORS.BLUE_LIGHT,
            }}
            thumbColor={exchange ? theme.COLORS.BLUE : theme.COLORS.GRAY_400}
            style={{
              transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
              width: 50,
              height: 28,
            }}
          />
        </SwitchContainer>

        <PaymentsContainer>
          <PaymentTitle>Meios de pagamento aceitos</PaymentTitle>
          <PaymentsContent>
            <PaymentOptionContainer>
              <Checkbox
                value={boleto}
                onValueChange={() => {
                  setBoleto((prevState) => !prevState)
                }}
                color={theme.COLORS.BLUE_LIGHT}
                aria-checked={boleto}
              />
              <PaymentOption>Boleto</PaymentOption>
            </PaymentOptionContainer>
            <PaymentOptionContainer>
              <Checkbox
                value={pix}
                onValueChange={() => {
                  setPix((prevState) => !prevState)
                }}
                color={theme.COLORS.BLUE_LIGHT}
                aria-checked={pix}
              />
              <PaymentOption>Pix</PaymentOption>
            </PaymentOptionContainer>
            <PaymentOptionContainer>
              <Checkbox
                value={cash}
                onValueChange={() => {
                  setCash((prevState) => !prevState)
                }}
                color={theme.COLORS.BLUE_LIGHT}
                aria-checked={cash}
              />
              <PaymentOption>Dinheiro</PaymentOption>
            </PaymentOptionContainer>
            <PaymentOptionContainer>
              <Checkbox
                value={card}
                onValueChange={() => {
                  setCard((prevState) => !prevState)
                }}
                color={theme.COLORS.BLUE_LIGHT}
                aria-checked={card}
              />
              <PaymentOption>Cartão de Crédito</PaymentOption>
            </PaymentOptionContainer>
            <PaymentOptionContainer>
              <Checkbox
                value={deposit}
                onValueChange={() => {
                  setDeposit((prevState) => !prevState)
                }}
                color={theme.COLORS.BLUE_LIGHT}
                aria-checked={deposit}
              />
              <PaymentOption>Depósito Bancário</PaymentOption>
            </PaymentOptionContainer>
          </PaymentsContent>
        </PaymentsContainer>

        <Footer>
          <Button
            variant="gray"
            title="Resetar filtros"
            onPress={handleResetFilters}
          />
          <Button
            variant="dark"
            title="Aplicar filtros"
            onPress={handleFilterSubmit}
          />
        </Footer>
      </Content>
    </BottomSheet>
  )
}
