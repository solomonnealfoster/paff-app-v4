'use server'

import { users } from "./../../components/loginData";

export async function createUsers() {
    // doc link: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
    // Fetch data or perform any server-side logic here
    return {
      props: {
        users,
      },
    };
  }