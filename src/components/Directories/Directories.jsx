import React from "react";
import "./Directories.scss";
import CompleteNoIcon from "../../assets/icons/complete-no-icon.svg";
import NewDirectoryIcon from "../../assets/icons/new-file-icon.svg";

class Directory {
    name;
    notes = [];
    icon = null;

    constructor (name) {
        this.name = name;
        this.notes.push(new Note("my first note", true));
        this.notes.push(new Note("my second note"));
        this.notes.push(new Note("my test note"));
    }
    
    getCompleteNotes() {
        return 0;
    }
}

class Note {
    name;
    time;
    icon;
    complete = false;
    active;

    constructor (name, active = false) {
        this.name = name;
        this.active = active;
    }
}

class Directories extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            directories: [
                new Directory("Hello world"),
                new Directory("My test notes")
            ]
        };
    }

    render () {
        return (
            <div className="Directories">
                <div className="Directories_NewDirectory">
                    <div className="Directories_NewDirectory-Label">New directory</div>
                    <div className="Directories_NewDirectory-Icon">
                        <img src={NewDirectoryIcon} />
                    </div>
                </div>

                <div className="Directories_List">
                    {this.state.directories.map(directory => {
                        return [<div className="Directories_ListItem">
                            <div className="Directories_ListItemIcon"></div>
                            <div className="Directories_ListItemLabel">{directory.name}</div>
                            <div className="Directories_ListItemCompleteNotes">{directory.getCompleteNotes()}/{directory.notes.length} notes</div>
                            <div className="Directories_ListItemCompleteIcon">
                                <img src={CompleteNoIcon} />
                            </div>
                        </div>,
                        
                        directory.notes.map(note => {
                            return <div className="Directories_NotesList">
                                <div className={note.active ? " Directories_NotesList-Item Directories_NotesList-Item-Active":"Directories_NotesList-Item"}>
                                    <div className="Directories_NotesList-Item-Icon"></div>
                                    <div className="Directories_NotesList-Item-Label">{note.name}</div>
                                    
                                    <div className="Directories_NotesList-Item-Time">Fri 14:56</div>
                                    
                                    <div className="Directories_NotesList-Item-CompleteIcon">
                                        <img src={CompleteNoIcon} />
                                    </div>
                                </div>
                            </div>
                        })
                        ]
                    })}
    
                    
                </div>
            </div>
        );
    }
}

export default Directories;