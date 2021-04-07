// import { useState, useEffect } from 'react'

// function getLocation() {
//   return window.location.href
// }

// const listeners = []

// /**
//  * Notifies all location listeners. Can be used if the history state has been manipulated
//  * in by another module. Effectifely, all components using the 'useLocation' hook will
//  * update.
//  */
// export function notify() {
//   listeners.forEach(listener => listener())
// }

// export function useLocation() {
//   const [{ pathname, search }, setLocation] = useState(getLocation())

//   useEffect(() => {
//     window.addEventListener('popstate', handleChange)
//     return () => window.removeEventListener('popstate', handleChange)
//   }, [])

//   useEffect(() => {
//     listeners.push(handleChange)
//     return () => listeners.splice(listeners.indexOf(handleChange), 1)
//   }, [])

//   function handleChange() {
//     setLocation(getLocation())
//   }

//   /**
//    * @param {string} url
//    */
//   function push(url) {
//     window.history.pushState(null, null, url)
//     notify()
//   }

//   /**
//    * @param {string} url
//    */
//   function replace(url) {
//     window.history.replaceState(null, null, url)
//     notify()
//   }

//   return {
//     push,
//     replace,
//     pathname,
//     search
//   }
// }