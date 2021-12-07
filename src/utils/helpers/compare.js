import moment from "moment";

import { generateTimestamp } from "./generate";

let nowDate = generateTimestamp();

export const compareDateToNowInMinutes = (selectedDate) => moment.duration(selectedDate.diff(nowDate)).asMinutes() > 0;