import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequaireAuth } from "../hoc";
import { LoginPage } from "../Pages/LoginPage";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { ProjectPage } from "../Pages/ProjectPage";
import { RegisterPage } from "../Pages/RegisterPage";

export const RoutesComponents = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequaireAuth>
            <ProjectPage />
          </RequaireAuth>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegisterPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};
