import React, { FC } from 'react';
import './MediaContainer.css';

interface MediaProps {
  videoLink?: string;
  imagePath?: string;
  width?: string;
  height?: string;
}

const MediaContainer: FC<MediaProps> = ({ ...props }) => {
  return (
    <div className="media-wrapper">
      {props?.imagePath ? (
        <iframe src={props.videoLink} width={960} height={405}></iframe>
      ) : (
        <img src={props.imagePath} width={960} height={405} alt="project-image"></img>
      )}
    </div>
  );
};

export default MediaContainer;
