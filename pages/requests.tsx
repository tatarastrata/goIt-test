import React from 'react';

const AllRequestsPage = () => {
  // Assuming you have a list of requests stored in a variable called 'requests'
  const requests: Array<any> = []; // Replace this with your actual list of requests

  return (
    <div>
      <h1>All Requests</h1>
      <ul>
        {requests?.map((request, index) => (
          <li key={index}>
            {/* Display request information here */}
            <p>Request ID: {request.id}</p>
            <p>From: {request.from}</p>
            <p>To: {request.to}</p>
            <p>Type: {request.type}</p>
            {/* Add more request details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllRequestsPage;
