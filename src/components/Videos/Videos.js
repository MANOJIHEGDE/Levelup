import React from "react";
import "./Videos.css";
import { useNavigate } from "react-router-dom";
import Filter from "../Filter/Filter";
import SingleVideo from "./SingleVideo";
import { Navigate } from "react-router-dom";

function Videos() {

    const navigate = useNavigate();

    const handleClick = () => {

          navigate('/videod');
        }
    
    return (
        <div className="videos">
            <Filter />
            <div className="video-grid" onClick={handleClick}>
                <SingleVideo 
                    thumb_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZffzHsOXXjF6s10uaXDS0mfkmTgHZDDbeg&s" 
                    profile_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZffzHsOXXjF6s10uaXDS0mfkmTgHZDDbeg&s"
                    title="Drag race"
                    channel_name="Autocar"
                    video_duration="01:01:29"
                    
                />
                <SingleVideo 
                    thumb_img="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" 
                    profile_img="https://media.licdn.com/dms/image/C560BAQGm42k-a5xtOQ/company-logo_200_200/0/1642258530131/gowebknot_logo?e=2147483647&v=beta&t=PWYGMNGfHLZ29rXFGe-mOtMQ49MfFwNnvxO2gMJonKE"
                    title="CSS 3 Course 2023"
                    channel_name="Webknot"
                    video_duration="03:05:20"
                />
                <SingleVideo 
                    thumb_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoRS8_GQ4JJoTPipqgS9jWlOHY2K6sr1bUrtDVgpXZQ&s" 
                    profile_img="https://media.licdn.com/dms/image/C560BAQGm42k-a5xtOQ/company-logo_200_200/0/1642258530131/gowebknot_logo?e=2147483647&v=beta&t=PWYGMNGfHLZ29rXFGe-mOtMQ49MfFwNnvxO2gMJonKE"
                    title="Html Course 2022"
                    channel_name="Webknot"
                    video_duration="02:05:00"
                />
                 <SingleVideo 
                    thumb_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoRS8_GQ4JJoTPipqgS9jWlOHY2K6sr1bUrtDVgpXZQ&s" 
                    profile_img="https://media.licdn.com/dms/image/C560BAQGm42k-a5xtOQ/company-logo_200_200/0/1642258530131/gowebknot_logo?e=2147483647&v=beta&t=PWYGMNGfHLZ29rXFGe-mOtMQ49MfFwNnvxO2gMJonKE"
                    title="Html Course 2022"
                    channel_name="Webknot"
                    video_duration="02:05:00"
                />
                <SingleVideo 
                    thumb_img="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" 
                    profile_img="https://media.licdn.com/dms/image/C560BAQGm42k-a5xtOQ/company-logo_200_200/0/1642258530131/gowebknot_logo?e=2147483647&v=beta&t=PWYGMNGfHLZ29rXFGe-mOtMQ49MfFwNnvxO2gMJonKE"
                    title="React Course 2024"
                    channel_name="Webknot"
                    video_duration="01:01:29"
                />
                <SingleVideo 
                    thumb_img="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" 
                    profile_img="https://media.licdn.com/dms/image/C560BAQGm42k-a5xtOQ/company-logo_200_200/0/1642258530131/gowebknot_logo?e=2147483647&v=beta&t=PWYGMNGfHLZ29rXFGe-mOtMQ49MfFwNnvxO2gMJonKE"
                    title="CSS 3 Course 2023"
                    channel_name="Webknot"
                    video_duration="03:05:20"
                />
             


               
            </div>
        </div>
    );
}

export default Videos;