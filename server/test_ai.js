const axios = require('axios');

async function testChat() {
    try {
        console.log('Sending request to local server...');
        const response = await axios.post('http://localhost:5000/api/chat', {
            prompt: 'Hello, how are you?'
        });
        console.log('Response status:', response.status);
        console.log('Response data:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        if (error.response) {
            console.error('Server responded with error:', error.response.status);
            console.error('Error data:', JSON.stringify(error.response.data, null, 2));
        } else if (error.request) {
            console.error('No response received from server');
        } else {
            console.error('Error during request setup:', error.message);
        }
    }
}

testChat();
