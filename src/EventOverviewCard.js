import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Edit from "@material-ui/icons/Edit";

function EventOverviewCard(props) {
    const organiserString = props.event.organisers[0]["firstname"]
          + " " + props.event.organisers[0]["lastname"]
          + (props.event.organisers.length > 1 ? ', ...' : '');
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.event.name}
                </Typography>
                <Typography color="textSecondary">
                    {props.event.startDateTime} - {props.event.endDateTime}
                </Typography>
                <Typography color="textSecondary">
                    Organised by: {organiserString}
                </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" color="primary">
                <Edit /> Edit
            </Button>
            </CardActions>
        </Card>
    );
}

export default EventOverviewCard;
