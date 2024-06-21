import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Tose() {
  const tasks = [
    {
      text: "Built 25 RESTful APIs using Node.js and Express.js, powering Paddle's back end services",
      keywords: ["25 RESTful APIs", "Node.js", "Express.js"],
    },
    {
      text: "Created and enhanced websites using Angular, Node, Express.js and Material UI, increasing clients' online presence and sales",
      keywords: ["Angular, Node, Express.js", "Material UI"],
    },
    {
      text: "Coordinated a 6-person front end team to implement 30 responsive, user-friendly interfaces using React.js and CSS frameworks",
      keywords: [
        "30 responsive, user-friendly interfaces",
        "React.js",
        "CSS frameworks",
      ],
    },
    {
      text: "Established a React-Redux architecture for fetching asynchronous data from RESTful APIs",
      keywords: ["React-Redux architecture"],
    },
    {
      text: "Mastered hands-on experience working with 2 relational databases (MySQL, PostgreSQL) and 1 NoSQL database (MongoDB) for data storage and retrieval",
      keywords: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      text: "Conducted in 30 code reviews and 12 pair programming sessions to continuously improve coding skills and knowledge",
      keywords: ["30 code reviews", "12 pair programming sessions"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 flex-1 h-96 sm:max-w-xl px-2 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Junior Full Stack Developer{" "}
            <span className="text-AAsecondary">(2 years)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            January 2016 - December 2017
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.paddle.com/", "_blank")}
          >
            paddle.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
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
    </>
  );
}
