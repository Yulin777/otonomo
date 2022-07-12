import {createSlice} from '@reduxjs/toolkit'
import {CarData} from "../api/data-generator";
import createCarStreamer from "../api/car-data-streamer";

interface ISubscription {
    [VIN: string]: boolean // this dictionary structure will avoid duplications
}

interface IState {
    subscribedVINs: ISubscription
    events: CarData[]
    streamers: any // dictionary of dictionary VIN:stream
    isFilteredByFuel: boolean
}

const initialState: IState = {
    subscribedVINs: {},
    events: [],
    streamers: {},
    isFilteredByFuel: false
};

const subscriptionsSlice = createSlice({
    name: 'subscriptions',
    initialState,
    reducers: {
        addSubscription: (state, action) => {
            const VIN = action.payload;
            const carStreamer = createCarStreamer(VIN);

            state.subscribedVINs[VIN] = true;
            state.streamers[VIN] = carStreamer;

            carStreamer.start();
        },

        toggleSubscription: (state, action) => {
            const {checked, VIN} = action.payload;
            if (checked) {
                state.streamers[VIN].start();
            } else {
                state.streamers[VIN].stop();
            }
            state.subscribedVINs[VIN] = checked;
        },

        filterByFuel: (state, action) => {
            state.isFilteredByFuel = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const {addSubscription, toggleSubscription, filterByFuel} = subscriptionsSlice.actions;

export default subscriptionsSlice.reducer;