import { Image,ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'

function NavIcon({srce,notShowTint}){
    return(
    <View>
       <Image source={srce} tintColor={notShowTint ? undefined : "#6366f1"}
        alt='' className='size-8'/> 
    </View>
    )
}

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
            name='Hero'
            options={{
                title: 'Hero',
                headerShown: true,
                tabBarIcon: ({focused})=> (
                   <NavIcon srce={images.home} />
                ),
            }}
        />
        <Tabs.Screen 
            name='Search'
            options={{
                title: 'Search',
                headerShown: true,
                tabBarIcon: ({focused})=> (
                   <NavIcon srce={images.coin} notShowTint={true}/>
                ),
            }}
        />
        <Tabs.Screen 
            name='Swap'
            options={{
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({focused})=> (
                   <NavIcon srce={images.home}  />
                ),
            }}
        />
        <Tabs.Screen 
            name='Home'
            options={{
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({focused})=> (
                   <NavIcon srce={images.home} />
                ),
            }}
        />
    </Tabs>
  )
}

export default _layout
