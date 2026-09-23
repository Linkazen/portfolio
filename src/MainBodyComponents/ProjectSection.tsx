import "./ProjectSection.scss";
import React from "react";

type ProjectSectionProps = {
  title: string;
  body: React.ReactNode;
  hasBreak: boolean;
};

export default function ProjectSection({
  title,
  body,
  hasBreak,
}: ProjectSectionProps) {
  return (
    <>
      <div style={{ width: "100%" }}>
        <h2>{title}</h2>
        {body}
      </div>
      {hasBreak && <div id="Break" />}
    </>
  );
}
