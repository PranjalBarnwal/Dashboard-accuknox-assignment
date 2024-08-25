import { createSlice } from "@reduxjs/toolkit";

const startState = [
  {
    id: 'analytics',
    title: 'Analytics',
    widgets: [
      {
        id: 'visitors',
        name: 'Visitors',
        type: 'line',
        display: true
      },
      {
        id: 'traffic',
        name: 'Traffic',
        type: 'pie',
        display: true
      }
    ]
  },
  {
    id: 'sales',
    title: 'Sales',
    widgets: [
      {
        id: 'revenue',
        name: 'Revenue',
        type: 'line',
        display: true
      },
      {
        id: 'products',
        name: 'Products',
        type: 'pie',
        display: true
      }
    ]
  },
  {
    id: 'dev',
    title: 'Development',
    widgets: [
      {
        id: 'commits',
        name: 'Commits',
        type: 'line',
        display: true
      },
      {
        id: 'issues',
        name: 'Issues',
        type: 'pie',
        display: true
      }
    ]
  }
];


const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    sidebarVisible: false,
    dashboardData:startState,
    searchQuery: '',
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
      console.log(state.sidebarVisible);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload; 
    },
    addCategory: (state, action) => {
      const { id, title } = action.payload;
      const category = {
        id,
        title,
        widgets: [],
      };
      state.dashboardData.push(category);
    },
    removeCategory: (state, action) => {
      const { id } = action.payload;
      const categoryIndex = state.dashboardData.findIndex(
        (item) => item.id === id
      );
      if (categoryIndex !== -1) {
        state.dashboardData.splice(categoryIndex, 1);
      }
    },
    addWidget: (state, action) => {
      const { name, cid, id, type, display } = action.payload;
      const index = state.dashboardData.findIndex((item) => item.id === cid);
      if (index !== -1) {
        state.dashboardData[index].widgets.push({
          id,
          name,
          type,
          display,
        });
      }
    },
    toggleWidgetDisplay: (state, action) => {
      const { cid, id } = action.payload;
      const categoryIndex = state.dashboardData.findIndex(
        (item) => item.id === cid
      );
      if (categoryIndex === -1) return;
      const widgetIndex = state.dashboardData[categoryIndex].widgets.findIndex(
        (widget) => widget.id === id
      );
      if (widgetIndex === -1) return;
      state.dashboardData[categoryIndex].widgets[widgetIndex].display =
        !state.dashboardData[categoryIndex].widgets[widgetIndex].display;
    },

    removeWidget: (state, action) => {
    
      const { cid, id } = action.payload;
    
      const categoryIndex = state.dashboardData.findIndex(
        (item) => item.id === cid
      );
    
      if (categoryIndex === -1) {
        return;
      }
    
      const widgetIndex = state.dashboardData[categoryIndex].widgets.findIndex(
        (widget) => widget.id === id
      );
    
      if (widgetIndex === -1) {
        return;
      }
    
      state.dashboardData[categoryIndex].widgets.splice(widgetIndex, 1);
    }
  },
});

export const {
  toggleSidebar,
  addCategory,
  addWidget,
  removeCategory,
  removeWidget,
  toggleWidgetDisplay,
  setSearchQuery
} = dataSlice.actions;
export default dataSlice.reducer;
