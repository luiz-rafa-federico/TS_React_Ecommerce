import { motion } from "framer-motion";
import { CheckoutDashboard } from "./styles";
import { useAuth } from "../../providers/Auth";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";

const Dashboard = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
    toast.success("Até breve!");
    history.push("/");
  };

  if (!isAuthenticated) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CheckoutDashboard>
        checkout
        <Button onClick={handleLogout}>Sair</Button>
      </CheckoutDashboard>
    </motion.div>
  );
};

export default Dashboard;
