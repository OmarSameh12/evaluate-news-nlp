
// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8000/api'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

 function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // This is an example code that checks the submitted name. You may remove it from your code
    Client.checkForName(formText);
    var res = fetch('https://localhost:8000/send',{text:formText});
    res.then(res=>
        {
            document.getElementById('results').innerText=res;
            console.log("data is returned successfully")
        })
 
      
}


// Export the handleSubmit function
export { handleSubmit };

