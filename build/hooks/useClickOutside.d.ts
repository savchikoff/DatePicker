import { MutableRefObject, RefObject } from "react";
declare function useClickOutside<T extends HTMLElement>(ref: RefObject<T> | MutableRefObject<T>, handler: EventListener): void;
export default useClickOutside;
