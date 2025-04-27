import {configureStore} from '@reduxjs/toolkit';
import PasteSlice from './PasteSlice';

export const Store=configureStore({
    reducer:{
        paste_bot:PasteSlice,
    },
})
