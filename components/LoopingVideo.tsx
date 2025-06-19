import React from 'react';

interface LoopingVideoProps {
  src: string;
  className?: string;
}

const LoopingVideo: React.FC<LoopingVideoProps> = ({
  src = '@/public/videos/intro.mp4',
  className = 'w-full max-w-[1000px] h-[200px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-lg',
}) => {
  return (
    <div className='bg-black flex items-center justify-center py-4 sm:py-8'>
      <video autoPlay loop muted playsInline className={className}>
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoopingVideo;
