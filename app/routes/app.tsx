import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './_SNB.Home';
import AddNewPatient from './_SNB.AddNewPatient';
import TotalCost from './_SNB.TotalCost';
import TreatmentSelect from './_SNB.TreatmentSelect';
import StaffListView from './StaffListView';
import Equipment from './Equipment';
import IncomeExpenses from './_SNB.IncomeExpenses';
import ListViewPatient from './_SNB.ListViewPatient';
import MedicalRecord from './MedicalRecord';
import EquipmentHistory from './_SNB.EquipmentHistory';
import StaffPage from './_SNB.StaffPage';
import EditStaff from './_SNB.EditStaff';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/addNewPatient" element={<AddNewPatient />} />
        <Route path="/selectTreatment" element={<TreatmentSelect />} />
        <Route path="/totalCost" element={<TotalCost />} />
        <Route path="/staffListView" element={<StaffListView/>}/>
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/incomeExpenses" element={<IncomeExpenses />} />
        <Route path="/listViewPatient" element={<ListViewPatient/>}/>
        <Route path="/medicalRecord" element={<MedicalRecord/>}/>
        <Route path="/equimentHistory" element={<EquipmentHistory />} />
        <Route path="/staffPage" element={<StaffPage />} />
        <Route path="/editStaff" element={<EditStaff />} />
      </Routes>
    </Router>
  );
}

export default App;
