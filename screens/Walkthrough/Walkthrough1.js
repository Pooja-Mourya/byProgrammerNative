import { View, Text, Dimensions, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { FONTS, constants, SIZES } from '../../constants'
import Animated from 'react-native-reanimated'

const ITEM_WIDTH = 120

const Walkthrough1 = () => {
  //ROW 1
  const [rowOne, setRowOne] = useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images,
  ])
  //ROW 2
  const [currentPosition1, setCurrentPosition1] = useState(0)
  const [rowSecond, setRowSecond] = useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
  ])
  const [currentPosition2, setCurrentPosition2] = useState(0)

  //ref

  const FirstListRef = useRef()
  const SecondListRef = useRef()

  useEffect(() => {
    let positionTimer
    const timer = () => {
      positionTimer = setTimeout(() => {
        setCurrentPosition1((prePosition) => {
          console.log('preposition', prePosition)
          position = Number(prePosition) + 1
          FirstListRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          })

          const maxOffset =
            constants.walkthrough_01_01_images.length * ITEM_WIDTH

          if (prePosition > maxOffset) {
            offset = prePosition - maxOffset
            FirstListRef?.current?.scrollToOffset({
              offset,
              animated: false,
            })
            return offset
          } else {
            return position
          }
        })
        //slider
        timer()
      }, 32)
    }
  })
  return (
    <View>
      <FlatList
        ref={FirstListRef}
        keyExtractor={(_, index) => index}
        horizontal
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        // listKeys={'Slider1'}
        data={rowOne}
        // scrollEnabled={false}
        // onViewableItemsChanged={viewAnimatedChange.current}

        // onScroll={Animated.event(
        //   [{nativeEvent: {contentOffset: {x: scrollX}}}],
        //   {useNativeDriver: false},
        // )}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                style={{ width: 110, height: 110, marginTop: 180 }}
                source={item}
              />
            </View>
          )
        }}
      />
      <FlatList
        ref={SecondListRef}
        keyExtractor={(_, index) => `Slider2${index}`}
        horizontal
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        listKeys={'Slider2'}
        data={rowSecond}
        // onViewableItemsChanged={viewAnimatedChange.current}

        // onScroll={Animated.event(
        //   [{nativeEvent: {contentOffset: {x: scrollX}}}],
        //   {useNativeDriver: false},
        // )}
        // scrollEnabled={false}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                style={{ width: 110, height: 110, marginBottom: 180 }}
                source={item}
              />
            </View>
          )
        }}
      />
    </View>
  )
}

export default Walkthrough1
