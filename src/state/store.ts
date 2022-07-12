import {configureStore} from '@reduxjs/toolkit';
import subscriptionsSlice from './reducers';

export default configureStore({
    reducer: {
        subscriptions: subscriptionsSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

