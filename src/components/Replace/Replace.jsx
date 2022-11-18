import React, { useEffect } from "react";

const Replace = ({ navigation, where }) => {
    useEffect(() => {
        navigation.replace(where);
    }, []);
    
    return <></>
}

export default Replace;