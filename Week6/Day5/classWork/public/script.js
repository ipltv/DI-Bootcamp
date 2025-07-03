async function getData() {
  const response = await fetch("http://localhost:3001/users");
  const data = await response.json();
  return data;
}

(async () => 
{
    const data = await getData();
    const pElement = document.createElement('p');
    pElement.innerText = JSON.stringify(data, null, 2);
    document.body.appendChild(pElement);
})();

function getOneUser(event){
    event.preventDefault();
    const userID = event.target.userID.value;
}