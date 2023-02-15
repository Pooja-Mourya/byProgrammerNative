import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { TextButton, FormInput } from '../../components'
import { SIZES, images, icons, FONT, COLORS, FONTS } from '../../constants'
import { MotiView, useAnimationState } from 'moti'
import { Shadow } from 'react-native-shadow-2'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const AuthMain = ({ navigation }) => {
  const [mode, setMode] = useState('SignIn')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [click, setClick] = useState(true)

  const SignInFunction = () => {
    return (
      <Animated.View
        style={{ marginTop: SIZES.padding, height: SIZES.height * 0.55 }}
      >
        <Shadow>
          <View style={styles.authContainer}>
            <Text
              style={{
                width: '60%',
                lineHeight: 45,
                color: COLORS.dark,
                ...FONTS.dark,
                fontSize: SIZES.h1,
                paddingHorizontal: 10,
              }}
            >
              Sign in to continue
            </Text>
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps={'handled'}
              extraScrollHeight={-300}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
              }}
            >
              <FormInput
                containerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                placeholder="Email"
                value={email}
                onChange={(text) => setEmail(text)}
                prependComponent={
                  <Image
                    source={require('../../assets/icons/email.png')}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                }
              />
              <FormInput
                containerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChange={(text) => setPassword(text)}
                prependComponent={
                  <Image
                    source={require('../../assets/icons/lock.png')}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                }
              />
              <View style={{ alignItems: 'flex-end' }}>
                <TextButton
                  label={'Forgot password'}
                  contentContainerStyle={{
                    marginTop: SIZES.radius,
                    backgroundColor: 'null',
                  }}
                  labelStyle={{
                    color: COLORS.support1,
                    ...FONTS.h4,
                    paddingHorizontal: SIZES.padding,
                  }}
                />
              </View>
              <TextButton
                label={'Log In'}
                contentContainerStyle={{
                  height: 55,
                  borderRadius: SIZES.radius,
                  margin: 10,
                }}
                labelStyle={{
                  color: COLORS.light,
                  ...FONTS.h4,
                }}
                onPress={() => navigation.navigate('MyTab')}
              />
            </KeyboardAwareScrollView>
          </View>
        </Shadow>
      </Animated.View>
    )
  }
  const SignUpFunction = () => {
    return (
      <Animated.View
        // state={AnimationState}
        style={{ marginTop: SIZES.padding, height: SIZES.height * 0.55 }}
      >
        <Shadow>
          <View style={styles.authContainer}>
            <Text
              style={{
                width: '60%',
                lineHeight: 45,
                color: COLORS.dark,
                ...FONTS.dark,
                fontSize: SIZES.h1,
                paddingHorizontal: 10,
              }}
            >
              Sign up
            </Text>
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps={'handled'}
              extraScrollHeight={-300}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
              }}
            >
              <FormInput
                containerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                placeholder="Email"
                value={email}
                onChange={(text) => setEmail(text)}
                prependComponent={
                  <Image
                    source={require('../../assets/icons/email.png')}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                }
              />
              <FormInput
                containerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChange={(text) => setPassword(text)}
                prependComponent={
                  <Image
                    source={require('../../assets/icons/lock.png')}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                }
              />
              <FormInput
                containerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,
                }}
                placeholder="Confirm Password"
                secureTextEntry={click}
                value={password}
                onChange={(text) => setPassword(text)}
                prependComponent={
                  <Image
                    source={require('../../assets/icons/lock.png')}
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: SIZES.base,
                    }}
                  />
                }
                appendComponent={
                  <TouchableOpacity onPress={() => setClick(!click)}>
                    <Image
                      source={
                        !click
                          ? require('../../assets/icons/eye.png')
                          : require('../../assets/icons/eye-off.png')
                      }
                      style={{
                        width: 25,
                        height: 25,
                        marginRight: SIZES.base,
                      }}
                    />
                  </TouchableOpacity>
                }
              />
              <TextButton
                label={'Sign Up'}
                contentContainerStyle={{
                  height: 55,
                  borderRadius: SIZES.radius,
                  margin: 10,
                }}
                labelStyle={{
                  color: COLORS.light,
                  ...FONTS.h4,
                }}
              />

              <View style={{ alignItems: 'flex-start' }}>
                <TextButton
                  label={'if are you register user login'}
                  contentContainerStyle={{
                    marginTop: SIZES.radius,
                    backgroundColor: 'null',
                  }}
                  labelStyle={{
                    color: COLORS.support1,
                    ...FONTS.h4,
                    paddingHorizontal: SIZES.padding,
                  }}
                  onPress={() => {
                    return <SignInFunction />
                  }}
                />
              </View>
            </KeyboardAwareScrollView>
          </View>
        </Shadow>
      </Animated.View>
    )
  }

  const AuthContainer = () => {
    if (mode == 'SignIn') {
      return <SignInFunction />
    } else {
      return <SignUpFunction />
    }
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.lightGrey,
      }}
    >
      <Image
        source={require('../../assets/images/logo.png')}
        style={{
          alignSelf: 'center',
          marginTop: SIZES.padding * 2,
          width: 50,
          height: 50,
        }}
      />

      <View style={styles.authContainer}>
        {/* <SignUpFunction /> */}
        {AuthContainer()}
      </View>

      <TextButton
        label="Toggle"
        onPress={() => {
          if (mode === 'SignUp') {
            // AnimationState.transitionTo('SignUp')
            setMode('SignUp')
          } else {
            // AnimationState.transitionTo('SignIn')
            setMode('SignIn')
          }
        }}
      />
    </View>
  )
}

export default AuthMain

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    width: SIZES.width - SIZES.padding * 2,
    // paddingHorizontal: SIZES.padding,
    // paddingVertical: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.light,
  },
})
