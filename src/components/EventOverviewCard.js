import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Edit from "@material-ui/icons/Edit";
import dateTimeRange from "../util/dateTimeRange";

class EventOverviewCard extends React.Component {
  render() {
    const { event } = this.props;
    const { organisers, startDateTime, endDateTime } = event;
    const { firstname, lastname } = organisers[0];
    const organiserString = `${firstname} ${lastname}${organisers.length > 1 ? ', ...' : ''}`;
    return (
        <Card>
          <CardActionArea component={Link} to={`/view/${event._id}`}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {event.name}
              </Typography>
              <Typography color="textSecondary">
                {dateTimeRange(startDateTime, endDateTime)}
              </Typography>
              <Typography color="textSecondary">
                Organised by: {organiserString}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Edit /> Edit
            </Button>
          </CardActions>
        </Card>
    );
  }
}


export default EventOverviewCard;
