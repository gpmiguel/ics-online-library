import React from "react";
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

// Code component taken from: https://betterstack.dev/projects/react-tag-input/
// npm install --save @pathofdev/react-tag-input

function TagsInput() {
  const [tags, setTags] = React.useState([])
  return (
    <ReactTagInput 
      tags={tags} 
      onChange={(newTags) => setTags(newTags)}
    />
  )
}

export default TagsInput;