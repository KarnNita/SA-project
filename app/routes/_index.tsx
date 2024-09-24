import type { MetaFunction } from "@remix-run/node";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from "./HomeElements/_card";
// import SideNavBar from './components/_SideNavBar';
// import Home from './_index';
// import StaffList from './Staff/StaffSignUp';
// import AddNewPatient from './patient/AddNewPatient';
// import Equipment from './pages/Equipment';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// function Layout({ children }) {
//   return (
//     <div className="flex">
//       <SideNavBar />
//       <div className="flex-grow p-6">
//         {children} {/* This is where the page content will be rendered */}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout><Home /></Layout>} />
//         <Route path="/staff-list" element={<Layout><StaffList /></Layout>} />
//         <Route path="/add-new-patient" element={<Layout><AddNewPatient /></Layout>} />
//         <Route path="/equipment" element={<Layout><Equipment /></Layout>} />
//       </Routes>
//     </Router>
//   );
// }


export default function Index() {
  return (
    <div className="home">
      <h1 className="text-red-500">Home</h1>
      <Card name="John" tel="0813913184" age={52} gender="Male" appointment_date='dd/mm/yyyy'/>
      <Card name="Jenny" tel="0813913165" age={30} gender="Female" appointment_date='dd/mm/yyyy'/>
      <Card name="Ter" tel="0816939921" age={160} gender="Helicopter" appointment_date='dd/mm/yyyy'/>
    </div>);
}
