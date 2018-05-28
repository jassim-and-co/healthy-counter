import {
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui";
import { flow, map, toPairs } from "lodash/fp";

import React from "react";

export default class PrintObject extends React.Component {
  state = {
    r: Math.random()
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({
        r: Math.random()
      });
    }, 250);
  }
  render() {
    const self = this;
    return (
      <Paper
        style={{
          maxWidth: "500px"
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Property</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flow(
              toPairs,
              map(([a, b]) => (
                <TableRow key={a}>
                  <TableCell>{a}</TableCell>

                  <TableCell>{b}</TableCell>
                </TableRow>
              ))
            )(this.props.data)}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
