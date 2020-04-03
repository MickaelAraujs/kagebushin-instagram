import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import camera from '../../assets/camera.png';
import logo from '../../assets/logo.png';
import send from '../../assets/send.png';

import styles from './styles';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.logoArea}>
                <TouchableOpacity>
                    <Image
                    style={[styles.directIcon, { width: 35 }]}
                    source={camera}
                    />
                </TouchableOpacity>
                
                <Image
                style={{ marginLeft: 8, marginTop: 12 }}
                source={logo}
                />
            </View>

            <TouchableOpacity>
                <Image
                style={styles.directIcon}
                source={send}
                />
            </TouchableOpacity>
        </View>
    );
}