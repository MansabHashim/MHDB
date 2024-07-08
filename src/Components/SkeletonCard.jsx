// import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonCard = () => {
  return (
    <div className='bg-red-300 text-[#34c553] w-32 h-32'>
      <SkeletonTheme color="#34c553" highlightColor="#c53434">
    
          <Skeleton height={300} count={3} duration={3} />
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonCard;
