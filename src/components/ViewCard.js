import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader"
import Checkbox from '@material-ui/core/Checkbox';
import Edit from "@material-ui/icons/Edit";
import { Table, TableRow, TableCell } from '@material-ui/core'


function CapabilityGroup(props) {
  return (
    props.capabilities.map(capability => {
      return (
        <div>
          <Typography variant="h6">
            {capability.name}
          </Typography>
          <CapabilityTable checkpoints={capability.checkpoints} />
        </div>
      )
    })
  )
}

function CapabilityTable(props) {
  return (
    props.checkpoints.map((checkpoint, i) => {
      return (
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          <TableCell key={i} >
            {checkpoint.description}
          </TableCell>
        </TableRow>
      );
    })
  )
}

function ViewCard(props) {
  return (
    <div style={{ padding: 100 }}>
      <Card>
        <CardHeader variant="h1" title={props.event.name} />
        <CardContent>
          <Typography variant="h5" color="textSecondary">
            {props.event.startDateTime} - {props.event.endDateTime}
          </Typography>
        </CardContent>
        <CardContent>
          <CapabilityGroup capabilities={props.event.capabilities} />
        </CardContent>
      </Card>
    </div>
  );
}

export default ViewCard;
