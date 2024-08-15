import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import "./style.scss"; // Import SCSS file

const RecentActivity: React.FC = () => {
  const activities = useSelector(
    (state: RootState) => state.recentActivity.activities
  );

  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>
      <List className="list-recent">
        {activities.map((activity, index) => (
          <React.Fragment key={index}>
            <ListItem className="card">
              <ListItemText
                className="card"
                primary={activity.description}
                secondary={`${activity.timestamp} - ${activity.user}`}
              />
            </ListItem>
            {index < activities.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default RecentActivity;
