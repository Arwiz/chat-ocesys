"use client"
import React, { useRef, useEffect } from 'react';

interface BackgroundVideoProps {
  backgroundVideoUrl: string;
    foregroundVideoUrl: string;
    children: React.ReactNode
}

 export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ backgroundVideoUrl, foregroundVideoUrl , children }) => {
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const foregroundVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Play both videos when the component mounts
    if (backgroundVideoRef.current && foregroundVideoRef.current) {
      backgroundVideoRef.current.play();
      foregroundVideoRef.current.play();
    }
  }, []);

  return (
    <div className="relative">
      {/* Background Video */}
      <video ref={backgroundVideoRef} autoPlay muted loop className="min-w-full min-h-full absolute inset-0 object-cover">
        <source src={backgroundVideoUrl} type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>

      Foreground Video
      <video ref={foregroundVideoRef} autoPlay muted className="min-w-full min-h-full absolute inset-0 object-cover">
        <source src={foregroundVideoUrl} type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure content is readable */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Your content */}
          <div className="relative z-10 text-white text-center py-24">
              {
            children
              }
      </div>
    </div>
  );
};

