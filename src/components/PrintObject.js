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
  render() {
    const self = this;
    setInterval(
      () =>
        this.setState({
          r: Math.random()
        }),
      250
    );

    return (
      <Paper
        style={{
          maxWidth: "400px"
        }}
      >
        <Divider />
        <br />
        <br />
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
                <TableRow>
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
