
import { useNavigation } from '@react-navigation/native';
import { Formik, useFormik } from 'formik';
import { Button, CheckIcon, FormControl, Input, ScrollView, Select, Stack, TextArea, useToast, View, VStack } from 'native-base';
import React from 'react';

import { useMutation, useQueryClient } from 'react-query';
import { postOne } from '../services/api_services';
import * as ImagePicker from 'expo-image-picker';


export default function AgregarDesaparecido()  {

    const openImagePicker = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permission.granted === 'false') {
            alert('Los permisos de la galeria no estan activados');
            return
        }

        const imageResult = await ImagePicker.launchImageLibraryAsync();
        if(imageResult.cancelled === true) {
            return
        }
        // console.log(imageResult)
        formik.setFieldValue('image', imageResult.uri);
    }
    
 
    const queryClient = useQueryClient()
    const toast = useToast();
    const {mutate} = useMutation(postOne,{
        onSuccess: () => {
            queryClient.invalidateQueries('desaparecidos')
            toast.show({description: 'Desaparecido agregado', duration: 2000, type: 'success'});
        }
    })


    const navigation = useNavigation()
    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            residence: '',
            date: '',
            description: '',
            age: '', 
            image: '',
            sex: '',
            contact: '',
        },
    })


    const handlePress = () => {
        mutate(formik.values)
        formik.resetForm()
        navigation.navigate('Desaparecidos')
    }
    return (
        <View>
            <ScrollView mx='5' my='10'>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline' >Nombre</FormControl.Label>
                        <Input type='text'
                            isRequired={true}
                            placeholder='Nombre'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('name', text)}
                            value={formik.values.name}
                            name='name'
                            id='name'

                        />
                    </Stack>
                </FormControl>
               
                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline' >Apellido</FormControl.Label>
                        <Input type='text'
                            isRequired={true}
                            placeholder='Apellido'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('lastName', text)}
                            value={formik.values.lastName}
                            name='lastName'
                            id='lastName'

                        />
                    </Stack>
                </FormControl>


                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Residencia</FormControl.Label>
                        <Input type='text'
                            isRequired={true}
                            placeholder='Residencia'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('residence', text)}
                            value={formik.values.residence}
                            name='residence'
                            id='residence'

                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Ultima fecha visto</FormControl.Label>
                        <Input type='text'
                            isRequired={true}
                            placeholder='dia/mes/año'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('date', text)}
                            value={formik.values.fechaDesaparicion}
                            name='date'
                            id='fechaDesaparicion'

                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='extrabold' >Descripción del desaparecido</FormControl.Label>
                        <TextArea type='text'
                            isRequired={true}
                            placeholder='Ejemplo: altura, color de ojos, tono de piel, tatuajes, detalle particular, ultimo lugar de desaparicion etc.'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('description', text)}
                            value={formik.values.description}
                            name='description'
                            id='description'

                        />
                    </Stack>
                </FormControl>
              
                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='extrabold' >Contacto</FormControl.Label>
                        <Input type='text'
                            isRequired={true}
                            placeholder='Contacto'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('contact', text)}
                            value={formik.values.contact}
                            name='contact'
                            id='contact'

                        />
                    </Stack>
                </FormControl>

                
                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Edad</FormControl.Label>
                        <Input type='number'
                            isRequired={true}
                            placeholder='Edad'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('age', text)}
                            value={formik.values.age}
                            name='age'
                            id='age'

                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <Select
                            name='sex'
                            isRequired={true}
                            id='sex'
                            accessibilityLabel="sex"
                            selectedValue={formik.values.sex}
                            placeholder="Sexo"
                            _selectedItem={{
                              
                                endIcon: <CheckIcon size="5" />
                            }}
                            mt={1}
                            onValueChange={itemValue => formik.setFieldValue('sex', itemValue)}>
                            <Select.Item label="Masculino" value="Masculino" />
                            <Select.Item label="Femenino" value="Femenino" />

                        </Select>
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <Button onPress={openImagePicker}>Cargar Imagen de desaparecido</Button>
                    </Stack>

                </FormControl>

                <FormControl my='4'>
                    <Button bg='#0B1F3B' type='submit' onPress={handlePress} >Enviar Datos</Button>
                </FormControl>

            </ScrollView>
        </View>
    );
}
