import React from 'react';

interface LoopingVideoProps {
  src: string;
  width?: string;
  height?: string;
}

const LoopingVideo: React.FC<LoopingVideoProps> = ({ 
  src='@/public/videos/intro.mp4', 
  width = "800px", 
  height = "300px" // 16:9 ratio for 800px width
}) => {
  return (
    <div className="bg-black flex items-center justify-center ">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ 
          width: width,
          height: height,
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoopingVideo;