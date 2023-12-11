import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/login">Login</Link>
    </>
  );
}

export default DashboardPage;
