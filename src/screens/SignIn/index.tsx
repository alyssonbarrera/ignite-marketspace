import * as yup from 'yup'
import { useRef, useState } from 'react'
import { TextInput, ScrollView } from 'react-native'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  Container,
  Content,
  Footer,
  FooterContent,
  FooterTitle,
  Form,
  FormFooter,
  FormTitle,
  Header,
  SubTitle,
} from './styles'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import Logo from '@assets/logo.svg'
import Name from '@assets/name.svg'

const signInSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
})

type FormDataProps = {
  email: string
  password: string
}

export function SignIn() {
  const insets = useSafeAreaInsets()

  const inputEmailRef = useRef<TextInput>(null)
  const inputPasswordRef = useRef<TextInput>(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  })

  function handleSignIn({ email, password }: FormDataProps) {}

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: insets.top,
      }}
    >
      <Container>
        <Content>
          <Header>
            <Logo
              style={{
                marginBottom: 19,
              }}
            />
            <Name />
            <SubTitle>Seu espaço de compra e venda</SubTitle>
          </Header>

          <Form>
            <FormTitle>Acesse sua conta</FormTitle>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  ref={inputEmailRef}
                  placeholder="E-mail"
                  keyboardType="email-address"
                  error={errors.email?.message}
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={() => {
                    inputPasswordRef.current?.focus()
                  }}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  ref={inputPasswordRef}
                  placeholder="Senha"
                  secureTextEntry={!isPasswordVisible}
                  isPassword
                  passwordVisible={() => {
                    setIsPasswordVisible(!isPasswordVisible)
                  }}
                  onChangeText={onChange}
                  value={value}
                  error={errors.password?.message}
                />
              )}
            />
            <FormFooter>
              <Button
                title="Entrar"
                variant="blue"
                onPress={handleSubmit(handleSignIn)}
                isLoading={isSubmitting}
              />
            </FormFooter>
          </Form>
        </Content>
        <Footer>
          <FooterContent>
            <FooterTitle>Ainda não tem acesso?</FooterTitle>
            <Button title="Cadastre-se" />
          </FooterContent>
        </Footer>
      </Container>
    </ScrollView>
  )
}
