import React, { useEffect, useState } from 'react';
import { Box, styled, Button, Grid, Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { departments } from "../stores/Departments/departmentsSlice";
import { useDepartmentSave, useFunctionsSave, useLocationSave, useJobsSave } from "../services";
import { locations } from '../stores/Locations/locationSlice';
import { functions } from '../stores/Functions/functionsSlice';
import { jobs } from '../stores/Jobs/jobsSlice';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from "../constants/routes.js";
import FilterComponent from '../components/FilterComponent';
import AutocompleteInput from '../components/AutocompleteInput';
import JobDetailsSubComponent from '../components/JobDetailsSubComponent';

const HomePage = () => {
  const navigate = useNavigate();
  const { setDepartmentsList } = useDepartmentSave();
  const { setLocationsList } = useLocationSave();
  const { setFunctionsList } = useFunctionsSave();
  const { setJobsList, getJobsByQuery } = useJobsSave();
  const departmentList = useSelector(departments);
  const locationList = useSelector(locations);
  const functionsList = useSelector(functions);
  const jobsList = useSelector(jobs);
  const [query, setQuery] = useState("");
  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    getList();
  }, []);
  const getList = () => {
    setDepartmentsList();
    setLocationsList();
    setFunctionsList();
    setJobsList();
  }
  const handleFilter = (e, data, type) => {

    if (data) {
      getJobsByQuery(`${type}=${data.id}`);
    } else {
      setJobsList();
    }
  }
  return (
    <>
      <Box sx={{ mr: 5, height: { md: 150 }, ml: 5, backgroundColor: '#f4f4f4', mt: 2 }}>
        <Grid container >
          <Grid item xs={12}  ><FilterComponent onClick={() => getJobsByQuery(`q=${query}`)} onChange={handleOnChange} /> </Grid>
          <Grid item md={4} xs={12} >
            <AutocompleteInput
              getOptionLabel={(department) => department.title}
              options={departmentList}
              onChange={(e, data) => {
                handleFilter(e, data, 'dept');
              }}
              label="Department"
            />

          </Grid>
          <Grid item md={4} xs={12} >
            <AutocompleteInput
              getOptionLabel={(location) => location.city}
              options={locationList}
              onChange={(e, data) => {
                handleFilter(e, data, 'loc');
              }} label="Locations"
            />
          </Grid>
          <Grid item md={4} xs={12} >
            <AutocompleteInput
              getOptionLabel={(functions) => functions.title}
              options={functionsList}
              onChange={(e, data) => {
                handleFilter(e, data, 'fun');
              }} label="Functions"
            />
          </Grid>
        </Grid>

      </Box>
      <Box sx={{ m: 5 }}>
        {jobsList.map((job) => {
          return <><Typography sx={{ fontSize: '26px', fontWeight: 'bold', mt: 3 }}>{job.department ? job.department.title : job.title}</Typography>
            <Divider sx={{ height: '5px', backgroundColor: '#6295e3', width: '50px', mb: 1 }} />
            <Grid container justifyContent={'space-between'}>
              <Grid item>
                <JobDetailsSubComponent titleFontSize={'20px'} descriptionFontSize={'16px'} job={job} />
              </Grid>
              <Grid item sx={{ mt: { xs: 2 } }}>
                <Button variant="outlined" sx={{ mr: { md: 2 }, borderRadius: 30, }} onClick={() => window.open(job.applyUrl)}>Apply</Button>
                <Button variant="text" color="primary" onClick={() => navigate(`${ROUTES.JOBDETAILS}/${job.id}`)}>View</Button>
              </Grid>
            </Grid >
          </>
        })}

      </Box >
    </>
  )
}

export default HomePage;