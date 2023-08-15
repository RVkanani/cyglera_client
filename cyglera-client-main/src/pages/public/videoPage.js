import logo from "../../logo.svg";
import "./pages.css";
import Footer from "../../layouts/Footer";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/private/navigation/Navigation";

import adminNavList from "../../helpers/navItems/AdminNavList";
import dieticianNavlist from "../../helpers/navItems/DieticianNavList";
import clientNavList from "../../helpers/navItems/ClientNavList";
import {
  PHYSICIAN,
  CLIENT,
  DIETICIAN,
  CAREPROVIDER,
  TRAINER,
} from "../../helpers/UserRoles";
import useRole from "../../hooks/useRole";

import Dashboard from "../../layouts/Dashboard";

import React, { useState, useEffect } from "react";

const thumbnails = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
];

const videoList = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.jpg",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
];

const VideoList = ({ videos, handleVideoClick }) => {
  return (
    <div className="video-list">
      {videoList.map((video, index) => (
        <div
          className="video-item"
          key={index}
          onClick={() => handleVideoClick(index)}
        >
          <img src={thumbnails[index]} alt={video[index]} />
        </div>
      ))}
    </div>
  );
};

function VideoPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const userRole = useRole();
  const [firstAnswer, setFirstAnswer] = useState(null);
  const [secondAnswer, setSecondAnswer] = useState(null);
  const [thirdAnswer, setThirdAnswer] = useState(null);
  const [fourthAnswer, setFourthAnswer] = useState(null);
  const [fifthAnswer, setFifthAnswer] = useState(null);

  const handleVideoClick = (index) => {
    setVideoUrl(videoList[index]);
    console.log("Clicked video:", videoList[index]);
    setIsVideoOpen(true);
  };

  /**
   * right answers
   * Question: Which exercise is best for cardiovascular health?
Answer: Option a) Running

Question: What is the recommended daily water intake for adults?
Answer: Option d) 8 liters

Question: Which nutrient is essential for muscle repair and growth?
Answer: Option a) Protein

Question: What is the most effective way to improve flexibility?
Answer: Option a) Stretching

Question: Which type of exercise helps in reducing stress and improving mental health?
Answer: Option c) Meditation
   */

  const handleSubmitForm = () => {
    if (
      firstAnswer !== null &&
      secondAnswer !== null &&
      thirdAnswer !== null &&
      fourthAnswer !== null &&
      fifthAnswer !== null
    ) {
      var score = 0;
      if (firstAnswer == "running") {
        score = score + 1;
      }
      if (secondAnswer == "8") {
        score = score + 1;
      }
      if (thirdAnswer == "protien") {
        score = score + 1;
      }
      if (fourthAnswer == "streching") {
        score = score + 1;
      }
      if (fifthAnswer == "meditation") {
        score = score + 1;
      }
      const message = "" + "Your Score is : " + score + " out of 5";
      alert(message);
      // console.log(firstAnswer)
      // console.log(secondAnswer)
      // console.log(thirdAnswer)
      // console.log(fourthAnswer)
      // console.log(fifthAnswer)
    } else {
      alert("Please answer all questions of the list!");
    }
  };

  return (
    <div className="app">
      {userRole === TRAINER && (
        <>
          <Navigation navFeaturesList={dieticianNavlist} />
        </>
      )}
      {/* if role is client, show client layout */}
      {userRole === CLIENT && (
        <>
          <Navigation navFeaturesList={clientNavList} />
        </>
      )}
      {/* if role is dietician, show dietician layout */}
      {userRole === DIETICIAN && (
        <>
          <Navigation navFeaturesList={dieticianNavlist} />
        </>
      )}
      {userRole === PHYSICIAN && (
        <>
          <Navigation navFeaturesList={dieticianNavlist} />
        </>
      )}
      {userRole === CAREPROVIDER && (
        <>
          <Navigation navFeaturesList={dieticianNavlist} />
        </>
      )}

      <br />
      <br />
      <br />
      <br />

      <h1>Nutrition</h1>
      <VideoList handleVideoClick={handleVideoClick} />

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <h1>Physical Activity</h1>
        <VideoList handleVideoClick={handleVideoClick} />

        <h1>Behavior</h1>
        <VideoList handleVideoClick={handleVideoClick} />

        <h1>Quiz</h1>
        <h1>5 Questions with right/wrong answers and score in %</h1>
      </div>

      <div
        style={{
          marginLeft: "10px",
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "10px",
        }}
        class="question"
      >
        Which exercise is best for cardiovascular health?
      </div>
      <div style={{ marginLeft: "20px", fontFamily: "sans-serif" }}>
        <div class="option">
          <input
            onChange={(event) => {
              setFirstAnswer(event.target.value);
            }}
            type="radio"
            name="q1"
            value="running"
            id="option1"
          />
          <label for="option1">Running</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setFirstAnswer(event.target.value);
            }}
            type="radio"
            name="q1"
            value="weight lifting"
            id="option1"
          />
          <label for="option1">Weightlifting</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setFirstAnswer(event.target.value);
            }}
            type="radio"
            name="q1"
            value="yoga"
            id="option1"
          />
          <label for="option1">Yoga</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setFirstAnswer(event.target.value);
            }}
            type="radio"
            name="q1"
            value="swimming"
            id="option1"
          />
          <label for="option1">Swimming</label>
        </div>
      </div>

      <div
        style={{
          marginLeft: "10px",
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "10px",
        }}
        class="question"
      >
        What is the recommended daily water intake for adults?
      </div>
      <div style={{ marginLeft: "20px", fontFamily: "sans-serif" }}>
        <div class="option">
          <input
            onChange={(event) => {
              setSecondAnswer(event.target.value);
            }}
            type="radio"
            name="q2"
            value="2"
            id="option2"
          />
          <label for="option1">2 Liters</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setSecondAnswer(event.target.value);
            }}
            type="radio"
            name="q2"
            value="3"
            id="option2"
          />
          <label for="option1">3 Liters</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setSecondAnswer(event.target.value);
            }}
            type="radio"
            name="q2"
            value="4"
            id="option2"
          />
          <label for="option1">4 Liters</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setSecondAnswer(event.target.value);
            }}
            type="radio"
            name="q2"
            value="8"
            id="option2"
          />
          <label for="option1">8 Liters</label>
        </div>
      </div>

      <div
        style={{
          marginLeft: "10px",
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "10px",
        }}
        class="question"
      >
        Which nutrient is essential for muscle repair and growth?
      </div>
      <div style={{ marginLeft: "20px", fontFamily: "sans-serif" }}>
        <div class="option">
          <input
            onChange={(event) => {
              setThirdAnswer(event.target.value);
            }}
            type="radio"
            name="q3"
            value="protien"
            id="option3"
          />
          <label for="option1">Protein</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setThirdAnswer(event.target.value);
            }}
            type="radio"
            name="q3"
            value="carbohydrates"
            id="option3"
          />
          <label for="option1">Carbohydrates</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setThirdAnswer(event.target.value);
            }}
            type="radio"
            name="q3"
            value="fats"
            id="option3"
          />
          <label for="option1">Fats</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setThirdAnswer(event.target.value);
            }}
            type="radio"
            name="q3"
            value="vitamins"
            id="option3"
          />
          <label for="option1">Vitamins</label>
        </div>
      </div>

      <div
        style={{
          marginLeft: "10px",
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "10px",
        }}
        class="question"
      >
        What is the most effective way to improve flexibility?
      </div>
      <div style={{ marginLeft: "20px", fontFamily: "sans-serif" }}>
        <div class="option">
          <input
            onChange={(event) => {
              setFourthAnswer(event.target.value);
            }}
            type="radio"
            name="q4"
            value="streching"
            id="option4"
          />
          <label for="option4">Stretching</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setFourthAnswer(event.target.value);
            }}
            type="radio"
            name="q4"
            value="high intensity interval training"
            id="option4"
          />
          <label for="option4">High-intensity interval training</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setFourthAnswer(event.target.value);
            }}
            type="radio"
            name="q4"
            value="weight lifting"
            id="option4"
          />
          <label for="option4">Weightlifting</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setFourthAnswer(event.target.value);
            }}
            type="radio"
            name="q4"
            value="cycling"
            id="option4"
          />
          <label for="option4">Cycling</label>
        </div>
      </div>

      <div
        style={{
          marginLeft: "10px",
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "10px",
        }}
        class="question"
      >
        Which type of exercise helps in reducing stress and improving mental
        health?
      </div>
      <div style={{ marginLeft: "20px", fontFamily: "sans-serif" }}>
        <div class="option">
          <input
            onChange={(event) => {
              setFifthAnswer(event.target.value);
            }}
            type="radio"
            name="q5"
            value="aerobic exercise"
            id="option5"
          />
          <label for="option5">Aerobic exercises</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setFifthAnswer(event.target.value);
            }}
            type="radio"
            name="q5"
            value="strength training"
            id="option5"
          />
          <label for="option5">Strength training</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setFifthAnswer(event.target.value);
            }}
            type="radio"
            name="q5"
            value="meditation"
            id="option5"
          />
          <label for="option5">Meditation</label>
        </div>
        <div class="option">
          <input
            onChange={(event) => {
              setFifthAnswer(event.target.value);
            }}
            type="radio"
            name="q5"
            value="pilates"
            id="option5"
          />
          <label for="option5">Pilates</label>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <button
          style={{
            marginTop: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "None",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginBottom: "20px",
          }}
          className="button"
          onClick={() => handleSubmitForm()}
        >
          Click Me
        </button>
      </div>

      {isVideoOpen && (
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Add a semi-transparent background
          }}
        >
          <div
            className="modal-content size-lg"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "80%",
              height: "80%",
              transform: "translate(-50%, -50%)", // Center the modal content
              backgroundColor: "#fff", // Add a white background to the video container
              padding: "20px", // Add some padding for spacing
              borderRadius: "8px", // Add border radius for a rounded look
            }}
          >
            <div className="box">
              <video
                controls
                className="nax-video"
                style={{
                  width: "100%",
                  height: "80%",
                  justifyContent: "center", // Center horizontally
                  alignItems: "center",
                }}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>

              <div className="has-text-right">
                <button
                  className="button is-primary"
                  onClick={() => {
                    setIsVideoOpen(false);
                    document.documentElement.classList.remove("is-clipped");
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <button
            className="modal-close is-large"
            onClick={() => {
              setIsVideoOpen(false);
              setVideoUrl(null);
              document.documentElement.classList.remove("is-clipped");
            }}
            aria-label="close"
          ></button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default VideoPage;