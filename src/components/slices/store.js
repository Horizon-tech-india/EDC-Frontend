import applicationFormReducer from "./formSlice";
import filtersReducer from '../../Pages/Admin/components/filtersSlice';

import { configureStore } from "@reduxjs/toolkit";

export default configureStore ({
    reducer: {
        form : applicationFormReducer,
        filters: filtersReducer,
    }
})