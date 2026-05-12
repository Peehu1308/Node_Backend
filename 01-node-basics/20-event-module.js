const EventEmitter=require('events');


const customEmitter=new EventEmitter()
customEmitter.on('response',(name)=>{
    console.log(`data received ${name} with id:${id}`)
})
customEmitter.on('trial',()=>{
    console.log(`different console logs`)
})


customEmitter.emit('response','peehu');
customEmitter.emit('trial');
