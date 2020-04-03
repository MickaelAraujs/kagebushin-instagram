import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import home from '../../assets/home.png';
import search from '../../assets/search.png';
import post from '../../assets/post.png';
import like from '../../assets/like.png';
import profile from '../../assets/profile.png';

import styles from './styles';

export default function Menu() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                style={styles.icon}
                source={home}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                style={styles.icon}
                source={search}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                style={styles.icon}
                source={post}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                style={styles.icon}
                source={like}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                style={styles.icon}
                source={profile}
                />
            </TouchableOpacity>
        </View>
    );
}