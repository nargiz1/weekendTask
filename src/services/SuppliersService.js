import Axios from "../helpers/setUpAxios";

export async function getSuppliers() {
  try {
    return await (
      await Axios.get(`/api/suppliers`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          'Accept': "application/json",
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}

export async function getSupplierById(id) {
  try {
    return await (
      await Axios.get(`/api/suppliers`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          'Accept': "application/json",
        },
        params: {
          id: id
        }
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}

export async function deleteSupplierById(id) {
  try {
    return await (
      await Axios.delete(`/api/suppliers/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          'Accept': "application/json",
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}

export async function addSupplier(payload) {
  try {
    return await (
      await Axios.post(`/api/suppliers/`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          'Accept': "application/json",
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}