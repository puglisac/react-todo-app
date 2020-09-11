import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it("renders without crashing", function() {
    render(<TodoList />);
  });

  it("matches snapshot", function() {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });

it("can and and delete a todo", function() {
    const { getByLabelText, queryByText, getByText } = render(<TodoList />);
  
    const input = getByLabelText("Todo:");
    const submitBtn = getByText("Add Todo!")
    expect(queryByText("todo")).not.toBeInTheDocument();
  
    // fill out the form
    fireEvent.change(input, { target: { value: "todo" }});
    fireEvent.click(submitBtn);
  
    expect(queryByText("todo")).toBeInTheDocument();
  

    const deleteBtn = getByText("X");
    fireEvent.click(deleteBtn);
    expect(queryByText("todo")).not.toBeInTheDocument();  
  });