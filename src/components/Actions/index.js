import React ,{ useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
//import QRCode from 'react-native-qrcode-svg';

export default function Actions() {
    const [qrCodeImage, setQrCodeImage] = useState("");
    const [slectedButton, setSelectedButton] = useState(null);

    const generateQrCode = (value) => {
        setQrCodeImage("./assets.profile.jpg");
        setSelectedButton(value);
        
    };
    return (
        
        <ScrollView style={styles.container} horizontal={true} showsHorizontaLScroLLIndicador={false}>
           
            <TouchableOpacity style={styles.actionButton} onPress={generateQrCode}>
                <View style={styles.areaButton}>                
                  <AntDesign name='qrcode' size={26} color= "#000"/>
                  <Text style={styles.labelButton}>Qrcode</Text>
                </View>
                <Text style={styles.image}>{qrCodeImage && `Image: ${qrCodeImage}`}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="barcode" size={26} color="#000"/>
                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>

        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight:84,
        marginBottom:14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart:14,
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 32 
    },
    areaButton:{
        backgroundColor:'#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    labelButton:{
        marginTop: 5,
        textAlign: 'center',
        fontSize: 15,
    },
    htmlContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        border: '1px solid #ccc',
        borderRadius: 5,
        padding: 20,
    },
    button:{
        padding: 10,
        backgroundColor: '#007AFF',

    },
    image:{
        fontSize: 16,
    },
});