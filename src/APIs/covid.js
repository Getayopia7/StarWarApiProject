import axios from "axios";

//documentation @https://covidtracking.com/data/api
//feel free to add more functions!

const covid = {
  getCurrentCovidStats: async () => {
    try {
      const response = await axios.get(
        "https://api.covidtracking.com/v1/ca/current.json?limit=100"
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getHistoricDailyCovidStats: async () => {
    try {
      const response = await axios.get(
        "https://api.covidtracking.com/v1/ny/daily.json"
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
};

export default covid;
