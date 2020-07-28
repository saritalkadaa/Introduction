import React from 'react';
import './App.css';
import SababaForm from './forms.js';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'\import { listNotes } from './graphql/queries';
// import { listNotes } from './graphql/queries';
// import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

function App() {
  return (
    <div className="App">
      
     {/* <AmplifySignOut /> */}
        <SababaForm /> 

    </div>

    
  );
}


// async function fetchNotes() {
//   const apiData = await API.graphql({ query: listNotes });
//   setNotes(apiData.data.listNotes.items);
// }

//export default withAuthenticator(App);
export default App;
