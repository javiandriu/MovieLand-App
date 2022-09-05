import  ImageItem from "./ImageItem"
import ImageList from '@mui/material/ImageList';

const VideoList = ({items}) => {
  return (
    <ImageList sx={{ width: "100%" }} cols={3} rowHeight={300} gap={5} >
      {
        items.map(item => {
          return (
            <ImageItem item={item}/>
          )
        })
      }
    </ImageList>
  )
}

export default VideoList