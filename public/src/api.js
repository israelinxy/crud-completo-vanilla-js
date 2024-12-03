//api.js

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Función para obtener todos los usuarios (read)
export const getUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-lanzar el error para manejarlo en otro lugar si es necesario
  }
};

// Función para borrar un usuario (delete)
export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

// Función para actualizar un usuario (update) o crear un usuario (create)
export const updateUser = async (user) => {
  try {
    const url = user.id ? `${API_URL}/${user.id}` : API_URL;
    const method = user.id ? "PUT" : "POST";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error updating/creating user:", error);
    throw error;
  }
};
