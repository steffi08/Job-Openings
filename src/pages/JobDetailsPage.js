import React, { useEffect, useState } from 'react'
import useJobSave from '../services/Jobs/useJobsSave';
import { useLocation } from 'react-router-dom';
import { job, jobs } from '../stores/Jobs/jobsSlice';
import { useSelector } from 'react-redux';
import { Box, Button, Divider, Typography, styled, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import JobDetailsSubComponent from '../components/JobDetailsSubComponent';
const parse = require('html-react-parser');
const JobDetailsPage = () => {
    const { setJobById, getJobsByQuery } = useJobSave();
    const jobDetails = useSelector(job);
    const { pathname } = useLocation();
    const jobsList = useSelector(jobs);
    const [jobDetail, setJobDetail] = useState(jobDetails);
    useEffect(() => {
        setJobById(pathname.split("/")[2]);
    }, []);
    useEffect(() => {
        getList();
    }, jobDetail)
    const getList = () => {
        getJobsByQuery(`dept=${jobDetail.department ? jobDetail.department.id : '3'}`)
    }
    return (
        <>
            {jobDetails && <Box sx={{ m: 5 }}>
                <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>Details</Typography>
                <Box sx={{ m: 5 }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>{jobDetails.department ? jobDetails.department.title : jobDetails.title} At {jobDetails.company}</Typography>
                    <JobDetailsSubComponent titleFontSize={'26px'} descriptionFontSize={'16px'} job={jobDetails} />
                    <Button variant='contained' sx={{ mt: 2, width: '150px', borderRadius: 30 }} onClick={() => window.open(jobDetails.applyUrl)} > Apply</Button>
                </Box>
                <Divider sx={{ height: 2, mt: 2, mb: 5 }} />
                <Grid container>
                    <Grid item md={9}> <Box sx={{ m: 5, width: '70%' }}>{parse(jobDetails.description)}</Box></Grid>
                    <Grid item md={3}>
                        <Box sx={{ height: 300, width: 250, backgroundColor: "#f0f3fb", mt: 5, p: 2 }}>
                            <Typography sx={{ fontSize: '16px', textTransform: 'uppercase', fontWeight: 'bold', }}>Other job openings</Typography>
                            <Divider sx={{ height: '5px', backgroundColor: '#6295e3', width: '50px', mb: 2 }} />
                            {jobsList.slice(0, 4).map((job) => {
                                return (<JobDetailsSubComponent titleFontSize={'15px'} descriptionFontSize={'12px'} job={job} />
                                )
                            })}
                        </Box>
                        <Typography sx={{ fontSize: '16px', textTransform: 'uppercase', fontWeight: 'bold', mt: 4 }}>Share job openings</Typography>
                        <Divider sx={{ height: '5px', backgroundColor: '#6295e3', width: '50px', mb: 2 }} />
                        <IconButton aria-label="delete" color="primary" onClick={() => { window.open('https://www.facebook.com/teknorix') }}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="delete" color="primary" onClick={() => { window.open('https://www.linkedin.com/company/teknorix/') }}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton aria-label="delete" color="primary" onClick={() => { window.open('https://twitter.com/teknorix') }}>
                            <TwitterIcon />
                        </IconButton>
                    </Grid>
                </Grid>

            </Box >}
        </>
    )
}

export default JobDetailsPage;