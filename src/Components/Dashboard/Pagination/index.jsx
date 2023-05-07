import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import './styles.css'
import { useContext } from 'react';
import { DarkModeProvider } from '../../../App';

export default function PaginationButtons({page,handlePageChange}) {
    const {darkMode} = useContext(DarkModeProvider)
    return (
        <div className='pagination'>
            <Pagination 
                count={10} 
                showFirstButton 
                showLastButton 
                page={page}
                onChange={(event,value)=>handlePageChange(event,value)}
                sx={{
                color: `${darkMode ? 'var(--white)' : 'var(--black)' }`,
                "& .Mui-selected":{
                    backgroundColor:"var(--blue) !important",
                    color: "white",
                    borderColor: "var(--blue) !important"
                },
                "& .MuiPaginationItem-ellipsis": {
                    border: "0px solid var(--grey) !important",
                },
                "& .MuiPaginationItem-text": {
                    color: `${darkMode ? 'var(--white)' : 'var(--black)' }`,
                    border: "1px solid var(--grey)",
                },
                "@media (max-width: 375px)": {
                    "& .MuiPaginationItem-circular":{
                        height: "20px",
                        minWidth: "20px"
                    }
                }
            }}
            />
        </div>
    )
  }