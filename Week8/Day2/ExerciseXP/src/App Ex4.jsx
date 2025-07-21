function App() {
  async function getWebhookData() {
    const response = await fetch("https://webhook.site/094d4188-964a-404f-9e9c-f1e684bc6361", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({key1: 'myusername',
                            email: 'mymail@gmail.com',
                            name: 'Isaac',
                            lastname: 'Doe',
                            age: 27})});
    console.log(response);
  }

  return (
    <> 
      <button onClick={getWebhookData}>Push me NOW!</button>
    </>

  )
}

export default App
