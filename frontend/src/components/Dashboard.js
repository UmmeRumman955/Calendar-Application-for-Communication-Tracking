import React, { useEffect, useState } from 'react';
import { fetchCompanies, fetchCommunications } from '../services/api';

const Dashboard = () => {
    const [companies, setCompanies] = useState([]);
    const [communications, setCommunications] = useState([]);

    useEffect(() => {
        fetchCompanies().then((res) => setCompanies(res.data));
        fetchCommunications().then((res) => setCommunications(res.data));
    }, []);

    const handleViewCommunications = (companyId) => {
        // Handle the click event to show more details or redirect to another page
        alert(`Viewing communications for company ID: ${companyId}`);
        // You can implement a detailed view page or a modal to show more details
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Last Five Communications</th>
                        <th>Next Scheduled Communication</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => {
                        // Filter the communications for this company
                        const companyCommunications = communications.filter(
                            (comm) => comm.company === company.id
                        );
                        
                        // Get the last 5 communications
                        const lastFiveCommunications = companyCommunications.slice(-5);
                        const nextScheduledCommunication = companyCommunications.find(
                            (comm) => new Date(comm.date) > new Date()
                        );

                        return (
                            <tr key={company.id}>
                                <td>
                                    <button onClick={() => handleViewCommunications(company.id)}>
                                        {company.name}
                                    </button>
                                </td>
                                <td>
                                    {lastFiveCommunications.length > 0 ? (
                                        lastFiveCommunications.map((comm, index) => (
                                            <div key={index}>
                                                {comm.method.name} - {new Date(comm.date).toLocaleDateString()}
                                            </div>
                                        ))
                                    ) : (
                                        <span>No communications yet</span>
                                    )}
                                </td>
                                <td>
                                    {nextScheduledCommunication ? (
                                        <div>
                                            {nextScheduledCommunication.method.name} -{' '}
                                            {new Date(nextScheduledCommunication.date).toLocaleDateString()}
                                        </div>
                                    ) : (
                                        <span>No upcoming communication</span>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
