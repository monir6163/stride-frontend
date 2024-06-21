let baseUrl = "";

if (
  import.meta.env.MODE === "production" ||
  import.meta.env.mode === "production"
) {
  baseUrl = "https://stride-backend-kappa.vercel.app/api/v1";
} else {
  baseUrl = "http://localhost:5000/api/v1";
}

export { baseUrl };
