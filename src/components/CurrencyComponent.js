import React, { Component } from 'react';
import ChartComponent from "./ChartComponent"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import map from "lodash/map";
import { currencyStyles } from "../styles/currency.js"
import moment from "moment"



class CurrencyComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currencyList: [],
            isCurrencyListLoaded: false,
            currencyListOptions: [],
            currencyValue: {},
            historicalPriceList: [],
            isHistoryLoaded: false,
            chartValues: [],
            chartKeys: []

        }
        this.onSelect = this.onSelect.bind(this);
    }
    componentDidMount() {
        this.props.actions.getCurrencyList((res) => {
            this.props.actions.getHistoricalPriceList(res, "2020-09-01", "2020-10-30")
        })
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.currencyReducer.isCurrencyListLoaded !== prevState.isCurrencyListLoaded) {
            if (nextProps.currencyReducer.currencyList !== prevState.currencyList) {
                return ({

                    currencyList: nextProps.currencyReducer.currencyList.bpi,
                    isCurrencyListLoaded: nextProps.currencyReducer.isCurrencyListLoaded,
                    currencyListOptions: map((nextProps.currencyReducer.currencyList.bpi), e => { return { "label": e.description, "value": e.code } }),

                    currencyValue: { "label": Object.values(nextProps.currencyReducer.currencyList.bpi)[0].description, "value": Object.values(nextProps.currencyReducer.currencyList.bpi)[0].code }
                }) // <- this is setState equivalent
            }

        }
        if (nextProps.currencyReducer.isHistoryLoaded === true) {
            if (nextProps.currencyReducer.historicalPriceList !== prevState.historicalPriceList) {
                return ({

                    historicalPriceList: nextProps.currencyReducer.historicalPriceList.bpi,
                    isHistoryLoaded: nextProps.currencyReducer.isHistoryLoaded,
                    chartValues: Object.values(nextProps.currencyReducer.historicalPriceList.bpi),
                    chartKeys: map(Object.keys(nextProps.currencyReducer.historicalPriceList.bpi), (e) => moment(e).format('D MMM'))
                }) // <- this is setState equivalent
            }
        }
        return null
    }
    onSelect(e) {
        this.setState({
            currencyValue: e
        }, () => { this.props.actions.getHistoricalPriceList(e.value, "2020-09-01", "2020-10-30") })
    }

    render() {
        return (

            <div style={currencyStyles.container}>
                {this.state.isCurrencyListLoaded &&
                    <div style={currencyStyles.currencyContainer}>
                        <p style={currencyStyles.currencyLabel}>
                            {"1 Bitcoin Equals"}
                        </p>

                        <Dropdown options={this.state.currencyListOptions} onChange={(e) => { this.onSelect(e) }} value={this.state.currencyValue} />

                        <p style={currencyStyles.currencyRate}>
                            {this.state.isCurrencyListLoaded && this.state.currencyList[this.state.currencyValue.value].rate} {(this.state.currencyValue).label}
                        </p>
                    </div>}
                <div style={currencyStyles.chartContainer} id="chart">
                    {this.state.isHistoryLoaded &&
                        <ChartComponent datas={this.state.chartValues} label={this.state.chartKeys} />}
                </div>
            </div>


        );
    }
}

export default CurrencyComponent;
