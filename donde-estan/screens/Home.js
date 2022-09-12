import React, { useEffect, useState } from "react";
import {
  AddIcon,
  Box,
  Button,
  Center,
  Fab,
  Flex,
  Heading,
  HStack,
  Icon,
  ScrollView,
  Skeleton,
  Spinner,
  Text,
  View,
  VStack,
} from "native-base";
import { TarjetaDesaparecido } from "../components/TarjetaDesaparecido";

import { StatusBar, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";
import { getAll } from "../services/api_services";

export default function Home() {
  const navigation = useNavigation();

  const {
    data: desaparecidos,
    isError,
    isLoading,
    refetch,
  } = useQuery("desaparecidos", getAll);

  return (
    <View w="full" h="full" bg="#0B1F3B">
      <StatusBar backgroundColor="#0B1F3B" />
      <Box h="1/6" justifyContent="flex-start" flexDirection="row" alignItems="flex-start" alignContent="center">
        <Text ml="2" color="gray.400" fontSize="sm" letterSpacing="lg" justifyContent="center" alignItems="center" alignContent="center">
          Listado de desaparecidos
        </Text>
        
      </Box>

      {desaparecidos?.ok ? (
        <ScrollView
          horizontal={true}
          w="full"
          h="full"
          bg="white"
          borderTopLeftRadius="3xl"
          borderTopRightRadius="3xl"
          zIndex="1"
          position="absolute"
          top="70"
        >
          <Flex justifyContent="center" direction="row">
            {desaparecidos?.ok &&
              desaparecidos?.data.map((desaparecido, index) => (
                <TarjetaDesaparecido desaparecido={desaparecido} key={index} />
              ))}
          </Flex>
        </ScrollView>
      ) : (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="#0B1F3B" fontSize="md">
            Loading
          </Heading>
        </HStack>
      )}
    </View>
  );
}
