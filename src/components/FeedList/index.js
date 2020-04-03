import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import like from '../../assets/like.png';
import liked from '../../assets/liked.png';
import comment from '../../assets/comment.png';
import send from '../../assets/send.png';
import save from '../../assets/save.png';

import styles from './styles';

export default function FeedList({ item }) {

    const [likes, setLikes] = useState(false);
    const [likeNumbers, setLikeNumbers] = useState(item.likes);

    function handleLikeNumbers(likes) {
        if (likes <= 0) return;

        return (
        <Text style={styles.likesText}>{likes} {likes > 1 ? 'likes' : 'like'}</Text>
        );
    }

    function handleLikes() {
        setLikes(!likes);
        
        if (!likes) {
            setLikeNumbers(likeNumbers + 1);
            handleLikeNumbers(likeNumbers);
        } else {
            setLikeNumbers(likeNumbers - 1);
            handleLikeNumbers(likeNumbers);
        }
    }

    return (
        <View style={{ marginVertical: 8 }}>
            <View style={styles.postHeader}>
                <Image
                style={styles.profile}
                source={{ uri: item.imgProfile_url }}
                />
                <TouchableOpacity>
                    <Text style={styles.username}>{item.name}</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Image
                style={styles.post}
                source={{ uri: item.imgPost_url }}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.likeArea}>
                        <TouchableOpacity onPress={handleLikes}>
                            <Image
                            style={styles.icons}
                            source={likes ? liked : like}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                            style={styles.icons}
                            source={comment}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                            style={styles.icons}
                            source={send}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                       <TouchableOpacity>
                            <Image
                            style={styles.icons}
                            source={save}
                            />
                       </TouchableOpacity>
                    </View>
                </View>

                {handleLikeNumbers(likeNumbers)}

                <View style={styles.textArea}>
                    <Text style={styles.username}>{item.name}</Text>
                    <Text style={styles.postDescription}>{item.description}</Text>
                </View>
            </View>
        </View>
    )
}