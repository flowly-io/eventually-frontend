import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import LinearProgress from "@material-ui/core/LinearProgress";
import { TableRow, TableCell } from "@material-ui/core";
import dateTimeRange from "../util/dateTimeRange";
import getIcon from "../util/groups";

function groupsToIcons(groups) {
  return groups.map(group => getIcon(group.name));
}

function CapabilityGroup(props) {
  const { capabilities, capabilityCheckpointStates, handleCheckboxes } = props;
  return capabilities.map((capability, capabilityIndex) => {
    const { delegateGroups } = capability.template;
    return (
      <div style={{ paddingBottom: "2rem" }}>
        <Typography variant="h6">{capability.name}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {capability.description}
        </Typography>
        <Typography variant="subtitle2" style={{ display: "flex" }}>
          <span style={{ paddingRight: ".5rem" }}>Delegated groups: </span>
          <span>{groupsToIcons(delegateGroups)}</span>
        </Typography>
        <CapabilityTable
          checkpoints={capability.checkpoints}
          selected={capabilityCheckpointStates[capabilityIndex]}
          handleCheckboxes={(checkpointIndex, newState) =>
            handleCheckboxes(capabilityIndex, checkpointIndex, newState)
          }
        />
      </div>
    );
  });
}

class CapabilityTable extends React.Component {
  render() {
    const { selected, checkpoints, handleCheckboxes } = this.props;
    return checkpoints.map((checkpoint, i) => {
      return (
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              checked={selected[i] || false}
              onChange={(event, checked) => handleCheckboxes(i, checked)}
            />
          </TableCell>
          <TableCell key={i}>{checkpoint.description}</TableCell>
        </TableRow>
      );
    });
  }
}

class ViewCard extends React.Component {
  constructor(props) {
    super(props);
    const { event } = props;
    const { capabilities } = event;
    let capabilityCheckpointStates = Array(capabilities.length).fill([]);
    capabilityCheckpointStates = capabilities.map(capability => {
      const { checkpoints } = capability;
      return checkpoints.map(checkpoint => checkpoint.done);
    });
    this.state = {
      capabilityCheckpointStates: capabilityCheckpointStates
    };
  }

  checkpointStatusChange(capabilityIndex, checkpointIndex, newState) {
    const capabilityCheckpointStates = this.state.capabilityCheckpointStates.slice();
    capabilityCheckpointStates[capabilityIndex][checkpointIndex] = newState;
    this.setState({ capabilityCheckpointStates: capabilityCheckpointStates });
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

    return Math.floor((100 * numCompletedCheckpoints) / numCheckpoints);
  }

  render() {
    const { event } = this.props;
    const { capabilities, startDateTime, endDateTime } = event;
    const { capabilityCheckpointStates } = this.state;
    return (
      <div style={{ padding: 70, width: "100%" }}>
        <Card style={{ padding: "2rem" }}>
          <CardHeader
            title={
              <Typography variant="h3">
                <b>{event.name}</b>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="h5" color="textSecondary">
              {dateTimeRange(startDateTime, endDateTime)}
            </Typography>
          </CardContent>
          <CardContent>
            <LinearProgress
              variant="determinate"
              value={this.getProgressPercent()}
            />
          </CardContent>
          <CardContent>
            <CapabilityGroup
              capabilities={capabilities}
              capabilityCheckpointStates={capabilityCheckpointStates}
              handleCheckboxes={(capabilityIndex, checkpointIndex, newState) =>
                this.checkpointStatusChange(
                  capabilityIndex,
                  checkpointIndex,
                  newState
                )
              }
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ViewCard;
