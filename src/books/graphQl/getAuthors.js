import { gql } from "@apollo/client";

export const getAuthors = gql`
  query get_Authors {
    authors {
      id
      name
      dateOfBirth
    }
  }
`;
