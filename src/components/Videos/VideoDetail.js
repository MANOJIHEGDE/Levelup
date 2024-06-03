import React from "react";
import { useParams } from "react-router-dom";
import SingleVideo from "./SingleVideo";
import "./VideoDetail.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function VideoDetail() {
    const { id } = useParams();

    const video = {
        id,
        title: "2022 Acura NSX Type S - Hot 600 HP Supercar",
        description: "Most powerful and quickest road-going Acura ever with 600 hp (+27) and 492 lb.-ft. of torque (+16).",
        channelName: "Autocar India",
        views: "5.9M views",
        publishedDate: "5 years ago",
        commentsCount: "3,986 Comments",
        comments: [
            {
                userIcon: "S",
                userName: "@StandingUpForBetter",
                timeAgo: "2 years ago",
                text: "STUNNING! Honda / Acura make some of the best engines in the world and this NSX will be the last of its kind. For the last NSX Acura dialed it up to 11! I want this car! INSTANT classic for sure with a style that will age beautifully going into the future.",
                likes: "10 Likes",
                replies: "3 Replies"
            },
            {
                userIcon: "A",
                userName: "@arthurlambert6418",
                timeAgo: "5 months ago",
                text: "My is metallic blue & it can move with that type S, lots of energy.",
                likes: "2 Likes"
            },
            {
                userIcon: "C",
                userName: "@casink",
                timeAgo: "2 years ago",
                text: "Acura nailed it"
            }
        ]
    };

    const suggestions = [
        { id: 1, title: "Suggestion 1", thumb_img: "https://engineering.linecorp.com/wp-content/uploads/2019/06/frontend_meetup2-1024x576.jpg", profile_img: "https://static.vecteezy.com/system/resources/previews/003/694/140/original/m-metal-alphabet-letter-logo-icon-for-company-with-swoosh-design-vector.jpg", channel_name: "Mapping", video_duration: "10:00" },
        { id: 2, title: "Suggestion 2", thumb_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cAWE4QR9W2MVgTwAtKZUTp-dcaTOWSTLRw&s", profile_img: "https://img.freepik.com/premium-vector/initial-letter-z-with-circle-frame-golden-silver-color-alphabet-symbol-corporate-business_565585-274.jpg", channel_name: "Zellon", video_duration: "12:00" },
        { id: 3, title: "Suggestion 3", thumb_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzNn2gjL42a-g-A5u5Pc8mVLomXTB0LdXKw&s", profile_img: "https://thumbs.dreamstime.com/z/letter-g-alphabet-made-landscape-grass-stream-blue-sky-222970830.jpg", channel_name: "google", video_duration: "12:00" }
    ];

    return (
        <div className="Header">
            <Header />
            <Sidebar/>
            <div className="video-detail-container">
                <div className="video-content">
                    <div className="video-wrapper">
                        <iframe
                            width="1200"
                            height="500"
                            src="https://www.youtube.com/embed/ADzQlyrRG2A?si=AqAcyo16ppECO51N"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <h2>{video.title}</h2>
                    <div className="video-details">
                        <span>{video.views}</span>
                        <span>{video.publishedDate}</span>
                    </div>
                    <p>{video.description}</p>
                    <div className="video-channel">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZffzHsOXXjF6s10uaXDS0mfkmTgHZDDbeg&s" alt="Channel" className="channel-icon" />
                        <span className="channel-name">{video.channelName}</span>
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                    <div className="comments-section">
                        <h3>{video.commentsCount}</h3>
                        {video.comments.map((comment, index) => (
                            <div className="comment" key={index}>
                                <div className="comment-user-icon">{comment.userIcon}</div>
                                <div className="comment-content">
                                    <p className="comment-user-name">{comment.userName} <span className="comment-time">{comment.timeAgo}</span></p>
                                    <p>{comment.text}</p>
                                    <div className="comment-actions">
                                        <span>{comment.likes}</span>
                                        {comment.replies && <span>{comment.replies}</span>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Heading">Suggested Videos for you.</div>
                <div className="iframe-wrapper">
                    <iframe
                        width="1000"
                        height="315"
                        src="https://www.youtube.com/embed/TOlC1S5tE_I?si=Op7qY1v8FRH4bIVu"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="iframe-wrapper">
                    <iframe
                        width="1000"
                        height="315"
                        src="https://www.youtube.com/embed/DcHHRyeX-M0?si=DjqScmz2ySV5vOhd"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="iframe-wrapper">
                    <iframe
                        width="1000"
                        height="315"
                        src="https://www.youtube.com/embed/dgZWf71E9r8?si=BhuYnRRg8WMh9dQT"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;
