import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box,Typography,useTheme } from '@mui/material'
import FlexBetween from '@/components/Flexbetween'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

type Props = {}

const Navbar = (props: Props) => {
    const {palette}= useTheme();
    const [selected, setSelected] = useState("dashboard")
  return ( 
    <FlexBetween mb="0.25rem" padding="0.5rem 0rem" color={palette.grey[300]}>
        <FlexBetween gap="2rem">
        <AttachMoneyIcon sx={{fontSize:"28px"}}/>
        <Typography variant='h4'  fontSize="16px">
            Analytics
        </Typography>
        </FlexBetween>
        <FlexBetween gap="2rem">
            <Box sx={{"&:hover":{color:palette.primary[100]}}}>
                <Link to="/" onClick={()=>setSelected("dashboard")} style={{color: selected==="dashboard"?"inherit" :palette.grey[700],textDecoration:"inherit"}}>
                    Dashboard
                </Link>
            </Box>
            <Box sx={{"&:hover":{color:palette.primary[100]}}}>
                <Link to="/predictions" onClick={()=>setSelected("predictions")} style={{color: selected==="predictions"?"inherit" :palette.grey[700],textDecoration:"inherit"}}>
                    Predictions
                </Link>
            </Box>
        </FlexBetween>
    </FlexBetween>
   )
}
export default Navbar