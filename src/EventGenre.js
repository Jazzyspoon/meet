import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];

      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.split(" ").includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data.filter((data) => data.value > 0);
    };
    setData(() => getData());
  }, [events]);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  return (
    <ResponsiveContainer height={400}>
      <PieChart height={200}>
        <Pie
          className="pie-chart"
          data={data}
          labelLine={false}
          outerRadius={140}
          fill="#8884d8"
          cx="50%"
          cy="50%"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data?.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              name={entry.name}
            />
          ))}
        </Pie>
        <Legend
          iconSize={20}
          iconType="triangle"
          layout="horizontal"
          verticalAlign="top"
          align="top"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
