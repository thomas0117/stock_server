module.exports = (io) => {

    io.on('connection', socket => {
        var products = [];

        console.log('new connection');

        socket.on('clickMs', (message) => {            
            console.log(message);
        });

        setInterval(()=>{
            for(var i = 0; i<200 ; i++){ 
                const product={
                    stockId:String,
                    stockName:String,
                    currentPrice:String,
                    changeRate:String
                }
                product.stockId = i.toString()
                product.stockName = 'STOCK' + i.toString()
                product.currentPrice = (Math.random() * 10000).toFixed(0)
                product.changeRate = (Math.random() * 100).toFixed(2)   
                products.push(product)               
            }
            socket.emit('newQuote', products);
            products = [];
        },1 )

        socket.on('disconnect', () => console.log('disconnected'));
    })

}