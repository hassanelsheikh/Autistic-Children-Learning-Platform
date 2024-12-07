"use client";

import { useState, useEffect } from "react";
import { useVoice } from "@humeai/voice-react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function StartCall() {
  const { status, connect } = useVoice();
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  // Function to start the camera and set the stream
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false, // No need for audio
      });

      // Set the stream state
      setCameraStream(stream);
    } catch (err) {
      console.error("Error accessing camera: ", err);
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
  }, [cameraStream]); // Re-run when cameraStream changes

  return (
    <>
      <AnimatePresence>
        {status.value !== "connected" ? (
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
            <AnimatePresence>
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
            </AnimatePresence>
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
    </>
  );
}
