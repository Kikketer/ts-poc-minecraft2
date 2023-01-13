import React from "react";
import "./Container.css";

const Container = ({ children }) => {
  return <div className="ts_container">{children}</div>;
};

const Heading = (props) => {
  return <div {...props} className="heading" />;
};

const Message = (props) => {
  return <div {...props} className="message" />;
};

const Title = ({ children, ...rest }) => {
  return (
    <h2 {...rest} className="title">
      {children}
    </h2>
  );
};

const Actions = (props) => {
  return <div className="actions" {...props} />;
};

const Content = (props) => {
  return <div {...props} className="content" />;
};

export { Container, Heading, Title, Actions, Message, Content };
