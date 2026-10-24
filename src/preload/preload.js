const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('calculatorAPI', {
    
});