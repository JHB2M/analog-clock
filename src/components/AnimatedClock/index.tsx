import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
const AnimatedClock = () => {
  const [rotateDegSec, setRotateDegSec] = useState(0);
  const [rotateDegMin, setRotateDegMin] = useState(0);
  const [rotateDegHour, setRotateDegHour] = useState(0);
  useEffect(() => {
    const date = new Date();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    
    setInterval(()=>{
      startRotation()
   },1000)


    setRotateDegHour(hour * 30);
    setRotateDegMin(minute * 6);
    setRotateDegSec(second * 6);

    console.log('Hour : ' + hour + ' minute : ' + minute, 'second : ' + second);
  }, []);

  const startRotation = () => {
    
   
    setRotateDegSec((x) => {
      if (x == 354) {
        setRotateDegMin((x) => {
          if (x == 354) {
            setRotateDegHour((x) => {
              if (x >= 330) {
                return 0;
              }
              return x + 30;
            });
          }
          return x + 6;
        });
        return 0;
      }
      return x + 6;
    });
  };
  const Square = ({index, rotateDeg}: {index: number; rotateDeg: number}) => {
    const rStyle = useAnimatedStyle(() => {
      return {
        transform: [{rotate: `${rotateDeg}deg`}, {translateY: -index * 11}],
      };
    });
    return (
      <Animated.View
        style={[
          {
            height: 14.5,
            width: 2,
            aspectRatio: 1,
            position: 'absolute',
            backgroundColor: 'red',
          },
          rStyle,
        ]}></Animated.View>
    );
  };
  const Square2 = ({index, rotateDeg}: {index: number; rotateDeg: number}) => {
    const rStyle = useAnimatedStyle(() => {
      return {
        transform: [{rotate: `${rotateDeg}deg`}, {translateY: -index * 9}],
      };
    });
    return (
      <Animated.View
        style={[
          {    
            borderRightWidth:1,
            borderRightColor:'black',
            height: 13,
            width: 5,
            aspectRatio: 1,
            position: 'absolute',
            backgroundColor: 'white',
          },
          rStyle,
        ]}></Animated.View>
    );
  };
  const Square3 = ({index, rotateDeg}: {index: number; rotateDeg: number}) => {
    const rStyle = useAnimatedStyle(() => {
      return {
        transform: [{rotate: `${rotateDeg}deg`}, {translateY: -index * 5}],
      };
    });
    return (
      <Animated.View
        style={[
          {
            height: 6,
            width: 5,
            aspectRatio: 1,
            position: 'absolute',
            backgroundColor: 'white',
          },
          rStyle,
        ]}></Animated.View>
    );
  };
  const HOURS =[6,7,8,9,10,11,12,1,2,3,4,5]
  return (
    <View style={styles.container}>
      {new Array(12).fill(0).map((_, index) => {
        return <Square index={index} rotateDeg={rotateDegSec} />;
      })}
      {new Array(12).fill(0).map((_, index) => {
        return <Square2 index={index} rotateDeg={rotateDegMin} />;
      })}
      {new Array(12).fill(0).map((_, index) => {
        return <Square3 index={index} rotateDeg={rotateDegHour} />;
      })}

     {new Array(12).fill(0).map((x,index,array) => {

      return <Text style ={{
        color:'white',
        fontSize:21,
        position:'absolute',

        transform:[
          {rotate : `${index*30}deg`},
          {translateY: 126}
        ]
      }}>{HOURS[index]}</Text>
     })}
      
    </View>
  );
};


export default AnimatedClock;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 12,
    borderColor: 'black',
  },
  button: {
    position: 'absolute',
    fontSize: 20,
    color: 'white',
    bottom: 20,
  },
});
