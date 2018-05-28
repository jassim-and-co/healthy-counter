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
    return (
      <Paper
        style={{
          maxWidth: "400px"
        }}
      >
        <Button
          style={{
            width: "100%"
          }}
          onClick={() =>
            this.setState({
              r: Math.random()
            })
          }
        >
          UPDATE
        </Button>
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
