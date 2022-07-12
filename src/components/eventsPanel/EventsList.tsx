import React, {FC, useMemo, useState} from 'react';
import {styled} from "@mui/system";
import {EventBox} from "./EventBox";
import {useSelector} from "react-redux";
import {CarData} from "../../api/data-generator";

const StyledContainer = styled('div')(() => ({
    padding: 20,
    overflowY: 'auto',
    height: '100%'
}));

const FUEL_FILTER_THRESHOLD = 0.15;

export const EventsList: FC = () => {
    const [events, setEvents] = useState([] as CarData[]);
    const streamers = useSelector(((state: any) => state.subscriptions.streamers));
    const isFilterByFuel = useSelector(((state: any) => state.subscriptions.isFilteredByFuel));

    Object.entries(streamers).forEach((carStreamer: any) => {
        carStreamer[1].subscribe((carData: CarData) => {
            setEvents([...events, carData]);
        });
    });

    const filteredEvents = useMemo(() => {
        if (!isFilterByFuel) return events;

        return events.filter(event => event.fuel < FUEL_FILTER_THRESHOLD);
    }, [isFilterByFuel, events]);

    return <StyledContainer>{filteredEvents.map(event =>
        <EventBox key={`${event.vin}${event.timestamp}`}
                  vin={event.vin}
                  timestamp={event.timestamp}
                  fuel={event.fuel}
                  wiperFluid={event.wiperFluid}
                  location={event.location}/>
    )}
    </StyledContainer>;
};