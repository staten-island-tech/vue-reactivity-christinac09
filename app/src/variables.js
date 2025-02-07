import { ref, reactive } from 'vue'
const cart = reactive({
  items: [],
  totalCost: 0,
  totalItems: 0,
})
export { cart }
