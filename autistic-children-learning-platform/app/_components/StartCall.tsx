"use client";
import { useState } from "react";
import { useVoice } from "@humeai/voice-react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function StartCall() {
  const { status, connect } = useVoice();
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  const startCamera = async () => {
    try {
      // Access the camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false, // Disable audio if not needed
      });

      // Set the video stream to state
      setCameraStream(stream);

      // Optionally, display the video stream in a <video> element
      const videoElement = document.getElementById(
        "cameraVideo"
      ) as HTMLVideoElement;
      if (videoElement) {
        videoElement.srcObject = stream;
      }
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

  return (
    <>
      <AnimatePresence>
        {status.value !== "connected" ? (
          <motion.div
            className={
              "fixed inset-0 p-4 flex items-center justify-center bg-background"
            }
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
                  className={"flex items-center gap-1.5"}
                  onClick={handleStartCall}
                >
                  <span>
                    <Phone
                      className={"size-4 opacity-50"}
                      strokeWidth={2}
                      stroke={"currentColor"}
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
            width: "300px", // Adjust size
            height: "auto",
            zIndex: 10, // Ensure it's visible above chat
          }}
        />
      )}
    </>
  );
}
