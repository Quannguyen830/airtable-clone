import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";

interface ToolBoxProps {
  onAdd?: () => void;
}

export function ToolBox({ onAdd }: ToolBoxProps) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">Bases</h2>
        <span className="text-sm text-muted-foreground">2 bases</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onAdd}
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" />
          Add Base
        </Button>
      </div>
    </div>
  );
} 