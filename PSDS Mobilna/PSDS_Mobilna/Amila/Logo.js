import React from "react";
import { View, Image } from 'react-native';
import slikica from "../assets/jemoLogo.png";

class Logo extends React.Component {

    render() {
        return (
            <View>
                <Image source={slikica} alt="Jemo logo" style={{ width: 150, height: 150 }} />
            </View>
        );
    }
}
export default Logo;