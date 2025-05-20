
import "../../../styles/dashboard.scss";

const DashboardBox = (props) => {
  return (
    <div 
      className="dashboardBox" 
      style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
      }}
    >
      <div className="dashboard-box-content">
        <div className="card__head text-container">

          {props.icon && (
          <div className="icon">
            {props.icon}
          </div>
          )}
          
          <div className="card__head__right">
            {props.trendingIcon && (
              <div className="trending-icon" style={{ color: props.iconColor }}>
                {props.trendingIcon}
              </div>
            )}

            <h4 className="text-white mb-0">{props.title || "Total Users"}</h4>
            <span className="card__info text-white">{props.value || "277"}</span>
          </div>
        </div>
        <div className="card__bottom text-container">
          <div className="card__bottom__wrapper">

            <div className="card__bottom__wrapper--left">
              <span className="card__bottom__wrapper__mark" style={{background: props.statsColor || "#187D44  "}}>{props.stats || "+ 95%"}</span>
              <span className="card__bottom__wrapper__info text-white"
              >{props.time || "Last Month"}</span>

            </div>
            <div className="card__bottom__wrapper--right">
              {props.icon_more && (
                <div className="card__bottom__wrapper--right--icon">
                  {props.icon_more}
                </div>
              )}

            </div>


          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardBox;