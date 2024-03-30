import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages/HomePage";
import { RecipePage } from "../../presentation/pages/RecipePage";
import { Layout } from "../../presentation/pages/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<RecipePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};