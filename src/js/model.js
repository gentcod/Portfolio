
export const sectionObserver = (callback, distance, coord) => {
   const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0,
      rootMargin: `-${distance}px` //distance away from target
   })
   observer.observe(coord)
}