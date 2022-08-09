import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

function App(){

    function createNotes(note){
        return <Note title={note.title} content={note.content} />
    }

    return <div>
        <Header />
        {notes.map(createNotes)}
        <Footer />
    </div>
}

export default App;