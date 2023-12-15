import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faStop, faPlay } from "@fortawesome/free-solid-svg-icons";
import Recorder from "recorder-js";




const SpeakButton = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordingStopped, setIsRecordingStopped] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const recognition = new window.webkitSpeechRecognition();
  const recorder = useRef(new Recorder());
 
  useEffect(() => {
    if (isRecording) {
      const intervalId = setInterval(() => {
        setElapsedTime(getElapsedTime());
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isRecording]);

 

    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const text = event.results[last][0].transcript;
      setTranscript((prevTranscript) => prevTranscript + " " + text);
    };

    recognition.onend = () => {
      if (isRecording) {
        // Continue recording if isRecording is still true
        recognition.start();
      }
    };


  const stopRecording = () => {
      recognition.stop();
      setIsRecording(false);
      setIsRecordingStopped(true)
      setStartTime(null);
      console.log(transcript)
  };
  

  const getElapsedTime = () => {
    if (!startTime) return 0;

    const currentTime = new Date();
    const elapsedMilliseconds = currentTime - startTime;
    return Math.floor(elapsedMilliseconds / 1000);
  };


  const startRecording = () =>{
      recognition.start();
      setIsRecording(true);
      setIsRecordingStopped(false)
      setStartTime(new Date());

  }

  
  return (
    <div className={`mic ${isRecording ? "recording" : ""}`}>
      <span>
        {isRecording && (
          <span>
            Recording {elapsedTime} seconds
            <button onClick={(e) => stopRecording(e)}>
              <FontAwesomeIcon icon={faStop} size="lg" />
            </button>
          </span>
        )}
      </span>
      {isRecordingStopped && (
        <span>
          <button >
            <FontAwesomeIcon icon={faPlay} size="lg" />
          </button>
          <button onClick={(e) => startRecording(e)}>
          <FontAwesomeIcon icon={faMicrophone} size="lg" />
        </button>
        </span>
      )}
      {!isRecording && !isRecordingStopped && (
        <button onClick={(e) => startRecording(e)}>
          <FontAwesomeIcon icon={faMicrophone} size="lg" />
        </button>
      )}
    </div>
  );
};

export default SpeakButton;
