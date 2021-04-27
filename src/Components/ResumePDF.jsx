import React from "react";
import resumePDF from "../images/Keenan Ward - DESIGN RESUME.pdf";

export default function ResumePDF() {
  return (
    <div className="ResumePDF">
      <iframe
        src={resumePDF}
        width="100%"
        height="1000rem"
        title="resume-pdf"
      />
    </div>
  );
}
