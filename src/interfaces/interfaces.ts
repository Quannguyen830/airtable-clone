import { type Dispatch, type SetStateAction } from "react"

export interface BaseComponentProps {
  children: React.ReactNode,
  className?: string
}

export interface CellProps extends BaseComponentProps {
  data?: string,
  columnKey?: string,
  focusInput?: boolean,
  setIsEditing?: Dispatch<SetStateAction<boolean>>
}