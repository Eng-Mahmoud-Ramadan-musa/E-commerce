export const initialState = {
  products: [],
  filteredProducts: [],
  textSearch: "",
  searchProducts: [],
  category: "all",
  cartItems: [],
  favoriteItems: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        category: action.payload,
        filteredProducts:
          action.payload === "all"
            ? state.products
            : state.products.filter(
                (product) => product.category === action.payload
              ),
      };
      case "SET_SEARCH_TERM":
        return {
          ...state,
          textSearch: action.payload,
          searchProducts: state.products.filter((product) =>
            product.title.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
    case "ADD_TO_SHOPPING":
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, count: 1 }],
        };
      };
    case "REMOVE_FROM_SHOPPING":
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.id === action.payload.id) {
              if (item.count > 1) {
                return {
                  ...item,
                  count: item.count - 1,
                };
              } else {
                // إزالة المنتج من سلة المشتريات إذا كان العدد أقل من واحد
                return null;
              }
            } else {
              return item;
            }
          })
          .filter(Boolean), // تصفية العناصر التي تمت إزالتها (null)
      };
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, action.payload],
      };
    case "REMOVE_TO_FAVORITE":
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
