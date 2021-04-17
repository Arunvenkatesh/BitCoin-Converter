import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions/";
import { PropTypes } from "prop-types";

export default function CurrencyContainer(ComposedComponent) {
    class CurrencyContainer extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {
            currencyReducer: state.currencyReducer
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(ActionCreators, dispatch)
        };
    }
    return connect(mapStateToProps, mapDispatchToProps)(CurrencyContainer);
}

CurrencyContainer.contextTypes = {
    router: PropTypes.object
};