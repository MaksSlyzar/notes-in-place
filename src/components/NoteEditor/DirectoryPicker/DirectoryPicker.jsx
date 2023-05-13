import "./DirectoryPicker.scss";
import React from "react";

class DirectoryPicker extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            openedDropdownDirectories: false,
            open: false
        };
    }

    openDropdownDirectory (event, value) {
        this.setState({ open: value });
        event.preventDefault();
    }

    selectDirectory = (dir) => {
        this.props.selectDirectory(dir);
        this.state.open = false;
    }

    render () {
        return (
            <div className="DirectoryPicker">
                <div className="Label">Directory</div>
                <div className={this.state.open?"Dropdown":"none"}>
                    {this.props.directories.map((dir, ind) => {
                        return <button key={ind} className="item" onClick={() => this.selectDirectory(dir)}>{dir}</button>
                    })}
                </div>

                <input id="directoryInput"
                    onFocus={(event) => this.openDropdownDirectory(event, true)}
                    onChange={(e) => this.handleSelectedDirectoryInput(e)} />
            </div>

        )
    }
}

export default DirectoryPicker;