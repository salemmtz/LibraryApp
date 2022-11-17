import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./books/layout/Main";
import { AuthorsPage, BooksPage } from "./books/pages";
import { AuthorDetailsPage } from "./books/pages/AuthorDetailsPage";
import { AuthorForm } from "./books/pages/AuthorForm";
import { BookDetailsPage } from "./books/pages/BookDetailsPage";
import { BookForm } from "./books/pages/BookForm";

export const AppRouter = () => {
  return (
    <>
      <Main>
        <Routes>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/authors" element={<AuthorsPage />} />

          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/authors/:id" element={<AuthorDetailsPage />} />

          <Route path="/createAuthor" element={<AuthorForm />} />
          <Route path="/createBook" element={<BookForm />} />

          <Route path="/*" element={<Navigate to="/books" />} />
        </Routes>
      </Main>
    </>
  );
};
