import React from 'react';
import Gif from './gif';

// const GifList = (props) => {
//   return (
//     <div className="gif-list">
//       {props.gifs.map(gif => <Gif id={gif} key={gif} selectGif={props.selectGif} />)}
//     </div>
//   );
// };

//destructuring
const GifList = ({gifs, selectGif}) => {//props.gifs..with curly
	return (
	  <div className="gif-list">
		{gifs.map(gif => <Gif id={gif} key={gif} selectGif={selectGif} />)}
	  </div>
	);
  };

export default GifList;