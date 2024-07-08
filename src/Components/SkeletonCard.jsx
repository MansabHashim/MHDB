// import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonCard = () => {
  return (
    <div className='bg-red-300 text-[#34c553] w-32 h-32'>
      <SkeletonTheme baseColor="#34c553" highlightColor="#c53434">
        <p>
          <Skeleton height={300} count={3} />
          <h3>hello</h3>
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonCard;
