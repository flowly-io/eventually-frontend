import moment from "moment";

const MOMENT_FORMAT = "DD/MM HH:MM";

function dateTimeRange(startDateISO, endDateISO) {
  return `${moment(startDateISO).format(MOMENT_FORMAT)}  -   ${moment(
    endDateISO
  ).format(MOMENT_FORMAT)}`;
}

export default dateTimeRange;
