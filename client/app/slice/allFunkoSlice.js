import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFunkoPops = createAsyncThunk("fetchFunkoPops", async () => {
  try {
    const { data } = await axios.get(`/api/funkoPop`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addFunkoPop = createAsyncThunk(
  "addFunkoPop",
  async ({ name, category, price, imageUrl, size, edition, description }) => {
    try {
      const { data } = await axios.post(`/api/funkoPop`, {
        name,
        category,
        price,
        imageUrl,
        size,
        edition,
        description,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteFunkoPop = createAsyncThunk(
  "deleteFunkoPop",
  async (funkoId) => {
    try {
      const { data } = await axios.delete(`/api/funkoPop/${funkoId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchFunkoPopByCategory = createAsyncThunk(
  "fetchFunkoPopByCategory",
  async (category) => {
    try {
      const { data } = await axios.get(`/api/funkoPop/filter/${category}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

//THUNKS FOR DROPDOWN MENU

export const fetchFunkosByName = createAsyncThunk(
  "fetchFunkosByName",
  async () => {
    try {
      const { data } = await axios.get(`/api/funkoPop/sort/byName`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchFunkosByPriceLow = createAsyncThunk(
  "fetchFunkosByPriceLow",
  async () => {
    try {
      const { data } = await axios.get(`/api/funkoPop/sort/priceLow`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchFunkosByPriceHigh = createAsyncThunk(
  "fetchFunkosByPriceHigh",
  async () => {
    try {
      const { data } = await axios.get(`/api/funkoPop/sort/priceHigh`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchMiniFunkos = createAsyncThunk(
  "fetchMiniFunkos",
  async () => {
    try {
      const { data } = await axios.get(`/api/funkoPop/sort/mini`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchRegularFunkos = createAsyncThunk(
  "fetchRegularFunkos",
  async () => {
    try {
      const { data } = await axios.get(`/api/funkoPop/sort/regular`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchJumboFunkos = createAsyncThunk(
  "fetchJumboFunkos",
  async () => {
    try {
      const { data } = await axios.get(`/api/funkoPop/sort/jumbo`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchFunkoPopByFunkoId = createAsyncThunk(
  "fetchFunkoPopByFunkoId",
  async (funkoId) => {
    try {
      const { data } = await axios.get(`/api/funkoPop/${funkoId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const allFunkoPopsSlice = createSlice({
  name: "funkoPops",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFunkoPops.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addFunkoPop.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteFunkoPop.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchFunkoPopByCategory.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchFunkosByName.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchFunkosByPriceLow.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchFunkosByPriceHigh.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchMiniFunkos.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchRegularFunkos.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchJumboFunkos.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchFunkoPopByFunkoId.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const selectFunkoPops = (state) => {
  return state.allFunkoPops;
};

export default allFunkoPopsSlice.reducer;
