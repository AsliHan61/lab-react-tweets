import React from "react";
import ProfileImage from "./ProfileImage";
import User from './User';
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} altText="User" />
      <div className="body">
        <div className= "top">
          <User userData={tweet.user} />
          <Timestamp time={tweet.timestamp} />
          </div>
        <Message message={tweet.message} />
        <Actions/>
    </div>
    </div>
  );
};

// function Tweet() {
//   return (
//     <div className="tweet">
//       <img
//         src="https://i.imgur.com/9yw1Fyw.jpg"
//         className="profile"
//         alt="profile"
//       />

//       <div className="body">
//         <div className="top">
//           <span className="user">
//             <span className="name">Ironhack</span>
//             <span className="handle">@ironhack</span>
//           </span>

//           <span className="timestamp">Nov 30, 2020</span>
//         </div>

//         <p className="message">
//           On December 7th, we will be hosting a #webinar that will introduce you
//           to #SQL! Are you ready? 🚀
//         </p>

//         <div className="actions">
//           {/* Font Awesome icons */}
//           <i className="far fa-comment"></i>
//           <i className="fas fa-retweet"></i>
//           <i className="far fa-heart"></i>
//           <i className="fas fa-share"></i>
//         </div>
//       </div>

//       <i className="fas fa-ellipsis-h"></i>
//     </div>
//   );
// }

export default Tweet;
