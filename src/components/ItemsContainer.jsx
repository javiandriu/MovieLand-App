import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";

const ItemsContainer = ({results}) => {
  console.log({results})
  return (
    <Grid container spacing={1} >
          {
            results.map(item => {
              return (
                <Grid item xs={6} md={1.5} key={item.id}>
                  <Link to={`movies/${item.id}`}><img src={item.image}  width="100%" height={200} alt={item.description}/></Link>
                </Grid>
              )
            })
          }
                
        
      </Grid>
  )
}

export default ItemsContainer