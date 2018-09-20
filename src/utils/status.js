
export const INIT = 'INIT';
export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const END = 'END';
export const FAILURE = 'FAILURE';
export const CANCEL = 'CANCEL';



export function isLoading(status) {
  return status === INIT || status === PENDING;
}
