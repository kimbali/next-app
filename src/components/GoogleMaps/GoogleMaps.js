import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './GoogleMaps.module.scss';

export function GoogleMaps() {
  const apiKey = '';

  return (
    <div className={styles.googleMaps}>
      <div className='dumb'>
        <h3>Google Maps</h3>
      </div>
      {/* <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
          defaultZoom={12}
        /> */}
    </div>
  );
}

// export const GoogleMaps = () => {
//   return (
//     <div className={styles.googleMaps}>
//       <p>Kim</p>
//     </div>
//   );
// };
