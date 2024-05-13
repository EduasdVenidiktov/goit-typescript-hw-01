import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface UserData {
  id: number;
  name: string;
}
const UserData = await fetchData<UserData>("https://api.example.com/users");
