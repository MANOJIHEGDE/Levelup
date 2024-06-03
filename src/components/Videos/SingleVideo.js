import React from "react";
import "./SingleVideo.css";

function SingleVideo({ thumb_img, profile_img, title, channel_name, views, timestamps, video_duration }) {
    return (
        <div className="col-4 single-video">
            <div className="thumbnail_img relative">
                <img src={thumb_img} alt="Thumbnail" className="thumb-img pointer" />
                <span className="videos_duration absolute">{video_duration}</span>
            </div>
            <div className="description_option d-flex">
                <div className="profile_img">
                    <img src={profile_img} alt="Channel" className="channel_image pointer" />
                </div>
                <div className="title d-flex flex-column">
                    <span className="title-text">{title}</span>
                    <span className="channelname">{channel_name}</span>
                    <div className="time_description">
                        <span className="views">{views}</span>
                        <span className="timestamp">{timestamps}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleVideo;