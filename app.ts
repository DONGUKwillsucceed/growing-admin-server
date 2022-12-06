import AdminJS from "adminjs";
import express from "express";
import AdminJSExpress from "@adminjs/express";

const PORT = 3000;

const start = async () => {
  const app = express();

  const admin = new AdminJS({});

  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
