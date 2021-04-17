import { assign } from "lodash";
import * as currencyActions from "./currencyActions";

export const ActionCreators = assign(
    {},
    currencyActions
);
