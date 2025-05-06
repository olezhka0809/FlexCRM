import { IoMdTrendingUp ,IoMdTrendingDown } from "react-icons/io";
import { FaUserCircle, FaChartLine, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import { RiMore2Fill } from "react-icons/ri";
import DashboardBox from "./components/dashboardBox";
import "../Dashboard/index.jsx";

// Definim culorile în JavaScript pentru a le putea folosi în componente
const colors = {
  primary: "#1da256",
  secondary: "#48d483",
  lila: "#c012e2",
  rose: "#eb64fe",
  blue1: "#2c78e5",
  blue2: "#60aff5",
  orange1: "#e1950e",
  orange2: "#f3cd29",
  dark: "#000",
  light: "#ccc"
};

const Dashboard = () => {
  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox 
                color={[colors.primary, colors.secondary]} 
                icon={<FaUserCircle/>}
                iconColor ="$black-color"
                title="Total Users" 
                value="277"
                time ="Last Month"
                icon_more ={<RiMore2Fill/>}
                stats = "+ 95%"
                statsColor="#187D44"
                trendingIcon= {<IoMdTrendingUp/>}

              />
              <DashboardBox 
                color={[colors.lila, colors.rose]} 
                icon={<FaChartLine/>}
                iconColor ="$black-color"
                title="Total Views" 
                value="4,500"
                time ="Last Month"
                icon_more ={<RiMore2Fill/>}
                stats = "+ 35%"
                statsColor="#A808C3"
                trendingIcon= {<IoMdTrendingDown/>}
              />
              <DashboardBox 
                color={[colors.blue1, colors.blue2]} 
                icon={<FaShoppingCart/>}
                iconColor ="$black-color"
                title="Total Orders" 
                value="344"
                time ="Last Month"
                icon_more ={<RiMore2Fill/>}
                stats = "+ 25%"
                statsColor="#2262D3"
                trendingIcon= {<IoMdTrendingUp/>}
              />
              <DashboardBox 
                color={[colors.orange1, colors.orange2]} 
                icon={<FaMoneyBillWave/>}
                iconColor ="$black-color"
                title="Total Revenue" 
                value="€9,850"
                time ="Last Month"
                icon_more ={<RiMore2Fill/>}
                stats = "+ 15%"
                statsColor="#AE640F"
                trendingIcon= {<IoMdTrendingDown/>}

              />
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="box">
              {/* Conținutul pentru panoul din dreapta */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;