import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader"
import Edit from "@material-ui/icons/Edit";

function ViewCard(props) {
    return (
      <div style={{padding: 100}}>
        <Card>
            <CardHeader variant="h1" title={props.event.name}/>
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    {props.event.startDateTime} - {props.event.endDateTime}
                </Typography>

            </CardContent>
            <CardContent>
              <Typography variant="h6">
                Capabilities:
              </Typography>
            </CardContent>
        </Card>
      </div>
    );
}

export default ViewCard;