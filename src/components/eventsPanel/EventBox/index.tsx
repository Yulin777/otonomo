import React, {FC} from 'react';
import type {CarData} from '../../../api/data-generator'
import {Card, CardContent, CardHeader} from "@mui/material";
import {DateTime} from "./DateTime";
import {FuelLevel} from "./FuelLevel";
import {WiperFluid} from "./WiperFluid";
import {Location} from "./Location";
import {styled} from "@mui/system";

const StyledHeader = styled(CardHeader)(() => ({
    background: '#1875D1',
    color: 'white'
}));

export const EventBox: FC<CarData> = ({
                                          vin,
                                          timestamp,
                                          fuel,
                                          wiperFluid,
                                          location
                                      }) => {
    return <Card sx={{marginBottom: '20px'}}>
        <StyledHeader title={vin}/>

        <CardContent>
            <div style={{display: 'flex'}}>

                <div style={{flex: 3}}>
                    <FuelLevel percentage={fuel}/>
                    <WiperFluid percentage={wiperFluid}/>
                    <Location location={location}/>
                </div>

                <div style={{flex: 1}}>
                    <DateTime timestamp={timestamp}/>
                </div>
            </div>
        </CardContent>
    </Card>
};