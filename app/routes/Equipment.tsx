import React from 'react';
import needleImage from '/images/needle.png';
import cottonImage from '/images/cotton.png';
import alcoholBottleImage from '/images/alcohol_bottle.png';
import { Link } from '@remix-run/react';
import SideNavBar from 'app/routes/_SNB';

export default function Equipment() {
  return (
    <div className="flex">
      <SideNavBar />
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h2 style={styles.title}>Equipment</h2>
            <div style={styles.buttons}>
              <button style={styles.historyButton}>
                <div style={styles.icon}></div>Equipment history
              </button>
              <Link to="/EditEquipment">
                <button style={styles.editButton}>
                  <div style={styles.icon}></div>Edit Equipment
                </button>
              </Link>
            </div>
          </div>
          <div style={styles.equipmentCard}>
            {equipmentItems.map((item) => (
              <div key={item.name} style={styles.equipmentItem}>
                <div style={styles.imageContainer}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.itemImage}
                  />
                </div>
                <div style={styles.details}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <div style={styles.remainingWrapper}>
                    <p style={styles.remainingText}>Remaining: {item.remaining}</p>
                  </div>
                </div>
                <Link to="/EditEquipment">
                  <button style={styles.addButton}>+</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const equipmentItems = [
  {
    name: 'Needle',
    image: needleImage,
    remaining: 10,
  },
  {
    name: 'Cotton',
    image: cottonImage,
    remaining: 15,
  },
  {
    name: 'Alcohol Bottle',
    image: alcoholBottleImage,
    remaining: 5,
  },
];

const styles = {
  container: {
    width: '100%', // เปลี่ยนเป็น 100% เพื่อให้เต็มหน้าจอ
    backgroundColor: '#F2F8F7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as const,
  } as React.CSSProperties,
  card: {
    width: '1061px',
    height: 'auto', // เปลี่ยนเป็น auto เพื่อให้ยืดหยุ่นตามเนื้อหา
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  } as React.CSSProperties,
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  } as React.CSSProperties,
  title: {
    color: '#2F919C',
    fontSize: '32px',
    fontWeight: 'bold',
  } as React.CSSProperties,
  buttons: {
    display: 'flex',
    gap: '20px',
  } as React.CSSProperties,
  historyButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#000000',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    position: 'relative' as 'relative',
  } as React.CSSProperties,
  editButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#000000',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    position: 'relative' as 'relative',
  } as React.CSSProperties,
  icon: {
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    backgroundColor: '#FFD700',
    marginRight: '10px',
  } as React.CSSProperties,
  equipmentCard: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    width: '100%',
  } as React.CSSProperties,
  equipmentItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#DCE8E9',
    borderRadius: '40px',
    padding: '20px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
  } as React.CSSProperties,
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '40px',
    width: '148px',
    height: '120px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  } as React.CSSProperties,
  itemImage: {
    width: '60px',
    height: '60px',
    objectFit: 'cover' as const,
  } as React.CSSProperties,
  details: {
    flex: 1,
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
  } as React.CSSProperties,
  itemName: {
    color: '#2F919C',
    fontSize: '22px',
    marginBottom: '5px',
  } as React.CSSProperties,
  remainingWrapper: {
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties,
  remainingText: {
    fontSize: '18px',
    color: '#6B7B7E',
    backgroundColor: '#FFFFFF',
    padding: '10px',
    borderRadius: '20px',
    width: '510px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  } as React.CSSProperties,
  addButton: {
    backgroundColor: '#3E747A',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  } as React.CSSProperties,
};
