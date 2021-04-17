import * as types from "../constants/actionTypes";


const initialState = {
    isCurrencyListLoaded: false,
    currencyList: [],
    historicalPriceList: [],
    isHistoryLoaded: false

}

export default function currencyList(state = initialState, action) {
    switch (action.type) {
        case types.GET_CURRENCY_LIST: {
            if (action.isCurrencyListLoaded) {
                return Object.assign({}, state, { currencyList: action.currencyList, isCurrencyListLoaded: true });

            }
            else {
                return Object.assign({}, state, { isCurrencyListLoaded: false });

            }
        }
        case types.GET_HISTORICAL_PRICE_LIST: {
            if (action.isHistoryLoaded) {
                return Object.assign({}, state, { historicalPriceList: action.historicalPriceList, isHistoryLoaded: true });

            }
            else {
                return Object.assign({}, state, { isHistoryLoaded: false });

            }
        }
        default:
            return state;
    }
}