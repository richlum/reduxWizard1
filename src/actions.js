export const NEXTPAGE = 'NEXTPAGE'
export const PREVPAGE = 'PREVPAGE'
export const SETPAGE  = 'SETPAGE'

/* action creators */
export function nextpage (page){
  return {
    type: NEXTPAGE,
    page: page + 1
  }
}

export function prevpage (page){
  return {
    type: PREVPAGE,
    page: page - 1
  }
}

export function setpage(page){
  return {
    type: SETPAGE,
    page: page
  }
}
