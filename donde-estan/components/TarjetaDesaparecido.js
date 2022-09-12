
import { useNavigation } from '@react-navigation/native';
import { ArrowForwardIcon, Box, Center, Heading, Image, Pressable, Text, VStack, Fab, Icon } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet,View } from 'react-native';


export const TarjetaDesaparecido = ({desaparecido}) => {
    
    const navigation = useNavigation()

    const styles = StyleSheet.create({
        root: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.00,

            elevation: 3,
        },
        seeMore: {
            marginRight: 5

        },

        text: {
            fontSize: 17,
            textAlign: 'center',
        }


    })

    


    return (
        <Box w='sm'
            h='md'
            mx='5'
            my='5'
            bg='white'
            borderRadius='xl'
           
            style={styles.root}>

            <Center mt='2'>
                <Heading size="sm">{desaparecido?.name}{' '}{desaparecido?.lastName}</Heading>
            </Center>

            <Center h='1/2'>

                <Image alt='desaparecido'
                    source={{uri:desaparecido?.image}}
                    width='2/6'
                    flex={1}
                    resizeMode='contain'
                    borderRadius='full' />
            </Center>

            <VStack space={3} mx='2' alignItems='center' justifyContent='center'>
                <Text  style={styles.text} ><Heading size="sm" >Descripción:</Heading> {desaparecido?.description}</Text>
                <Text style={styles.text} ><Heading size="sm" >Residencia:</Heading>  {desaparecido?.residence}</Text>
                <Text style={styles.text} ><Heading size="sm" >Fecha de desaparición:</Heading>  {desaparecido?.date}</Text>
                <Text style={styles.text} ><Heading size="sm" >Edad:</Heading>  {desaparecido?.age}</Text>
                <Text style={styles.text} ><Heading size="sm" >Sexo:</Heading>  {desaparecido?.sex}</Text>
                <Text style={styles.text} ><Heading size="sm" >Contacto:</Heading>  {desaparecido?.contact}</Text>

            </VStack>

            <View style={{justifyContent:"center",marginTop: 20, alignItems:'center' }}>
          <Image
            style={{ width: 100, height: 100}}
            source={require("../assets/splash-screen.png")}
          />
            <Text style={{fontWeight:'bold', alignContent:'center',alignItems:'center',justifyContent:'center'}}>No te rindas! Encontra esa persona que tanto te importa!</Text>
        </View>

        </Box >
    );

}

