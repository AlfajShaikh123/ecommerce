import axios from "axios";

export async function addFev(id, newData) {
    try {
        // Step 1: Fetch existing account data
        const response = await axios.get(`http://localhost:3000/accounts/${id}`);
        const existingFev = response.data.fev || {};

        // Step 2: Merge existing fev data with new data
        const updatedFev = { ...existingFev, ...newData };

        // Step 3: Send the updated fev data back to the API
        await axios.put(`http://localhost:3000/accounts/${id}`, { fev: updatedFev });
    } catch (error) {
        console.error("Error updating fev data:", error);
    }
}

// export function fetchHomeData(id) {
//     return axios.get('http://localhost:3000/accounts', id)
// }