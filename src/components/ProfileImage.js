import React from "react";

const ProfileImage = ({ image, altText}) => {
    return <img src={image} className="profile" alt={altText} />;

};

export default ProfileImage;
