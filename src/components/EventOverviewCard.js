import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Edit from "@material-ui/icons/Edit";

class EventOverviewCard extends React.Component {
  render() {

    const organiserString = this.props.event.organisers[0]["firstname"]
          + " " + this.props.event.organisers[0]["lastname"]
          + (this.props.event.organisers.length > 1 ? ', ...' : '');
    return (
        <Card>
        <CardActionArea component={Link} to={`/view/${this.props.event._id}`}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {this.props.event.name}
              </Typography>
              <Typography color="textSecondary">
                {this.props.event.startDateTime} - {this.props.event.endDateTime}
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
