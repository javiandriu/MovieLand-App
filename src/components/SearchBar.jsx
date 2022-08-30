import { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import search from "../helpers/api"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const SearchBar = () => {
    const [inputValue, setInputValue] = useState()
    const [searchResult, setSearchResult] = useState([])
    //const [anchorEl, setAnchorEl] = useState(null);

    const handleInputChange = ({target}) => {
      if(!target.value) {
        setSearchResult([])
        return
      }  
      const result = search(target.value)

      setSearchResult(result.results)
      //setAnchorEl(target);
      console.log(result.results)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // const handleClose = () => {
    //   setAnchorEl(null);
    // };

  return (
    <form onSubmit={handleSubmit}>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleInputChange}
              value={inputValue}
            />
          </Search>

          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={searchResult.length > 0}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          > */}
            
          {/* {searchResult.map(item => {
            return (
              <MenuItem 
                key={item.id} 
                onClick={handleClose}
              >
                {item.title}
              </MenuItem>
            )
          })
          } 
          </Menu> */}
    </form>
  )
}

export default SearchBar