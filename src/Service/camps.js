import axios from 'axios';

export async function getCamp() {
  try {
    const response = await axios('http://localhost:3002/camp');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

export async function getReview() {
  try {
    const response = await axios('http://localhost:3002/campReview');
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
