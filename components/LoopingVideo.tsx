import React from 'react';

interface LoopingVideoProps {
  src: string;
  className?: string;
}

const LoopingVideo: React.FC<LoopingVideoProps> = ({
  src = '@/public/videos/intro.mp4',
  className = 'w-full h-auto max-w-[900px] object-contain',
}) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`rounded-2xl${className}`}
      >
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoopingVideo;
