"use client";
import { useState, useEffect } from "react";
import { useVoice } from "@humeai/voice-react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Controls from "./Controls"; 

export default function App() {
  const { status, connect, disconnect } = useVoice(); 
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  // Function to start the camera and set the stream
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false, 
      });

      // Set the stream state
      setCameraStream(stream);
    } catch (err) {
      console.error("Error accessing camera: ", err);
    }
  };

  // Function to stop the camera and release the tracks
  const stopCamera = () => {
    if (cameraStream) {
      const tracks = cameraStream.getTracks();
      tracks.forEach((track) => track.stop()); // Stop all media tracks
      setCameraStream(null); // Clear the camera stream
    }
  };

  const handleStartCall = () => {
    connect()
      .then(() => {
        startCamera(); // Start the camera when the call connects
      })
      .catch(() => {
        console.error("Error starting the call");
      });
  };

  const handleEndCall = () => {
    disconnect(); // Disconnect the call
    stopCamera(); // Stop the camera
  };

  // Ensure the camera stream is applied to the video element after it's set
  useEffect(() => {
    if (cameraStream) {
      const videoElement = document.getElementById(
        "cameraVideo"
      ) as HTMLVideoElement;
      if (videoElement) {
        videoElement.srcObject = cameraStream;
      }
    }
  }, [cameraStream]);

  return (
    <div>
      <AnimatePresence>
        {status?.value !== "connected" ? (
          <motion.div
            className="fixed inset-0 p-4 flex items-center justify-center bg-background"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              enter: { opacity: 1 },
              exit: { opacity: 0 },
            }}
          >
            <motion.div
              variants={{
                initial: { scale: 0.5 },
                enter: { scale: 1 },
                exit: { scale: 0.5 },
              }}
            >
              <Button
                className="flex items-center gap-1.5"
                onClick={handleStartCall}
              >
                <span>
                  <Phone
                    className="size-4 opacity-50"
                    strokeWidth={2}
                    stroke="currentColor"
                  />
                </span>
                <span>Start Call</span>
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Camera Video Element */}
      {cameraStream && (
        <video
          id="cameraVideo"
          autoPlay
          muted
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "120px", // Adjust size for the small circle
            height: "120px", // Maintain square aspect ratio
            zIndex: 10, // Ensure it's visible above chat
            borderRadius: "50%", // Make it circular
            border: "2px solid #fff", // Optional: add border for visibility
            objectFit: "cover", // Ensure the video fits within the circle
          }}
        />
      )}

      <Controls
        status={status}
        cameraStream={cameraStream}
        stopCamera={stopCamera}
        handleEndCall={handleEndCall}
      />
    </div>
  );
}
