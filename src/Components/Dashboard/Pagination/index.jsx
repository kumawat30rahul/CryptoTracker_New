import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import './styles.css'

export default function PaginationButtons({page,handlePageChange}) {

    return (
        <div className='pagination'>
            <Pagination 
                count={10} 
                showFirstButton 
                showLastButton 
                page={page}
                onChange={(event,value)=>handlePageChange(event,value)}
                sx={{
                color: "var(--white)",
                "& .Mui-selected":{
                    backgroundColor:"var(--blue) !important",
                    color: "white",
                    borderColor: "var(--blue) !important"
                },
                "& .MuiPaginationItem-ellipsis": {
                    border: "0px solid var(--grey) !important",
                },
                "& .MuiPaginationItem-text": {
                    color: "var(--white)",
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