import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "../../../styles/TotalSalesCard.scss";

const TotalSalesCard = (props) => {
  // Sample data - replace with your actual data
  const data = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 50 },
    { name: "May", value: 65 },
    { name: "Jun", value: 58 }
  ];

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div 
      className="sales" 
      style={{
        backgroundImage: `linear-gradient(to bottom, ${props.color?.[0]}, ${props.color?.[1]})`,
      }}
    >
      <div className="sales-box-content">
        <div className="sales__head text-container">
          <div className="sales__head__first">
            <h4 className="text-white mb-0">{props.title || "Total Sales"}</h4>

            {props.icon && (
            <div className="sales__head__first--icon">
              {props.icon}
            </div>
            )}
          </div>
          <div className="sales__head__second">
            <span className="sales__info text-white">{props.value || "277"}</span>
            <div className="sales__head__second--trend">
              <span className="sales__head__second--stats" style={{color: props.statsColor || "#187D44"}}>{props.stats || "+ 95%"}</span>

              {props.trendingIcon && (
              <div className="sales__head__second--trending" style={{color: props.statsColor || "#187D44"}}>
                {props.trendingIcon}
              </div>
              )}
            </div>
          </div>

          <div className="sales__head__third">
            <span className="sales__head__third--values">{props.value_time || "277"} in {props.time || "277"}</span>
          </div>
        </div>
        
        <div className="sales__bottom">
          <div className="sales__bottom__wrapper">
            <ResponsiveContainer width="100%" height={140}>
              <AreaChart
                data={props.chartData || data}
                margin={{
                  top: 10,
                  right: 10,
                  left: 10,
                  bottom: 5,
                }}
              >
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false} 
                  stroke="rgba(255, 255, 255, 0.1)"
                />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  padding={{ left: 10, right: 10 }}
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={{ stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 1, strokeDasharray: '5 5' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#FFFFFF" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorGradient)"
                  activeDot={{ r: 6, fill: '#FFFFFF', stroke: 'rgba(0,0,0,0.2)', strokeWidth: 1 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSalesCard;