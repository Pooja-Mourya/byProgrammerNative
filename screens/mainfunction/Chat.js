import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/layout/Header'
import { COLORS, SIZES } from '../../constants'
import FAB from 'react-native-fab'

const Chat = () => {
  return (
    <View style={{ backgroundColor: COLORS.support4_08, flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.support1,
          height: (SIZES.height * 1) / 5,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../assets/images/banner-01.png')}
            style={{
              width: 45,
              height: 45,
              borderRadius: 50,
              top: 5,
              left: 5,
            }}
          />
          <View style={{ margin: 10, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: SIZES.h4, color: COLORS.dark }}>
              POOJA MOURYA
            </Text>
            <Text>Share what you are up to</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 60 }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/live-streaming.png')}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  top: 10,
                  // left: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/bell.png')}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  top: 10,
                  left: 15,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Header />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          backgroundColor: COLORS.support3_08,
          margin: 10,
          padding: 10,
          borderRadius: SIZES.radius,
        }}
      >
        <Image
          source={require('../../assets/images/banner-01.png')}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            top: 5,
            left: 5,
          }}
        />
        <View style={{ margin: 10, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: SIZES.h4, color: COLORS.dark }}>POOJA</Text>
          <View style={{ flexDirection: 'row', marginLeft: -10 }}>
            <Image
              source={require('../../assets/icons/telephone.png')}
              style={{
                width: 20,
                height: 20,
                borderRadius: 50,
                top: 5,
                // left: 5,
              }}
            />
            <Text style={{ padding: 5 }}>no Answer</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 60 }}>
          <Text style={{ marginTop: 10 }}>10:30</Text>
        </View>
      </View>
      <FAB
        buttonColor={COLORS.support1}
        iconTextColor="#FFFFFF"
        onClickAction={() => {
          console.log('FAB pressed')
        }}
        visible={true}
        iconTextComponent={
          <Image
            source={require('../../assets/icons/arrow_right_up.png')}
            style={{
              width: 20,
              height: 20,
              //   borderRadius: 50,
              //   top: 5,
              //   left: 5,
            }}
          />
        }
      />
    </View>
  )
}

export default Chat
