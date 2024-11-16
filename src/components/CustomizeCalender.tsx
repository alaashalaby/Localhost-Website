"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CustomizeCalender({ label }: { label: string }) {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-auto lg:w-[220px] justify-between font-normal p-6",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            date.toLocaleDateString()
          ) : (
            <span className="text-blackColor">{label}</span>
          )}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
