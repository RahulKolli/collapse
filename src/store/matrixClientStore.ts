import { create } from 'zustand'

// type State = {
//   client: MatrixClient | null
//   setClient: (client: MatrixClient) => void
// }

type State = {
  client: any // Matrix is disabled
  setClient: (client: any) => void
}

export const useMatrixClientStore = create<State>((set) => ({
  client: null,
  setClient: (client) => set({ client }),
}))
