import React from "react";
import  { Mutation } from "react-apollo";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from '@material-ui/core/Checkbox';
import LinearProgress from "@material-ui/core/LinearProgress";
import { Grid, CardActions, TableRow, TableCell } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import dateTimeRange from "../util/dateTimeRange";
import getIcon from "../util/groups";
import Delete from "@material-ui/icons/Delete"


import { REMOVE_CAPABILITY } from '../mutations/capabilities';

import { GET_CAP } from "../queries/events";

import { CircularProgress } from "@material-ui/core";

function capabilityMenus () {
  return (
      <Query query={GET_EVENTS}>
      {({ loading, error, data }) => {
        if (loading) return <CircularProgress />;
        if (error) return `Error! ${error.message}`;
        const { events } = data;
        return events.map((event, key) => <ViewCard event={event} key={key} />);
      }}
    </Query>
  );
}

function groupsToIcons(groups) {
  return groups.map(group => getIcon(group.name));
}

class CapabilityGroup extends React.Component {
  removeCapability = (id) => {
    console.log(`Removed capability ${id}! (but not really)`)
  }
  
  render() {
    const { event_id, capabilities, capabilityCheckpointStates, handleCheckboxes } = this.props;
    return (
      capabilities.map((capability, capabilityIndex) => {
        const { delegateGroups } = capability.template;
        return (
          <div>
            <div style={{ padding: 25 }}>
              <Grid container justify="space-between">
                <Grid item>
                  <Typography variant="h6" >
                    {capability.name}
                  </Typography>
                </Grid>
                <Grid item>
                <CardActions>
                  <Mutation mutation={REMOVE_CAPABILITY}>
                  {(addCapability) => (
                    <Button 
                    onClick={() => addCapability({ variables: { eventId: event_id, capabilityId: capability._id } })} 
                    size="small" color="primary"
                    >
                      <Delete /> Remove
                    </Button>
                  )}
                  </Mutation>
                </CardActions>
                </Grid>
              </Grid>
  
              <Typography>
                {capability.description}
              </Typography>
              <Typography variant="subtitle2" style={{ display: 'flex' }}>
                <span style={{ paddingRight: ".5rem" }}>Delegated groups: </span><span>{groupsToIcons(delegateGroups)}</span>
              </Typography>
              <CapabilityTable checkpoints={capability.checkpoints} selected={capabilityCheckpointStates[capabilityIndex]} handleCheckboxes={(checkpointIndex, newState) => handleCheckboxes(capabilityIndex, checkpointIndex, newState)} />
            </div>
  
          </div>
        );
      })
    );
  }
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
      addCapabilityDialogOpen: false,
      capabilityToAdd: "",
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

  handleAddCapabilityClick() {
    this.setState({addCapabilityDialogOpen: true});
  }

  handleAddCapabilityChange(event) {
    this.setState({capabilityToAdd: event.target.value});
  }

  render() {
    const { event } = this.props;
    const { capabilities, startDateTime, endDateTime } = event;
    const { capabilityCheckpointStates, addCapabilityDialogOpen, capabilityToAdd} = this.state;
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
            <CapabilityGroup event_id={event._id} capabilities={capabilities} capabilityCheckpointStates={capabilityCheckpointStates} handleCheckboxes={(capabilityIndex, checkpointIndex, newState) => this.checkpointStatusChange(capabilityIndex, checkpointIndex, newState)} />
          </CardContent>
        <CardContent style={{ marginTop: "-2rem" }}>
          <Button
            color="primary"
            variant="outlined">
              <AddIcon /> Add capability
          </Button>
          <Dialog
            open={addCapabilityDialogOpen}
          >
            <DialogTitle>Add capability</DialogTitle>
            <DialogContent>
              <Select
                value={capabilityToAdd}
                onChange{this.handleAddCapabiltiyChange}
              >
                

              </Select>
            </DialogContent>

            </Dialog>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ViewCard;
