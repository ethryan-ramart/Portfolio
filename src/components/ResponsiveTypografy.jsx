import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

export default function ResponsiveTypography({ text = 'Responsive Typography', textColor = '#ffffff', xs = '1.5rem', sm = '2rem', md = '3rem', lg = '3rem', xl = '3rem', textShadow=false }) {
    const theme = useTheme();
    
    const isXs = useMediaQuery(theme.breakpoints.up('xs'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isXl = useMediaQuery(theme.breakpoints.up('xl'));
    
    const claseCondicional = textShadow ? 'text-shadow' : '';

    let fontSize = '1rem';
    if (isXl) {
        fontSize = xl;
    } else if (isLg) {
        fontSize = lg;
    } else if (isMd) {
        fontSize = md;
    } else if (isSm) {
        fontSize = sm;
    } else if (isXs) {
        fontSize = xs;
    }

    return (
        <Typography className={`${claseCondicional}`} style={{ fontSize }} sx={{ color: textColor, }}>
            {text}
        </Typography>
    );
}