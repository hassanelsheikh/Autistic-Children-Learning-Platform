"use client";

import { useState, useEffect } from "react";

export default function CameraStream() {
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        setCameraStream(stream);

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

    startCamera();

    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraStream]);

  return cameraStream ? (
    <video
      id="cameraVideo"
      autoPlay
      muted
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        width: "300px",
        height: "auto",
        zIndex: 10,
        borderRadius: "8px",
      }}
    />
  ) : null;
}
