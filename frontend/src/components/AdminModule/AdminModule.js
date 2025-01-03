import "./AdminModule.css";

import React, { useState, useEffect } from "react";
import { fetchCompanies, addCompany, deleteCompany } from "../../services/api";

const AdminModule = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({ name: "", location: "" });

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        const data = await fetchCompanies();
        setCompanies(data);
      } catch (error) {
        console.error("Error loading companies:", error);
      }
    };

    loadCompanies();
  }, []);

  const handleAddCompany = async () => {
    try {
      const addedCompany = await addCompany(newCompany);
      setCompanies([...companies, addedCompany]);
      setNewCompany({ name: "", location: "" });
    } catch (error) {
      console.error("Error adding company:", error);
    }
  };

  const handleDeleteCompany = async (id) => {
    try {
      await deleteCompany(id);
      setCompanies(companies.filter((company) => company.id !== id));
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  return (
    <div>
      <h2>Admin Module</h2>

      <h3>Add New Company</h3>
      <input
        type="text"
        placeholder="Name"
        value={newCompany.name}
        onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={newCompany.location}
        onChange={(e) =>
          setNewCompany({ ...newCompany, location: e.target.value })
        }
      />
      <button onClick={handleAddCompany}>Add Company</button>

      <h3>Companies</h3>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name} ({company.location}){" "}
            <button onClick={() => handleDeleteCompany(company.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminModule;
