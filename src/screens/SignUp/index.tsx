import * as yup from 'yup'
import { useRef, useState } from 'react'
import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { Alert, ScrollView, TextInput } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  Container,
  Footer,
  FooterTitle,
  Form,
  FormFooter,
  Header,
  SubTitle,
  Title,
} from './styles'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { UserPhoto } from '@components/UserPhoto'

import Logo from '@assets/Logo.svg'

type MediaFileProps = {
  uri: string
  type: string
  name: string
}

type FormDataProps = {
  name: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

const signUpSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  phone: yup.string().required('Telefone obrigatório'),
  password: yup.string().required('Senha obrigatória'),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha obrigatória')
    .oneOf([yup.ref('password')], 'As senhas não conferem'),
})

export function SignUp() {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false)
  const [userPhoto, setUserPhoto] = useState<MediaFileProps | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  })

  const inputEmailRef = useRef<TextInput>(null)
  const inputPhoneRef = useRef<TextInput>(null)
  const inputPasswordRef = useRef<TextInput>(null)
  const inputConfirmPasswordRef = useRef<TextInput>(null)

  async function openImagePicker() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        aspect: [1, 1],
      })

      if (result.canceled) {
        return
      }

      if (result.assets[0]) {
        const mediaInfo = await FileSystem.getInfoAsync(result.assets[0].uri)

        const fileExtension = mediaInfo.uri.split('.').pop()

        const mediaFile = {
          name: `photo.${fileExtension}`.toLowerCase(),
          uri: result.assets[0].uri,
          type: `image/${fileExtension}`.toLowerCase(),
        }

        setUserPhoto({
          ...mediaFile,
        })
      }
    } catch (error) {
      Alert.alert(
        'Mídia',
        'Erro ao selecionar mídia, por favor tente novamente.',
      )
    }
  }

  function handleSignUp() {
    setIsSubmitting(true)
    console.log('handleSignUp')
    setIsSubmitting(false)
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: insets.top,
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <Header>
          <Logo />
          <Title>Boas vindas!</Title>
          <SubTitle>
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </SubTitle>
        </Header>

        <Form>
          <UserPhoto onPress={openImagePicker} preview={userPhoto?.uri} />
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  inputEmailRef.current?.focus()
                }}
                onChangeText={onChange}
                value={value}
                error={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  inputPhoneRef.current?.focus()
                }}
                onChangeText={onChange}
                value={value}
                error={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Telefone"
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => {
                  inputPasswordRef.current?.focus()
                }}
                onChangeText={onChange}
                value={value}
                error={errors.phone?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                isPassword
                returnKeyType="next"
                onSubmitEditing={() => {
                  inputConfirmPasswordRef.current?.focus()
                }}
                passwordVisible={() => {
                  setIsPasswordVisible(!isPasswordVisible)
                }}
                secureTextEntry={!isPasswordVisible}
                onChangeText={onChange}
                value={value}
                error={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirmar senha"
                isPassword
                returnKeyType="send"
                onSubmitEditing={handleSubmit(handleSignUp)}
                passwordVisible={() => {
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }}
                secureTextEntry={!isConfirmPasswordVisible}
                onChangeText={onChange}
                value={value}
                error={errors.confirmPassword?.message}
              />
            )}
          />

          <FormFooter>
            <Button
              title="Criar"
              variant="dark"
              onPress={handleSubmit(handleSignUp)}
            />
          </FormFooter>
        </Form>

        <Footer>
          <FooterTitle>Já tem uma conta?</FooterTitle>
          <Button
            title="Ir para o login"
            variant="gray"
            isLoading={isSubmitting}
            onPress={() => navigation.navigate('signin')}
          />
        </Footer>
      </Container>
    </ScrollView>
  )
}
