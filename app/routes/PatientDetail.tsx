import React, { useState } from 'react';

const PatientDetail: React.FC = () => {
  const [patient, setPatient] = useState({
    fullName: '',
    patientID: '',
    appointmentDate: '',
    age: '',
    gender: '',
    tel: '',
    courseStatus: '',
  });

  return (
    <div style={{ display: 'flex', backgroundColor: '#f0f4f7', height: '100vh' }}>
      {/* แถบเครื่องมือด้านซ้าย */}
      <div style={{
        width: '15%', backgroundColor: '#2F919C', color: 'white',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '20px', borderTopRightRadius: '30px', borderBottomRightRadius: '30px'
      }}>
        <h3>Clinic Application</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '20px 0' }}>Home Menu</li>
          <li style={{ margin: '20px 0' }}>Staff List</li>
          <li style={{ margin: '20px 0' }}>Add new patient</li>
          <li style={{ margin: '20px 0' }}>Equipment</li>
        </ul>
        <button style={{
          backgroundColor: 'white', width: '165px', color: '#256d7b',
          border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer'
        }}>LOG OUT</button>
      </div>

      {/* เนื้อหาหลัก */}
      <div style={{ width: '80%', padding: '40px', backgroundColor: 'white', borderRadius: '75px', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h1 style={{ fontSize: '20px', color: '#2F919C' }}>Patient Detail</h1>
          <h1 style={{ fontSize: '18px', marginRight: '20px' }}>Edit Patient</h1>
        </div>

        {/* วงกลมตกแต่ง */}
        <div style={{
          width: '19px', height: '19px', backgroundColor: '#FFD06C',
          borderRadius: '40%', margin: '20px auto', position: 'absolute',
          top: '45px', right: '225px'
        }}></div>

        {/* ข้อมูลของผู้ป่วย */}
        <div style={{ backgroundColor: '#DCE8E9', padding: '20px', borderRadius: '25px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div style={{ display: 'grid', gap: '17px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
                <label>Full name:</label>
                <input type="text" value={patient.fullName} readOnly style={{ padding: '8px', borderRadius: '10px', border: '1px solid #ccc', width: '250px' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
                <label>Patient ID:</label>
                <input type="text" value={patient.patientID} readOnly style={{ padding: '8px', borderRadius: '10px', border: '1px solid #ccc', width: '250px' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
                <label>Appointment Date:</label>
                <input type="text" value={patient.appointmentDate} readOnly style={{ padding: '8px', borderRadius: '10px', border: '1px solid #ccc', width: '250px' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gap: '17px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
                <label>Gender:</label>
                <input type="text" value={patient.gender} readOnly style={{ padding: '8px', borderRadius: '10px', border: '1px solid #ccc', width: '250px' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
                <label>Age:</label>
                <input type="text" value={patient.age} readOnly style={{ padding: '8px', borderRadius: '10px', border: '1px solid #ccc', width: '250px' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
                <label>Tel:</label>
                <input type="text" value={patient.tel} readOnly style={{ padding: '8px', borderRadius: '10px', border: '1px solid #ccc', width: '250px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* ตารางนัดหมาย */}
        <div style={{ color: '#BCBCBC', backgroundColor: '#DCE8E9', padding: '120px', borderRadius: '25px', marginTop: '20px', width: '100%', textAlign: 'center' }}>
          <h1>Appointment Schedule</h1>
        </div>

        {/* ปุ่มเลือกการรักษา */}
        <button style={{
          backgroundColor: '#2F919C', color: 'white', border: 'none',
          padding: '10px 20px', cursor: 'pointer', marginTop: '20px', borderRadius: '5px', marginLeft: 'auto'
        }}>Select Treatment</button>
      </div>
    </div>
  );
};

export default PatientDetail;
