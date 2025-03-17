
import React from 'react';
import { IoClose } from "react-icons/io5";
import useFetchDetails from '../hooks/useFetchDetails';

interface VideoPlayProps {
  data: { id: number | string };
  close: () => void;
  media_type: string | undefined;
}

interface VideoData {
  results: { key: string }[];
}

const VideoPlay = ({ data, close, media_type }: VideoPlayProps) => {
  const { data: videoData, loading } = useFetchDetails<VideoData>(`/${media_type}/${data?.id}/videos`);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative'>
        <button onClick={close} className='absolute -right-1 -top-6 text-3xl z-50'>
          <IoClose />
        </button>
        {videoData?.results?.[0]?.key ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoData.results[0].key}`}
            className='w-full h-full'
            allowFullScreen
            title="Video Player"
          />
        ) : (
          <div className='text-white text-center p-4'>No video available</div>
        )}
      </div>
    </section>
  );
};

export default VideoPlay;