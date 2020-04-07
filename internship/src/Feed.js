import React from "react";

export default function Feed(props) {
  return (
    <div className="feed">
      <h1
        style={{ display: props.feed.name ? "block" : "none" }}
        className="namec"
        id="namei"
      >
        {props.feed.name}
      </h1>
      <img
        style={{ display: props.feed.logo1 ? "block" : "none" }}
        src={props.feed.logo1}
        alt="Logos"
        className="profilepic"
      />
      <p
        style={{ display: props.feed.sname ? "block" : "none" }}
        className="snamec"
        id="snamei"
      >
        {props.feed.sname}
      </p>

      <p
        style={{ display: props.feed.description ? "block" : "none" }}
        className="font_style"
      >
        {props.feed.description}
      </p>
      <p
        style={{ display: props.feed.contact ? "block" : "none" }}
        className="font_style"
      >
        contact:{props.feed.contact}
      </p>
      <p
        style={{ display: props.feed.email ? "block" : "none" }}
        className="font_style"
      >
        email:{props.feed.email}
      </p>
      <p
        style={{ display: props.feed.company ? "block" : "none" }}
        className="font_style"
      >
        {props.feed.company}
      </p>
      <p
        style={{ display: props.feed.location ? "block" : "none" }}
        className="font_style"
      >
        {props.feed.location}
      </p>
      <p
        style={{ display: props.feed.start_date ? "block" : "none" }}
        className="font_style"
      >
        Start Date:{props.feed.start_date}
      </p>
      <p
        style={{ display: props.feed.duration ? "block" : "none" }}
        className="font_style"
      >
        Duration: {props.feed.duration}
      </p>
      <p
        style={{ display: props.feed.stipend ? "block" : "none" }}
        className="font_style"
      >
        Stipend: {props.feed.stipend}
      </p>
      <p
        style={{ display: props.feed.deadline ? "block" : "none" }}
        className="font_style"
      >
        Deadline: {props.feed.deadline}
      </p>

      <img
        style={{ display: props.feed.imgurl ? "block" : "none" }}
        src={props.feed.imgurl}
        alt="Images"
        className="full-width"
      />
    </div>
  );
}
