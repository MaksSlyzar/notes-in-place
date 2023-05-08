import React from "react";
import "./NoteEditor.scss";
import Datepicker from "react-tailwindcss-datepicker"; 
import ContentEditable from "react-contenteditable";

class NodeEditor extends React.Component {
    constructor (props) {
        super(props);
        this.contentEditable = React.createRef();

        this.state = {
            html: "<div>Note</div>",
            directories: ["Hello world", "Today", "Yesterday", "Programming", "English"],
            selectedDirectory: "",
            openedDropdownDirectories: false,
            selectedDirectoryInput: "",
            completeTime: null,
            noteContent: ""
        };
    }

    handleNoteEdit = (evt) => {
        this.setState({ html: evt.target.value });
    }

    openDropdownDirectory (event, value) {
        this.setState({ openedDropdownDirectories: value });
        event.preventDefault();
    }

    selectDirectory (dir) {
        // console.log("DIRECTORY")
        this.setState({ selectedDirectory: dir, selectedDirectoryInput: dir });
        document.getElementById("directoryInput").value = dir;
        this.setState({ openedDropdownDirectories: false });
        
    }

    handleSelectedDirectoryInput (event) {
        this.setState({ selectedDirectoryInput: event.target.value })
    }

    handleCompleteTime = (newValue) => {
        this.setState({ completeTime: newValue });
    }

    render () {
        return (
            <div className="NoteEditor">
                <div className="NoteEditor_Title">Note title</div>

                <ContentEditable 
                    className="NoteEditor_NoteEdit"
                    html={this.state.html}
                    disabled={false}
                    tagName='article'
                    innerRef={this.contentEditable}
                    onChange={this.handleNoteEdit}
                />

                <div className="NoteEditor_StylingButtons">
                    <button>B</button>
                </div>
                
                <button></button>

                <div className="NoteEditor_UploadToDirectory">
                    <div className="Label">Directory</div>
                    <div className={this.state.openedDropdownDirectories?"Dropdown":"none"}>
                        {this.state.directories.map((dir, ind) => {
                            return <button key={ind} className="item" onClick={() => this.selectDirectory(dir)}>{dir}</button>
                        })}
                    </div>

                    <input id="directoryInput"
                        onFocus={(event) => this.openDropdownDirectory(event, true)}
                        onChange={(e) => this.handleSelectedDirectoryInput(e)} />
                </div>

                <div className="NoteEditor_CompleteTime">
                    <div className="Label">Complete time</div>

                    <Datepicker
                        useRange={false}
                        asSingle={true}
                        onChange={this.handleCompleteTime}
                        value={this.state.completeTime}
                    />
                </div>

                

                <div className="NoteEditor_SaveButton">Save</div>
            </div>
        )
    }
}

export default NodeEditor;