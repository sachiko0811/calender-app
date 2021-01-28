import { SCHEDULES_ADD_ITEM } from "./actions";

const init = {
    items: [],
    isLoading: false
};

            // array of items -> test
            // id: 1,
            // title: "test",
            // date: dayjs(),
            // location: "class",
            // description: "about coding"

const scheduleReducer = (state = init, action) =>  {
    const { type, payload } =  action;

    switch(type) {
        case SCHEDULES_ADD_ITEM:
            return {
                ...state,
                items: [...state.items, { ...payload, id: state.items.length + 1 }]
            };
            default:
                return state;
    }
};

export default scheduleReducer;