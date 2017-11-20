import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'


// ACTIION TYPES
const BUILD_SETTLEMENT = 'BUILD_SETTLEMENT'
const BUILD_CITY = 'BUILD_CITY'


// INITIAL STATE
const initialState = {
    p1_settlement: false,
    p1_city: false,
}

// ACTION CREATORS
export const buildSettlement = () => ({ type: BUILD_SETTLEMENT, p1_settlement: true })
export const buildCity = () => ({ type: BUILD_CITY, p1_city: true })


// THUNK CREATORS
// export const getScheduleClicked = (currentDate, departureStation, arrivalStation) => {
//   return (dispatch) => {
//     axios.get(`/api/trips/${currentDate}/${departureStation}/${arrivalStation}`)
//       .then(res => res.data)
//       .then(data => dispatch(gotSchedule(data)))
//       .then(dispatch(menuSelected('section3')))
//   };
// };


// REDUCER
function reducer(state = initialState, action) {
    switch (action.type) {
        case BUILD_SETTLEMENT:
            return Object.assign({}, state, { p1_settlement: action.p1_settlement });
        case BUILD_CITY:
            return Object.assign({}, state, { p1_city: action.p1_city });
        default:
            return state
    }
}

const middleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true })
))

const store = createStore(
    reducer, middleware
);
export default store

