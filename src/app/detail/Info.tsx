import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";


export default function Info()
{
    return (
        <Table   classNames={{td:"border-solid border-2  first:border-l-0   last:border-r-0 first:bg-gray-50"
                                   , 
        }} radius='none' hideHeader aria-label="Example static collection table">
        <TableHeader >
          <TableColumn >NAME</TableColumn>
          <TableColumn >ROLE</TableColumn>
          <TableColumn >STATUS</TableColumn>
        </TableHeader>
        <TableBody  >
          <TableRow key="1">
            <TableCell >Tony Reichert</TableCell>
            <TableCell >CEO</TableCell>
            <TableCell >Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell >Zoey Lang</TableCell>
            <TableCell >Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell >Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell >William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

    
