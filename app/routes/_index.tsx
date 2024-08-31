import type { MetaFunction } from "@remix-run/node";
import Card from "./HomeElements/_card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="home">
      <h1 className="text-red-500">Home</h1>
      <Card name="John" tel="0813913184" age={52} gender="Male" appointment_date='dd/mm/yyyy'/>
      <Card name="Jenny" tel="0813913165" age={30} gender="Female" appointment_date='dd/mm/yyyy'/>
      <Card name="Ter" tel="0816939921" age={160} gender="Helicopter" appointment_date='dd/mm/yyyy'/>
    </div>);
}
