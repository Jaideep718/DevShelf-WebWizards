import React from 'react'

function IssueBook() {
    const issueDate = new Date().toLocaleDateString();
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 10);
  return (
    <>
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Issue Book</h1>
      {/* <p><strong>Title:</strong> {decodeURIComponent(title)}</p> */}
      <p><strong>Issue Date:</strong> {issueDate}</p>
      <p><strong>Number of Books Issuing:</strong> 1</p> 
      <p><strong>Due Date:</strong> {dueDate.toLocaleDateString()}</p>
    </div>
    

    </>
  )
}

export default IssueBook

// function IssueBook({ match }) {
//   const { title } = match.params;

