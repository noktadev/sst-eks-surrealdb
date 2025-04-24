import { Hono } from "hono";
import { Surreal } from "surrealdb";
import { Resource } from "sst/node/config";

const app = new Hono();
const db = new Surreal();

// Initialize database connection
async function initDB() {
  try {
    await db.connect(Resource.SurrealDB.URL);
    await db.signin({
      user: Resource.SurrealDB.USER,
      pass: Resource.SurrealDB.PASS,
    });
    await db.use(Resource.SurrealDB.NS, Resource.SurrealDB.DB);
    console.log("Connected to SurrealDB");
  } catch (error) {
    console.error("Failed to connect to SurrealDB:", error);
    process.exit(1);
  }
}

// Initialize database on startup
initDB();

// Health check endpoint
app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

// Example endpoint to create a record
app.post("/users", async (c) => {
  try {
    const body = await c.req.json();
    const user = await db.create("user", body);
    return c.json(user);
  } catch (error) {
    return c.json({ error: "Failed to create user" }, 500);
  }
});

// Example endpoint to get all users
app.get("/users", async (c) => {
  try {
    const users = await db.select("user");
    return c.json(users);
  } catch (error) {
    return c.json({ error: "Failed to fetch users" }, 500);
  }
});

export default app; 