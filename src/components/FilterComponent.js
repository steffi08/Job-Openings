import React from 'react';
import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilterComponent = (props) => {
    const { onClick, onChange } = props;
    return (
        <Paper
            component="form"
            sx={{
                display: "flex",
                alignItems: "center",
                width: { md: 700 },
                margin: 'auto',
                mt: { md: 2 }

            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for Jobs"
                inputProps={{ "aria-label": "search high-resolution image" }}
                onChange={onChange}
            />
            <IconButton
                sx={{ p: "10px" }}
                aria-label="menu"
                onClick={onClick}
            >
                <SearchIcon />
            </IconButton>
        </Paper>

    )
}

export default FilterComponent