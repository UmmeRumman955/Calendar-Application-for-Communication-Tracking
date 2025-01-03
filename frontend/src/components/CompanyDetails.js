import React from 'react';
import { useParams } from 'react-router-dom';

const CompanyDetails = () => {
    const { id } = useParams(); // Get the dynamic ID from the URL

    return (
        <div>
            <h2>Company Details</h2>
            <p>Details for company with ID: {id}</p>
        </div>
    );
};

export default CompanyDetails;
