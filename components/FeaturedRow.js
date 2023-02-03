import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {  ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from './ResturantCard';


const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
    <View className="mt-4 flex-row items-center justify-between px-4">
      <Text className="font-bold text-lg">{title}</Text>
      <ArrowRightIcon size={30} color="#00ccbb"/>

    </View>

    <Text className="text-xs text-gray-500 px-4">{description}</Text>

    <ScrollView 
    horizontal
     contentContainerStyle={{
      paddingHorizontal:15,
    }} 
    showsHorizontalScrollIndicator={false} className="pt-4"
    >

      {/* Resturant cards  */}

      <ResturantCard id={123} imgUrl="https://links.papareact.com/gn7" title="yo Sushi" rating={4.5} genre="japanese" address="123 main St" short_description="This is a Test description" dishes={[]} long={20} lat={0}/>
      <ResturantCard id={123} imgUrl="https://links.papareact.com/gn7" title="yo Sushi" rating={4.5} genre="japanese" address="123 main St" short_description="This is a Test description" dishes={[]} long={20} lat={0}/>
      <ResturantCard id={123} imgUrl="https://links.papareact.com/gn7" title="yo Sushi" rating={4.5} genre="japanese" address="123 main St" short_description="This is a Test description" dishes={[]} long={20} lat={0}/>

    </ScrollView>

    </View>

  )
}

export default FeaturedRow