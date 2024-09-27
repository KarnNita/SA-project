import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Import icons

interface Patient {
  patientId: string;
  name: string;
  tel: string;
  birthDay: string;
  gender: string;
  appointmentDate: string;
  course: string;
}

interface State {
  patientList: Patient[];
  searchTerm: string;
}

class ListViewPatient extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchTerm: '',
      patientList: [
        { patientId: 'P001', name: 'John Doe', tel: '123-456-7890', birthDay: '1994-05-14', gender: 'Male', appointmentDate: '2024-09-22', course: '10/10' },
        { patientId: 'P002', name: 'Alice Smith', tel: '987-654-3210', birthDay: '1996-08-22', gender: 'Female', appointmentDate: '2024-09-25', course: '10/10' },
        { patientId: 'P003', name: 'Bob Frank', tel: '555-123-4567', birthDay: '1989-03-12', gender: 'Male', appointmentDate: '2024-09-29', course: '10/10' },
        { patientId: 'P004', name: 'Mary White', tel: '888-555-1234', birthDay: '1992-07-25', gender: 'Female', appointmentDate: '2024-10-01', course: '10/10' },
      ],
    };
  }

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleEditPatient = (patientId: string) => {
    alert(`Edit Patient function called for Patient ID: ${patientId}`);
  };

  render() {
    const { patientList, searchTerm } = this.state;
    const filteredPatients = patientList.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div
        className="page-background"
        style={{
          backgroundColor: '#DCE8E9',
          width: '100%',
          minHeight: '100vh',
          padding: '50px',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="patient-list-view-container"
          style={{
            width: '1120px', // Increased width for larger card
            height: '850px',  // Increased height for larger card
            padding: '30px',
            backgroundColor: '#ffffff',
            borderRadius: '50px 5px 5px 50px', // Adjusted rounded corners
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            margin: 'auto',
          }}
        >
          <div
            className="header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <h2 style={{ fontSize: '28px', color: '#2F919C' }}>List View Patient</h2>
            {/* Add new Patient button with icon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => console.log('Add new Patient clicked')}
            >
              <span
                style={{
                  padding: '8px',
                  backgroundColor: '#f0c040',
                  borderRadius: '12px', // Rounded corners for the yellow background
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px',
                }}
              >
                <FontAwesomeIcon icon={faUserPlus} style={{ color: '#000000' }} />
              </span>
              <span style={{ color: '#000000', textDecoration: 'underline', cursor: 'pointer' }}>
                Add new Patient
              </span>
            </div>
          </div>

          <div
            className="search-bar"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '20px',
            }}
          >
            <input
              type="text"
              placeholder="searching..."
              value={searchTerm}
              onChange={this.handleSearch}
              style={{
                width: '300px',
                padding: '10px',
                borderRadius: '20px',
                border: '1px solid #ccc',
                fontSize: '16px',
              }}
            />
          </div>

          <div
            className="patient-list"
            style={{
              backgroundColor: '#DCE8E9',
              borderRadius: '10px',
              padding: '20px',
              height: '100%',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thTdStyle}>Patient ID</th>
                  <th style={thTdStyle}>Name</th>
                  <th style={thTdStyle}>Tel</th>
                  <th style={thTdStyle}>Birth Day</th>
                  <th style={thTdStyle}>Gender</th>
                  <th style={thTdStyle}>Appointment Date</th>
                  <th style={thTdStyle}>Course</th>
                  <th style={thTdStyle}></th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid white' }}>
                    <td style={thTdStyle}>{patient.patientId}</td>
                    <td style={thTdStyle}>
                      <a
                        href="#"
                        onClick={() => this.handleEditPatient(patient.patientId)}
                        style={{
                          color: '#2F919C',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                      >
                        {patient.name}
                      </a>
                    </td>
                    <td style={thTdStyle}>{patient.tel}</td>
                    <td style={thTdStyle}>{patient.birthDay}</td>
                    <td style={thTdStyle}>{patient.gender}</td>
                    <td style={thTdStyle}>{patient.appointmentDate}</td>
                    <td style={thTdStyle}>{patient.course}</td>
                    <td style={thTdStyle}>
                      <button
                        style={{
                          ...buttonStyle,
                          backgroundColor: '#2F919C',
                          color: 'white',
                        }}
                      >
                        Select Treatment
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#f0c040',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '20px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
};

const thTdStyle: React.CSSProperties = {
  padding: '12px',
  textAlign: 'left',
};

export default ListViewPatient;
