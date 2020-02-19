//Tipos
export const Types ={
    signOut: '@auth/SIGN_OUT'
};


//Função saida para login
export function signOut(data = {}) {
  return { type: Types.signOut, ...data };
}
