import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './_SNB.Home';
import AddNewPatient from './_SNB.AddNewPatient';
import TotalCost from './_SNB.TotalCost';
import TreatmentSelect from './_SNB.TreatmentSelect';
import { useSelectedTreatment } from "./SelectedTreatmentProvider";
import StaffListView from './StaffListView';
import Equipment from './Equipment';
import IncomeExpenses from './IncomeExpenses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/addNewPatient" element={<AddNewPatient />} />
        <Route path="/selectTreatment" element={<TreatmentSelect />} />
        <Route path="/totalCost" element={<TotalCost />} />
        <Route path="/staffListView" element={<StaffListView/>}/>
        <Route path="/equiment" element={<Equipment />} />
        <Route path="/incomeExpenses" element={<IncomeExpenses />} />
      </Routes>
    </Router>
  );
}

export default App;
