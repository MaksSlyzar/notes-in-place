import React from "react";
import "./NoteEditor.scss";
import Datepicker from "react-tailwindcss-datepicker"; 
import ContentEditable from "react-contenteditable";
import ImgIconSvg from "../../assets/icons/img-vector.svg";
import AlignLeftSvg from "../../assets/icons/align-left-icon.svg";
import AlignRightSvg from "../../assets/icons/align-right-icon.svg";
import AlignCenterSvg from "../../assets/icons/align-center-icon.svg";
import DirectoryPicker from "./DirectoryPicker/DirectoryPicker";

class NodeEditor extends React.Component {
    constructor (props) {
        super(props);
        this.contentEditable = React.createRef();

        this.state = {
            html: "<div class='itemfsada'>Note</div>",
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

    selectDirectory = (dir) => {
        // console.log("DIRECTORY")
        this.setState({ selectedDirectory: dir, selectedDirectoryInput: dir });
        document.getElementById("directoryInput").value = dir;
        this.setState({ openedDropdownDirectories: false });
    }

    handleSelectedDirectoryInput = (event) => {
        this.setState({ selectedDirectoryInput: event.target.value })
    }

    handleCompleteTime = (newValue) => {
        this.setState({ completeTime: newValue });
    }

    boldHandler = () => {
        // get user's selection
        const selection = window.getSelection();

        console.log(selection)
    }

    onKeyUpContentEditable = (div) => {
        setTimeout(() => {
            for (const el of div.target.children) {
                el.classList = ["item"];
            }
        }, 100);
    }

    render () {
        return (
            <div className="NoteEditor">
                <div className="NoteEditor_Title">Note title</div>

                <ContentEditable 
                    className="NoteEditor_NoteEdit"
                    html={this.state.html}
                    disabled={false}
                    tagName='div'
                    innerRef={this.contentEditable}
                    onChange={this.handleNoteEdit}
                    onKeyUp={this.onKeyUpContentEditable}
                />

                <div className="NoteEditor_StylingButtons">
                    <button className="NoteEditor_StylingButtons-sm" onClick={this.boldHandler}>B</button>
                    <button className="NoteEditor_StylingButtons-sm">I</button>
                    <button className="NoteEditor_StylingButtons-sm">
                        <img src={ImgIconSvg} width="30px" height="30px" />
                    </button>
                    
                    <button className="NoteEditor_StylingButtons-sm">
                        <img src={AlignLeftSvg} width="30px" height="30px" /></button>
                    
                    <button className="NoteEditor_StylingButtons-sm">
                        <img src={AlignCenterSvg} width="30px" height="30px" /></button>
                    
                    <button className="NoteEditor_StylingButtons-sm">
                        <img src={AlignRightSvg} width="30px" height="30px" /></button>
                </div>
                
                <button></button>

                <DirectoryPicker directories={this.state.directories} selectDirectory={this.selectDirectory} />

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