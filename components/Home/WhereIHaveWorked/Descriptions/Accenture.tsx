import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Accenture() {
  const tasks = [
    {
      text: "Assisted senior developers in implementing APIs with Node.js, lowering the average server response time by 20 ms",
      keywords: ["Node.js", "learned"],
    },
    {
      text: "Automated daily data processing tasks using Python, reducing manual effort by 51%",
      keywords: ["Python"],
    },
    {
      text: "Built 4 web applications using MERN (MongoDB, Express, React, Node.js) stack",
      keywords: ["MERN", "MongoDB, Express, React, Node.js"],
    },
    {
      text: "Implemented 15 RESTful APIs, integrated with 3 third-party services",
      keywords: ["15 RESTful APIs"],
    },
    {
      text: "Participated in 10 training sessions and 5 workshops, expanding knowledge of software engineering best practices and emerging technologies",
      keywords: ["10 training sessions", "5 workshops"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 flex-1 h-96 sm:max-w-xl px-2 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Full Stack Developer Intern{" "}
          <span className="text-AAsecondary">(1 year)</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">
          September 2014 - July 2015
        </span>
        <span
          className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
          // set text size on style attribute
          style={{ fontSize: "0.6rem" }}
          onClick={() => window.open("https://www.accenture.com/", "_blank")}
        >
          accenture.com
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {tasks.map((item, index) => {
          return (
            <div key={index} className="flex flex-row space-x-2">
              <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
              <span
                className="text-gray-500 sm:text-sm text-xs"
                dangerouslySetInnerHTML={{
                  __html: getTasksTextWithHighlightedKeyword(
                    item.text,
                    item.keywords
                  ),
                }}
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
