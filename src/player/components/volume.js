import React from 'react';
import VolumenIcon from '../../icons/components/volume';
import './volume.css';

function Volume(props) {
  return (
    <div className="Volume">
      <VolumenIcon color="white" size={25} />
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default Volume;
