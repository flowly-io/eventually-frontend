import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from '@material-ui/core/Checkbox';
import LinearProgress from "@material-ui/core/LinearProgress";
import { TableRow, TableCell } from '@material-ui/core';


function CapabilityGroup(props) {
  return (
    props.capabilities.map(capability => {
      return (
        <div>
          <Typography variant="h6">
            {capability.name}
          </Typography>
          <Typography>
            {capability.description}
          </Typography>
          <CapabilityTable checkpoints={capability.checkpoints} />
        </div>
      );
    })
  );
}

class CapabilityTable extends React.Component {
  state = {
    selected: []
  }

  componentDidMount () {
    const { checkpoints } = this.props;
    this.setState({selected: checkpoints.map(checkpoint=>checkpoint.done)})
  }

  handleClick = (event) => {
    let { selected } = this.state;
    selected[event.target.name] = !selected[event.target.name]
    this.setState({selected})
  }

  render() {
    const { selected } = this.state
    const { checkpoints } = this.props;

    return (
      checkpoints.map((checkpoint, i) => {
        return (
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selected[i] || false}
                name={i}
                onChange={this.handleClick}
              />
            </TableCell>
            <TableCell key={i} >
              {checkpoint.description}
            </TableCell>
          </TableRow>
        );
      })
    )
  };
}

class ViewCard extends React.Component {
  getProgressPercent(capabilities) {
    if (capabilities.length === 0) {
      return 100;
    }

    let numCheckpoints = 0;
    let numCompletedCheckpoints = 0;
    for (let capability of capabilities) {
      for (let checkpoint of capability["checkpoints"]) {
        numCheckpoints++;
        if (checkpoint.done) {
          numCompletedCheckpoints++;
        }
      }
    }

    return Math.floor(100 * numCompletedCheckpoints / numCheckpoints);
  }

  render() {
    const { event } = this.props;
    const { capabilities } = event;
    return (
      <div style={{ padding: 70 }}>
        <Card>
          <CardHeader variant="h1" title={event.name} />
          <CardContent>
            <Typography variant="h5" color="textSecondary">
              {event.startDateTime} - {event.endDateTime}
            </Typography>
          </CardContent>
          <CardContent>
            <LinearProgress variant="determinate" value={this.getProgressPercent(capabilities)} />
          </CardContent>
          <CardContent>
            <CapabilityGroup capabilities={capabilities} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ViewCard;
