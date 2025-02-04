 import { create } from 'zustand';
 import { persist } from 'zustand/middleware'


 interface Product {
  id: number;
    name: string;
    image: any;
    slug: { current: string };
    price: number;
    discountPercentage: number;
    description: string;
    stockLevel: number;
    category: string;
  }
  
interface CartItem extends Product {
  quantity: number; // Required for items in the cart
}

interface CartStore {
  cart: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: ( slug: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      totalQuantity: 0,
      totalPrice: 0,
  
      // Add a product to the cart
      addToCart: (product: Product, quantity: number) => {
        const { cart } = get();
  
        // Check if the product with the same color and size already exists in the cart
        const existingProductIndex = cart.findIndex(
          (item) =>
            item.slug.current === product.slug.current
        );
  
        if (existingProductIndex > -1) {
          // If the product exists, update the quantity
          const updatedCart = [...cart];
          updatedCart[existingProductIndex].quantity += quantity;
  
          set((state) => ({
            cart: updatedCart,
            totalQuantity: state.totalQuantity + quantity,
            totalPrice: state.totalPrice + product.price * quantity,
          }));
        } else {
          // If the product does not exist, add it to the cart
          set((state) => ({
            cart: [...state.cart, { ...product, quantity }],
            totalQuantity: state.totalQuantity + quantity,
            totalPrice: state.totalPrice + product.price * quantity,
          }));
        }
      },
  
      // Remove a product from the cart
      removeFromCart: (slug: string) => {
        const { cart } = get();
  
        const productIndex = cart.findIndex(
          (item) =>
            item.slug.current === slug
        );
  
        if (productIndex > -1) {
          const product = cart[productIndex];
  
          set((state) => ({
            cart: cart.filter((_, index) => index !== productIndex),
            totalQuantity: state.totalQuantity - product.quantity,
            totalPrice: state.totalPrice - product.price * product.quantity,
          }));
        }
      },
  
      // Update the quantity of a product in the cart
      updateQuantity: (slug: string, quantity: number) => {
        const { cart } = get();
  
        const productIndex = cart.findIndex(
          (item) =>
            item.slug.current === slug
        );
  
        if (productIndex > -1) {
          const updatedCart = [...cart];
          const product = updatedCart[productIndex];
          const quantityDifference = quantity - product.quantity;
  
          updatedCart[productIndex].quantity = quantity;
  
          set((state) => ({
            cart: updatedCart,
            totalQuantity: state.totalQuantity + quantityDifference,
            totalPrice: state.totalPrice + quantityDifference * product.price,
          }));
        }
      },
  
      // Clear the entire cart
      clearCart: () => {
        set({
          cart: [],
          totalQuantity: 0,
          totalPrice: 0,
        });
      },
    }),
    {
      name: 'cart-storage', 
    }
  )

);

export default useCartStore;