import React from "react";
import { useState } from "react";

function form() {
  return (
    <>
      <div className="container">
        <div className="create-issue-dialog">
          <div className="jira-dialog-heading">
            <div className="jira-dialog-heading1">
              <h3>Create issue</h3>
            </div>
            <div className="jira-dialog-heading2">
              <button className="btn1">Import issue</button>
              <button className="btn2">Configure fields</button>
            </div>
          </div>
          <div className="jira-dialog-content">
            <div className="form-body">
              <div className="field-group">
                <div className="field-group-1">
                  <label htmlFor="">Project*</label>
                  <select name="project" id="">
                    <option value="Project1">Project 1</option>
                    <option value="Project2">Project 2</option>
                    <option value="Project3">Project 3</option>
                    <option value="Project4">Project 4</option>
                  </select>
                </div>
                <div className="field-group-2">
                  <label htmlFor="">Issue Type*</label>
                  <select name="issue" id="">
                    <option value="Story">Story</option>
                    <option value="Task">Task</option>
                    <option value="Bug">Bug</option>
                    <option value="Epic">Epic</option>
                  </select>
                  <p className="description">
                    Some issue types are unavailable due to incompatible field
                    configuration and/or workflow associations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default form;
