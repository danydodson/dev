// import { useState, useEffect } from 'react'
// import { theme } from '../components/Shared/styles-global'
// import mediumZoom from 'medium-zoom'
// import storage from 'local-storage-fallback'

// function ZoomImages() {

//   const targetImg = 'img'
//   const targetGatsbyImg = 'gatsby-resp-image-image'
//   const images = Array.from(document.querySelectorAll(targetImg))
//   const filteredImages = []

//   for (let i = 0; i < images.length; i++) {
//     const img = images[i]

//     // Filter profile image
//     const profile = document.querySelector('.img-profile')
//     if (profile) {
//       const isProfile = profile.contains(img)

//       if (!isProfile) {

//         // Set maximum width/height to non-gatsby images
//         if (!img.classList.contains(targetGatsbyImg)) {
//           img.classList.add('img-not-gatsby-remark')
//         }

//         filteredImages.push(img)
//       }
//     }
//   }

//   let mediumZoomBgColor = ''
//   const savedTheme = JSON.parse(storage.getItem('theme')) || 'light'
//   mediumZoomBgColor = savedTheme.mode === 'light' ? theme.bgColorLight : theme.bgColorDark

//   // Apply medium zoom to images
//   mediumZoom(filteredImages, {
//     margin: 24,
//     background: mediumZoomBgColor
//   })

// }

// export default ZoomImages