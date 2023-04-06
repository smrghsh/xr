# xr
In progress diagnostic tool for WebXR based single-user VR applications.
Intended as way for a research team out of the [SET Lab](https://setlab.soe.ucsc.edu/about/) to practice co-contributing to VR application and test technical approaches.

## Testing and Development
`npm install` to install required dependences
`npm run dev` to view a sample of the scene on a desktop browser
In order to test on a headset, use `npm run build` to create a build to the `/docs` folder. We have been hitting a GitHub pages sites configured to build off of this folder. (It would appear at USERNAME.github.io/xr)
In order to debug web content, see [Debug Browser Content](https://developer.oculus.com/documentation/web/browser-remote-debugging/). The general steps are to install Meta Quest Developer Hub, and use Chrome on the desktop to inspect web browser on the VR device
