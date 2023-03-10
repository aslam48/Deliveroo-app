import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';



const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown:false
        })
    },[])

  return (
    <SafeAreaView className="bg-white pt-5">
     
      <View className="flex-row pb-3 items-center mx-4 space-x-2 mt-3 ">
        <Image source={{ uri: "https://links.papareact.com/wru",}} className="h-7 w-7 bg-gray-300 rounded-full p-4 "/>

        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location 
            <ChevronDownIcon size={20} color="#00ccbb"/>
            </Text>
        </View>

       <UserIcon size={30} color="#00ccbb"/>
      </View>


      {/* Search  */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
      <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
        <MagnifyingGlassIcon color="#00ccbb"/>
        <TextInput placeholder='Resturant and cuisines' keyboardType='default'/>
      </View>
      <AdjustmentsVerticalIcon color="#00ccbb"/>
      </View>


           {/* Body  */}

           <ScrollView className="bg-gray-100">
            {/* Categories  */}
            <Categories/>

            {/* feature rows  */}

            <FeaturedRow title="feature"
            id="123"
            description="Paid placements from our partners"
            />

            {/* Tasty Discount */}
            <FeaturedRow title="feature"
            id="1234"
            description="Paid placements from our partners"
          
            />

            {/* Offers near you  */}
             <FeaturedRow title="feature"
            id="12345"
            description="Paid placements from our partners"
          
            />

           </ScrollView>


    
    </SafeAreaView>
  )
}

export default HomeScreen