import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const JobDetailsSubComponent = (props) => {
    const { titleFontSize, descriptionFontSize, job } = props;
    return (
        <>
            <Typography sx={{ fontSize: titleFontSize, fontWeight: 'bold' }}>{job.title}</Typography>
            <Grid container >
                {job.department && <Grid item > <Typography sx={{ fontSize: descriptionFontSize }}><BusinessIcon sx={{ fontSize: descriptionFontSize }} />{job.department.title}</Typography></Grid>
                }
                <Grid item > <Typography sx={{ fontSize: descriptionFontSize }}><LocationOnIcon sx={{ fontSize: descriptionFontSize }} />{job.location.city}</Typography></Grid>
                {job.type && <Grid item > <Box sx={{ backgroundColor: '#f4f4f4', width: 80, height: 20 }} ><Typography sx={{ fontSize: descriptionFontSize, textTransform: 'uppercase' }} >{job.type}</Typography></Box></Grid>
                }
            </Grid>
        </>
    )
}

export default JobDetailsSubComponent;