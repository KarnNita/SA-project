import React, { useState, useEffect, ChangeEvent } from 'react';
import needleImage from '/images/needle.png';
import cottonImage from '/images/cotton.png';
import alcoholBottleImage from '/images/alcohol_bottle.png';

interface EquipmentProps {
  equipment?: {
    needle?: number;
    cotton?: number;
    alcoholBottle?: number;
  };
  setEquipment: React.Dispatch<React.SetStateAction<{
    needle: number;
    cotton: number;
    alcoholBottle: number;
  }>>;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditEquipment({ equipment = {}, setEquipment, setEditMode }: EquipmentProps) {
  const [counts, setCounts] = useState({
    needle: equipment.needle ?? 0,
    cotton: equipment.cotton ?? 0,
    alcoholBottle: equipment.alcoholBottle ?? 0,
  });

  const prices = {
    needle: 50,
    cotton: 40,
    alcoholBottle: 60,
  };

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const calculateTotalCost = () => {
      const needleCost = counts.needle * prices.needle;
      const cottonCost = counts.cotton * prices.cotton;
      const alcoholBottleCost = counts.alcoholBottle * prices.alcoholBottle;
      setTotalCost(needleCost + cottonCost + alcoholBottleCost);
    };

    calculateTotalCost();
  }, [counts]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, item: keyof typeof counts) => {
    const value = parseInt(e.target.value, 10) || 0;
    setCounts({
      ...counts,
      [item]: value,
    });
  };

  const handleSave = () => {
    setEquipment(counts);
    setEditMode(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Equipment</h2>

      <div style={styles.equipmentCard}>
        {(Object.keys(counts) as Array<keyof typeof counts>).map((item) => (
          <div key={item} style={styles.equipmentItem}>
            <img
              src={item === 'needle' ? needleImage : item === 'cotton' ? cottonImage : alcoholBottleImage}
              alt={item}
              style={styles.itemImage}
            />
            <div style={styles.details}>
              <h3 style={styles.itemName}>{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
              <label style={styles.label}>Add count</label>
              <input
                type="number"
                value={counts[item]}
                onChange={(e) => handleInputChange(e, item)}
                style={styles.input}
              />
              <label style={styles.label}>Cost</label>
              <input
                type="text"
                value={counts[item] * prices[item]}
                readOnly
                style={styles.input}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={styles.totalCostContainer}>
        <label style={styles.totalCostLabel}>Total Cost:</label>
        <div style={styles.totalCostBar}>{totalCost}</div>
      </div>

      <button onClick={handleSave} style={styles.saveButton}>Save</button>
    </div>
  );
}

const styles = {
  container: {
    width: '1440px',
    height: '1024px',
    padding: '40px',
    backgroundColor: '#F2F8F7',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#3E747A',
    marginBottom: '30px',
  },
  equipmentCard: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '30px',
  },
  equipmentItem: {
    backgroundColor: '#EAF0F0',
    borderRadius: '15px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  itemImage: {
    width: '60px',
    height: '60px',
    marginRight: '20px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  itemName: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#3E747A',
  },
  label: {
    fontSize: '14px',
    color: '#6B7B7E',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #D3E1E1',
  },
  totalCostContainer: {
    marginTop: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalCostLabel: {
    fontSize: '22px',
    color: '#3E747A',
  },
  totalCostBar: {
    backgroundColor: '#00796B',
    width: '300px',
    height: '30px',
    borderRadius: '10px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: '#FFD700',
    color: '#3E747A',
    borderRadius: '15px',
    padding: '10px 30px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '30px',
    cursor: 'pointer',
  },
};
