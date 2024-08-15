import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Grid,
  Box,
} from "@mui/material";
import { PieChart } from "@mui/x-charts";
import "./style.scss"; // Import SCSS file

const ComplianceStatus: React.FC = () => {
  const metrics = useSelector(
    (state: RootState) => state.complianceStatus.metrics
  );

  return (
    <div className="compliance-status">
      <Typography variant="h4" component="h2" className="title">
        Compliance Status
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className="pie-chart-container">
            <Typography variant="h5" component="h5" className="title">
              Total tasks
            </Typography>
            <PieChart
              margin={{ left: 10, right: 10 }}
              colors={["#5fbcad", "#edc871", "#dd5d66"]}
              series={[
                {
                  data: metrics,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                  startAngle: 360,
                  endAngle: 0,
                },
              ]}
              height={120}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5" className="title">
            Detail tasks
          </Typography>
        </Grid>
        {metrics.map((metric) => (
          <Grid item xs={4} key={metric.name} sx={{ padding: "20px" }}>
            <div className="card-border">
              <Card className="metric-card">
                <CardContent className="card-content">
                  <Typography
                    variant="h6"
                    component="div"
                    className="metric-name"
                  >
                    {metric.name}
                  </Typography>
                  <div className="progress-container">
                    <CircularProgress
                      variant="determinate"
                      value={metric.value}
                      size={130}
                      className="progress-bar"
                    />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className="progress-text"
                    >
                      {metric.value}%
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ComplianceStatus;
