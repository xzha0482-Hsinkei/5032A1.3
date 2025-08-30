import { ref, watch } from 'vue'
export function useLocalStorage(key, initialValue) {
  const state = ref(initialValue)
  try { const raw = localStorage.getItem(key); if (raw!=null) state.value = JSON.parse(raw) } catch {}
  watch(state, v => { try { localStorage.setItem(key, JSON.stringify(v)) } catch {} }, { deep:true })
  return state
}
