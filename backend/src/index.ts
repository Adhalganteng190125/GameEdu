import { app } from "./app";
import { env } from "./config/env";

app.listen(env.port, () => {
  console.log(`[gameedu-backend] berjalan di http://localhost:${env.port}`);
  console.log(`[gameedu-backend] health check: http://localhost:${env.port}/api/health`);
});
