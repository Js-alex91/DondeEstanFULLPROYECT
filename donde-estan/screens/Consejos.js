import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { borderColor } from 'styled-system';

export default function Consejos() {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.Text}> "Qué tenés que hacer si no aparece un familiar?" 
            Si alguien de tu familia desaparece, hacé la denuncia de manera inmediata en la comisaría más cercana. No tenés que esperar que pase un tiempo mínimo, y la comisaría está obligada a tomar tu denuncia.
            </Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.Text}>Brindá todos los datos que conozcas de la persona desaparecida, por más irrelevantes que parezcan.
Llevá la foto más actualizada que tengas.
A continuación: Comunicate con su entorno cercano (amigos, compañeros de escuela o de trabajo, etc) e informá sus datos a la autoridad a cargo de la investigación.
No uses los teléfonos que la persona pueda saber de memoria, por si intenta llamar.</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.Text}>
Toda información que llegue a tu conocimiento, comunicala a la policía o al fiscal.
Si difundís la búsqueda en redes sociales, te recomendamos que solo informes el teléfono de contacto de la comisaría interviniente o el que los investigadores te propongan.</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    box:{
        margin: 5,
        width: 300,
        height: 220,
        borderWidth: 10,
        borderRadius: 25,
        borderColor: '#0B1F3B',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    Text:{
        textAlign:'center',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    }    
    
});