import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from '@material-ui/core/Checkbox';
import LinearProgress from "@material-ui/core/LinearProgress";
import { Button, CardActions, TableRow, TableCell } from '@material-ui/core';
import Delete from "@material-ui/icons/Delete"
import dateTimeRange from "../util/dateTimeRange";

function CapabilityGroup(props) {
  const { capabilities, capabilityCheckpointStates, handleCheckboxes } = props;
  return (
    capabilities.map((capability, capabilityIndex) => {
      return (
        <div>
        <div style={{padding : 25}}>
          <Typography variant="h6">
            {capability.name}
          </Typography>
          <Typography>
            {capability.description}
          </Typography>
          <CapabilityTable checkpoints={capability.checkpoints} selected={capabilityCheckpointStates[capabilityIndex]} handleCheckboxes={(checkpointIndex, newState) => handleCheckboxes(capabilityIndex, checkpointIndex, newState)}/>
        </div>
        <CardActions>
        <Button size="small" color="primary">
          <Delete /> Remove
        </Button>
      </CardActions>
      </div>
      );
    })
  );
}

class CapabilityTable extends React.Component {
  render() {
    const { selected, checkpoints, handleCheckboxes} = this.props;
    return (
      checkpoints.map((checkpoint, i) => {
        return (
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selected[i] || false}
                onChange={(event, checked) => handleCheckboxes(i, checked)}
              />
            </TableCell>
            <TableCell key={i} >
              {checkpoint.description}
            </TableCell>
          </TableRow>
        );
      })
    );
  };
}

class ViewCard extends React.Component {
  constructor(props) {
    super(props);
    const { event } = props;
    const { capabilities } = event;
    let capabilityCheckpointStates = Array(capabilities.length).fill([]);
    capabilityCheckpointStates = capabilities.map(capability => {
      const { checkpoints } = capability;
      return checkpoints.map(checkpoint=>checkpoint.done);
    });
    this.state = {
      capabilityCheckpointStates: capabilityCheckpointStates,
    };
  }

  checkpointStatusChange(capabilityIndex, checkpointIndex, newState) {
    const capabilityCheckpointStates = this.state.capabilityCheckpointStates.slice();
    capabilityCheckpointStates[capabilityIndex][checkpointIndex] = newState;
    this.setState({capabilityCheckpointStates: capabilityCheckpointStates});
  }

  getProgressPercent() {
    const { capabilityCheckpointStates } = this.state;
    if (capabilityCheckpointStates.length === 0) {
      return 100;
    }

    let numCheckpoints = 0;
    let numCompletedCheckpoints = 0;
    for (let capability of capabilityCheckpointStates) {
      for (let checkpoint of capability) {
        numCheckpoints++;
        if (checkpoint) {
          numCompletedCheckpoints++;
        }
      }
    }

    return Math.floor(100 * numCompletedCheckpoints / numCheckpoints);
  }

  render() {
    const { event } = this.props;
    const { capabilities, startDateTime, endDateTime } = event;
    const { capabilityCheckpointStates } = this.state;
    return (
      <div style={{ padding: 70 }}>
        <Card>
          <CardHeader variant="h1" title={event.name} />
          <CardContent>
            <Typography variant="h5" color="textSecondary">
                {dateTimeRange(startDateTime, endDateTime)}
            </Typography>
          </CardContent>
          <CardContent>
            <LinearProgress variant="determinate" value={this.getProgressPercent()} />
          </CardContent>
          <CardContent>
        <CapabilityGroup capabilities={capabilities} capabilityCheckpointStates={capabilityCheckpointStates} handleCheckboxes={(capabilityIndex, checkpointIndex, newState) => this.checkpointStatusChange(capabilityIndex, checkpointIndex, newState)}/>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ViewCard;
