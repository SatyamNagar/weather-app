import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function WeatherSearch(props) {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            props.setLocationQuery(event.target.value)
        }
    };

    return (

        <Paper
            component="form"
            onSubmit={(evt) => {
                evt.preventDefault();
            }}
            sx={{ background: 'transparent', boxShadow: 'none', display: 'flex', alignItems: 'center', minWidth: 200 }}
        >
            <IconButton type="button" aria-label="search">
                <SearchIcon />
            </IconButton>

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="City / Zip Code"
                inputProps={{ 'aria-label': 'search city' }}
                onKeyDown={handleKeyPress}
            />
        </Paper>
    );
}