exports.handler = async(event) => {
    let jsonEvent = JSON.stringify(event);

    console.log('logging event..... ', event);

    return {
        statusCode: 200,
        body: jsonEvent
    }
}