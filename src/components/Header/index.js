import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import camera from '../../assets/camera.png';
import logo from '../../assets/logo.png';
import send from '../../assets/send.png';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.logoArea}>
                <TouchableOpacity>
                    <Image
                    style={[styles.directIcon, { width: 30 }]}
                    source={camera}
                    />
                </TouchableOpacity>
                
                <Image
                style={{ marginLeft: 15 }}
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