import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUser {
      firstName
      lastName
      email
      phoneNumber
      gender
      id
    }
  }
`;

export const GET_GENDERS = gql`
  query {
    getGenders
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $gender: String!
    $phoneNumber: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      gender: $gender
      phoneNumber: $phoneNumber
    ) {
      firstName
      lastName
      email
      phoneNumber
      gender
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const GET_USER_BY_ID = gql`
  mutation getUserById($id: String!) {
    getUserById(id: $id) {
      id
      firstName
      lastName
      email
      gender
      phoneNumber
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $gender: String!
    $phoneNumber: String!
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      gender: $gender
      phoneNumber: $phoneNumber
    ) {
      firstName
      lastName
      email
      gender
      phoneNumber
    }
  }
`;

export const SEARCH_USER = gql`
  mutation findUser($firstName: String) {
    findUser(firstName: $firstName) {
      id
      firstName
      lastName
      email
      gender
      phoneNumber
    }
  }
`;

export const PAGINATION = gql`
  query pagination($first: Int, $offset: Int) {
    pagination(first: $first, offset: $offset) {
      users {
        id
        firstName
        lastName
        email
        gender
        phoneNumber
      }
      totalUsers
    }
  }
`;

export const FILTER_GENDER = gql`
  mutation filterGender($gender: String) {
    filterGender(gender: $gender) {
      id
      firstName
      lastName
      email
      gender
      phoneNumber
    }
  }
`;
