import React from 'react';

const IncomeExpenses: React.FC = () => {
  // Styles as objects
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    backgroundColor: '#f0f4f7',
    height: '100vh', // กำหนดความสูงให้เต็มหน้าจอ
  };

  const sidebarStyle: React.CSSProperties = {
    width: '15%', // ความกว้างของแถบด้านข้าง
    backgroundColor: '#2F919C', // สีพื้นหลังแถบด้านข้าง
    color: 'white', // สีข้อความในแถบด้านข้าง
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px', // ระยะห่างภายในแถบด้านข้าง
    borderTopRightRadius: '30px', // มุมด้านบนขวาโค้ง
    borderBottomRightRadius: '30px', // มุมด้านล่างขวาโค้ง
  };

  const listItemStyle: React.CSSProperties = {
    margin: '20px 0', // ระยะห่างระหว่างรายการ
    padding: '10px', // ระยะห่างภายในรายการ
    borderRadius: '8px', // มุมโค้งของรายการ
  };

  const activeItemStyle: React.CSSProperties = {
    backgroundColor: 'transparent', // พื้นหลังรายการที่เลือก
    color: 'white', // สีข้อความของรายการที่เลือก
  };

  const logoutButtonStyle: React.CSSProperties = {
    backgroundColor: 'white', // สีพื้นหลังของปุ่มออกจากระบบ
    width: '165px', // ความกว้างของปุ่ม
    color: '#256d7b', // สีข้อความของปุ่ม
    border: 'none', // ไม่มีขอบ
    padding: '10px', // ระยะห่างภายในปุ่ม
    borderRadius: '8px', // มุมโค้งของปุ่ม
    cursor: 'pointer', // เปลี่ยนเคอร์เซอร์เมื่อชี้ไปที่ปุ่ม
  };

  return (
    <div style={containerStyle}>
      {/* แถบเครื่องมือด้านซ้าย */}
      <div style={sidebarStyle}>
        <h3>Clinic Application</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {/* รายการเมนูในแถบด้านข้าง */}
          <li style={listItemStyle}>Home Menu</li>
          <li style={listItemStyle}>Staff List</li>
          <li style={listItemStyle}>Add new patient</li>
          <li style={listItemStyle}>Equipment</li>
        </ul>
        {/* ปุ่มออกจากระบบ */}
        <button style={logoutButtonStyle}>LOG OUT</button>
      </div>

      {/* เนื้อหาหลัก */}
      <div style={{ width: '80%', padding: '40px', backgroundColor: 'white', borderRadius: '75px', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h1 style={{ fontSize: '20px', color: '#2F919C' }}>Income and Expenses</h1>
        </div>

        {/* ส่วนข้อมูลการเงิน */}
        <div style={{ backgroundColor: '#DCE8E9', padding: '20px', borderRadius: '25px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {/* กล่องข้อความสำหรับรายได้ */}
            <div style={{ display: 'grid', gap: '17px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
                <label>Income:</label>
                <input type="text" placeholder="Enter income" style={{ padding: '8px', borderRadius: '10px', border: '1px solid #ccc', width: '250px' }} />
              </div>

              {/* กล่องข้อความสำหรับค่าใช้จ่าย */}
              <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
                <label>Expenses:</label>
                <input type="text" placeholder="Enter expenses" style={{ padding: '8px', borderRadius: '10px', border: '1px solid #ccc', width: '250px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* ตารางแสดงข้อมูลการเงิน */}
        <div style={{ color: '#BCBCBC', backgroundColor: '#DCE8E9', padding: '120px', borderRadius: '25px', marginTop: '20px', width: '100%', textAlign: 'center' }}>
          <h1>Financial Summary</h1>
        </div>

        {/* ปุ่มบันทึกข้อมูล */}
        <button style={{
          backgroundColor: '#2F919C', color: 'white', border: 'none',
          padding: '10px 20px', cursor: 'pointer', marginTop: '20px', borderRadius: '5px', marginLeft: 'auto'
        }}>Save</button>
      </div>
    </div>
  );
};

export default IncomeExpenses;
