import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Import icon

interface Staff {
  username: string;
  name: string;
  tel: string;
  birthDay: string;
  gender: string;
  role: string;
  email: string;
}

interface State {
  staffList: Staff[];
  searchTerm: string;
}

class StaffListView extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchTerm: '',
      staffList: [
        { username: 'jdoe', name: 'John Doe', tel: '123-456-7890', birthDay: '1992-05-14', gender: 'Male', role: 'Doctor', email: 'jdoe@example.com' },
        { username: 'asmith', name: 'Alice Smith', tel: '987-654-3210', birthDay: '1994-02-18', gender: 'Female', role: 'Nurse', email: 'asmith@example.com' },
        { username: 'bfrank', name: 'Bob Frank', tel: '555-123-4567', birthDay: '1987-09-09', gender: 'Male', role: 'Technician', email: 'bfrank@example.com' },
        { username: 'mwhite', name: 'Mary White', tel: '888-555-1234', birthDay: '1990-12-25', gender: 'Female', role: 'Administrator', email: 'mwhite@example.com' },
      ],
    };
  }

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleEditStaff = (username: string) => {
    console.log(`Edit staff with username: ${username}`);
  };

  render() {
    const { staffList, searchTerm } = this.state;

    const filteredStaff = staffList.filter(staff =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          className="staff-list-view-container"
          style={{
            width: '1116px',
            height: '968px',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '50px 5px 5px 50px',
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
            <h2 style={{ fontSize: '28px', color: '#2F919C' }}>Staff List View</h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
              }}
              onClick={() => console.log('Add new Staff clicked')}
            >
              {/* Add new Staff button with icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#f0c040',
                }}
              >
                <FontAwesomeIcon icon={faUserPlus} style={{ color: '#000' }} />
              </div>
              <span style={{ color: '#000000', fontSize: '16px' }}>Add new Staff</span>
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
            className="staff-list"
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
                  <th style={thTdStyle}>Username</th>
                  <th style={thTdStyle}>Name</th>
                  <th style={thTdStyle}>Tel</th>
                  <th style={thTdStyle}>Birth Day</th>
                  <th style={thTdStyle}>Gender</th>
                  <th style={thTdStyle}>Role</th>
                  <th style={thTdStyle}>Email</th>
                  <th style={thTdStyle}></th>
                </tr>
              </thead>
              <tbody>
                {filteredStaff.map((staff, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid white' }}>
                    <td style={thTdStyle}>{staff.username}</td>
                    <td style={thTdStyle}>{staff.name}</td>
                    <td style={thTdStyle}>{staff.tel}</td>
                    <td style={thTdStyle}>{staff.birthDay}</td>
                    <td style={thTdStyle}>{staff.gender}</td>
                    <td style={thTdStyle}>{staff.role}</td>
                    <td style={thTdStyle}>{staff.email}</td>
                    <td style={thTdStyle}>
                      <a
                        href="#"
                        onClick={() => this.handleEditStaff(staff.username)}
                        style={{ color: '#2F919C', cursor: 'pointer', textDecoration: 'underline' }}
                      >
                        Edit
                      </a>
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

const thTdStyle: React.CSSProperties = {
  padding: '12px',
  textAlign: 'left',
};

export default StaffListView;
