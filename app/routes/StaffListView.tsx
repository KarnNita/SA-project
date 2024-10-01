import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import SideNavBar from 'app/routes/_SNB';
import { useNavigate } from '@remix-run/react';

interface Staff {
  username: string;
  name: string;
  tel: string;
  birthDay: string;
  gender: string;
  role: string;
  email: string;
}

const StaffListView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [staffList] = useState<Staff[]>([
    { username: 'jdoe', name: 'John Doe', tel: '123-456-7890', birthDay: '1992-05-14', gender: 'Male', role: 'Doctor', email: 'jdoe@example.com' },
    { username: 'asmith', name: 'Alice Smith', tel: '987-654-3210', birthDay: '1994-02-18', gender: 'Female', role: 'Nurse', email: 'asmith@example.com' },
    { username: 'bfrank', name: 'Bob Frank', tel: '555-123-4567', birthDay: '1987-09-09', gender: 'Male', role: 'Technician', email: 'bfrank@example.com' },
    { username: 'mwhite', name: 'Mary White', tel: '888-555-1234', birthDay: '1990-12-25', gender: 'Female', role: 'Administrator', email: 'mwhite@example.com' },
  ]);

  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleEditStaff = (username: string) => {
    console.log(`Edit staff with username: ${username}`);
  };

  const handleAddNewStaff = () => {
    navigate('/StaffSignUp'); // เปลี่ยนเส้นทางไปยังหน้า Staff Sign Up
  };

  const filteredStaff = staffList.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <SideNavBar />
      <div className="page-background" style={mainContentStyle}>
        <div className="staff-list-view-container" style={staffListViewContainerStyle}>
          <div className="header" style={headerStyle}>
            <h2 style={{ fontSize: '28px', color: '#2F919C' }}>Staff List View</h2>
            <div style={addNewStaffButtonStyle} onClick={handleAddNewStaff}>
              <div style={iconContainerStyle}>
                <FontAwesomeIcon icon={faUserPlus} style={{ color: '#000' }} />
              </div>
              <span style={{ color: '#000000', fontSize: '16px' }}>Add new Staff</span>
            </div>
          </div>

          <div className="search-bar" style={searchBarStyle}>
            <input
              type="text"
              placeholder="searching..."
              value={searchTerm}
              onChange={handleSearch}
              style={searchInputStyle}
            />
          </div>

          <div className="staff-list" style={staffListStyle}>
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
                        onClick={() => handleEditStaff(staff.username)}
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
    </div>
  );
};

// สไตล์ของคอมโพเนนต์
const mainContentStyle: React.CSSProperties = {
  backgroundColor: '#DCE8E9',
  width: '100%',
  minHeight: '100vh',
  padding: '50px',
  boxSizing: 'border-box',
};

const staffListViewContainerStyle: React.CSSProperties = {
  width: '1116px',
  height: '968px',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '50px 5px 5px 50px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  margin: 'auto',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const addNewStaffButtonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
};

const iconContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '50%',
  backgroundColor: '#f0c040',
};

const searchBarStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '20px',
};

const searchInputStyle: React.CSSProperties = {
  width: '300px',
  padding: '10px',
  borderRadius: '20px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const staffListStyle: React.CSSProperties = {
  backgroundColor: '#DCE8E9',
  borderRadius: '10px',
  padding: '20px',
  height: '731px',
};

const thTdStyle: React.CSSProperties = {
  padding: '12px',
  textAlign: 'left',
};

export default StaffListView;
