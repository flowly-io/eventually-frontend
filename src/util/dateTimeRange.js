import moment from "moment";

const MOMENT_FORMAT = "LLL";

function dateTimeRange(startDateISO, endDateISO) {
  return `${moment(startDateISO).format(MOMENT_FORMAT)} - ${moment(startDateISO).format(MOMENT_FORMAT)}`;
}

export default dateTimeRange;
