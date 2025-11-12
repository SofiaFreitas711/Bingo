const { contextBridge, ipcRenderer } = require('electron')

// Expor uma API segura pro DOM
contextBridge.exposeInMainWorld('electronAPI', {
    test: ()=>console.log("preload carregado"),
    
//   getData: () => ipcRenderer.invoke('getData'),
})