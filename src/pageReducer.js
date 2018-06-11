import {NEXTPAGE,PREVPAGE,SETPAGE,nextpage,prevpage,setpage} from './actions'

export default function page (page, action){
  switch (action.type) {
    case NEXTPAGE:
      return nextpage(page);

    case PREVPAGE:
      return prevpage(page);

    case SETPAGE:
      return setpage(page);
      
    default:
      return page;
  }
}
