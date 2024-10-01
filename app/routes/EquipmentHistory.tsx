import React, { useState, CSSProperties } from 'react';

// สไตล์ที่ใช้ในคอมโพเนนต์
const styles: { [key: string]: CSSProperties } = {
  equipmentHistoryContainer: {
    display: 'flex',
    backgroundColor: '#f0f4f7',
    height: '100vh',
  },
  sidebar: {
    width: '15%',
    backgroundColor: '#2F919C',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
  },
  sidebarItem: {
    margin: '20px 0',
    padding: '10px',
    borderRadius: '8px',
  },
  logoutBtn: {
    backgroundColor: 'white',
    width: '165px',
    color: '#256d7b',
    border: 'none',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  mainContent: {
    width: '85%',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '75px',
    margin: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '10px',
    marginLeft: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  tabs: {
    display: 'flex',
    marginTop: '20px',
    borderBottom: '2px solid #DCE8E9',
  },
  tab: {
    padding: '10px 20px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    color: '#2F919C',
  },
  equipmentList: {
    marginTop: '20px',
    backgroundColor: '#DCE8E9',
    padding: '20px',
    borderRadius: '25px',
    height: '75%',
  },
};

// คอมโพเนนต์หลัก
const EquipmentHistory: React.FC = () => {
  // State สำหรับเก็บข้อความที่ค้นหา
  const [searchText, setSearchText] = useState('');

  return (
    <div style={styles.equipmentHistoryContainer}>
      {/* แถบด้านข้าง */}
      <div style={styles.sidebar}>
        <h3>Clinic Application</h3>
        <ul>
          <li style={styles.sidebarItem}>Home Menu</li>
          <li style={styles.sidebarItem}>Staff List</li>
          <li style={styles.sidebarItem}>Add new patient</li>
          <li style={{ ...styles.sidebarItem, backgroundColor: 'transparent', color: 'white' }}>Equipment</li>
        </ul>
        <button style={styles.logoutBtn}>LOG OUT</button> {/* ปุ่มออกจากระบบ */}
      </div>

      {/* เนื้อหาหลัก */}
      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1>Equipment History</h1> {/* หัวข้อหลัก */}
          <div style={styles.searchBar}>
            <select>
              <option>Fill</option>
              <option>Other</option>
            </select> {/* กล่องเลือก */}
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)} // อัปเดตข้อความค้นหา
              placeholder="searching..." // ข้อความที่แสดงเมื่อไม่มีข้อความ
              style={styles.searchInput} // สไตล์สำหรับช่องใส่ข้อมูล
            />
          </div>
        </div>

        {/* แท็บ */}
        <div style={styles.tabs}>
          <button style={{ ...styles.tab, fontWeight: 'bold', borderBottom: '2px solid #2F919C' }}>Use Equipment</button> {/* แท็บที่เลือก */}
          <button style={styles.tab}>Import Equipment</button> {/* แท็บอื่น ๆ */}
        </div>

        {/* รายการอุปกรณ์ */}
        <div style={styles.equipmentList}>
          <p>No Equipment History Available</p> {/* ข้อความเมื่อไม่มีประวัติอุปกรณ์ */}
        </div>
      </div>
    </div>
  );
};

export default EquipmentHistory;
