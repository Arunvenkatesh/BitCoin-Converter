import * as types from "../constants/actionTypes";
import * as API_END_POINTS from "../constants/apiEndPoints";
import axios from "axios";
// import moment from "moment";





export function getCurrencyList(callback) {

    return dispatch => {

        axios.get(API_END_POINTS.GET_CURRENCY_LIST, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(async response => {
                if (response.status === 200) {
                    callback && callback(Object.keys(response.data.bpi)[0]);
                    dispatch({
                        type: types.GET_CURRENCY_LIST,
                        isCurrencyListLoaded: true,
                        currencyList: response.data
                    });
                } else {

                    dispatch({
                        type: types.GET_CURRENCY_LIST,
                        isCurrencyListLoaded: false
                    });
                }
            })
            .catch(err => {

                if (err && err.config) {
                    dispatch({
                        type: types.GET_CURRENCY_LIST,
                        isCurrencyListLoaded: false
                    });
                }
            });
    };
}
export function getHistoricalPriceList(currency, startDate, endDate) {

    return dispatch => {

        axios.get(API_END_POINTS.GET_HISTORICAL_PRICE_LIST + `? currency=${currency}&start=${startDate}&end=${endDate}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(async response => {

                if (response.status === 200) {

                    dispatch({
                        type: types.GET_HISTORICAL_PRICE_LIST,
                        isHistoryLoaded: true,
                        historicalPriceList: response.data
                    });

                } else {

                    dispatch({
                        type: types.GET_HISTORICAL_PRICE_LIST,
                        isHistoryLoaded: false
                    });
                }
            })
            .catch(err => {

                if (err && err.config) {
                    dispatch({
                        type: types.GET_HISTORICAL_PRICE_LIST,
                        isHistoryLoaded: false
                    });
                }
            });
    };
}
