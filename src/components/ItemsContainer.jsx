import Grid from '@mui/material/Grid';

const ItemsContainer = ({results}) => {
  console.log({results})
  return (
    <Grid container spacing={1}>
          {
            results.map(item => {
              return (
                <Grid item xs={6} md={1.5}>
                  <img src={item.image} key={item.id} width="100%" height={200} alt={item.description}/>
                </Grid>
              )
            })
          }
                
        
      </Grid>
  )
}

export default ItemsContainer