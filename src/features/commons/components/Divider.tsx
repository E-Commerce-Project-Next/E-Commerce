import React from "react";

type DividerProps = {
  text: string;
};

export default function Divider({ text }: DividerProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-grow border-t" />
      <span className="text-sm text-muted-foreground">{text}</span>
      <div className="flex-grow border-t" />
    </div>
  );
}
