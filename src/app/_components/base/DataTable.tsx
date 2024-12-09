"use client"

import * as React from "react"
import { ChevronDown, Plus } from 'lucide-react'
import { Checkbox } from "../../../components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"
import { Button } from "../../../components/ui/button"

interface Task {
  id: string
  name: string
  notes: string
  assignee: string
  status: string
}

export const DataTable = () => {
  const [tasks, setTasks] = React.useState<Task[]>([
    {
      id: "1",
      name: "Project Planning",
      notes: "Define project scope and timeline",
      assignee: "Sarah Chen",
      status: "In Progress"
    },
    {
      id: "2",
      name: "Design Review",
      notes: "Review latest mockups",
      assignee: "Michael Park",
      status: "Pending"
    }
  ])

  const addNewRow = () => {
    const newTask: Task = {
      id: (tasks.length + 1).toString(),
      name: "",
      notes: "",
      assignee: "",
      status: "Not Started"
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[40px]">
              <Checkbox />
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1">
                Name
                <ChevronDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1">
                Notes
                <ChevronDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1">
                Assignee
                <ChevronDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1">
                Status
                <ChevronDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead className="w-[40px]">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.notes}</TableCell>
              <TableCell>{task.assignee}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="p-2 border-t">
        <Button
          variant="ghost"
          className="h-8 w-8"
          size="icon"
          onClick={addNewRow}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

