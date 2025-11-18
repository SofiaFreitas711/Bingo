const { contextBridge, ipcRenderer } = require('electron')
// const html2canvas = require('html2canvas')

// window.html2canvas = html2canvas
// Expor uma API segura pro DOM
contextBridge.exposeInMainWorld('electronAPI', {
    test: ()=>console.log("preload carregado"),
    
//   getData: () => ipcRenderer.invoke('getData'),
})