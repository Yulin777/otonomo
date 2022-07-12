import React from 'react';
import './App.css';
import {EventsPanel} from './components/eventsPanel';
import {SubscriptionPanel} from "./components/subscriptionsPanel";
import Divider from '@mui/material/Divider';
import {styled} from "@mui/system";

const StyledContainer = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    width: '100vw'
}));

export const App = () => {
    return <StyledContainer>
        <div style={{flex: 2}}><SubscriptionPanel/></div>

        <Divider orientation="vertical" flexItem/>

        <div style={{flex: 3}}><EventsPanel/></div>
    </StyledContainer>;
}