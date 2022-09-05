import React from 'react'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


const items=  [
  {
      "id": "tt5491994",
      "rank": "1",
      "title": "Planet Earth II",
      "fullTitle": "Planet Earth II (2016)",
      "year": "2016",
      "image": "https://m.media-amazon.com/images/M/MV5BMGZmYmQ5NGQtNWQ1MC00NWZlLTg0MjYtYjJjMzQ5ODgxYzRkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_Ratio0.7015_AL_.jpg",
      "crew": "David Attenborough, Gordon Buchanan",
      "imDbRating": "9.4",
      "imDbRatingCount": "142207"
  }
]

const ImageItem = ({item}) => {
  return (
        <ImageListItem key={item.img}>
            <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            height={164}
            loading="lazy"
            />
            <ImageListItemBar
            title={item.title}
            subtitle={item.year}
            actionIcon={
                <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                >
                <InfoIcon />
                </IconButton>
            }
            />
        </ImageListItem>
  )
}

export default ImageItem