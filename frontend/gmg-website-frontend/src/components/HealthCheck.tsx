import { useEffect } from "react";
import axios from "../redux/api"; // your axios instance

function HealthCheck() {
  useEffect(() => {
    axios.get("/api/health")
      .then(res => console.log("✅ Backend says:", res.data))
      .catch(err => console.error("❌ Backend error:", err));
  }, []);

  return <div>Check console for backend health</div>;
}

export default HealthCheck;
